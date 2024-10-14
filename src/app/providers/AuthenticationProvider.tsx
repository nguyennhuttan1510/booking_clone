'use client'
import React, {useEffect, useState} from 'react';
import useLocalStorage from "@/hooks/useLocalStorage";
import UserAPI from "@/lib/http/apis/users";
import {ProfileType} from "@/lib/http/apis/users.d";
import {User} from "@/app/(layout-public)/signin/page";
import {jwtDecode, JwtPayload} from "jwt-decode";
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import {FIELD_ACCESS_TOKEN, TOKEN_TYPE} from "@/constants";
import instance, {setAuthorizationHeader} from "@/lib/http/instance";

export type AuthContextType = {
  isValidToken: boolean
  isValidTokenLoaded: boolean
  tokenParsed: AccessTokenParseType | null
  isSignIn: boolean
  profile: ProfileType | null

  onSignIn: (account: User) => Promise<ResourceSignIn>
  onSignOut: SignOut
  refreshToken: () => void
  verifySession: () => void
  checkToken: () => void
  parsedToken: (token: string | null) => AccessTokenParseType | undefined
  onChangeProfile: (profile: ProfileType) => void
}

export type AccessTokenParseType = JwtPayload & {
  user_id: string
  profile_id: string
  id: string
  email: string
  username: string
  [key: string]: any
}

export type AuthProviderState = {
  isValidToken: boolean
  tokenParsed: AccessTokenParseType | null
  isLoadingVerifyToken: boolean
  isSignIn: boolean
  profile: ProfileType | null
}

export type ResourceSignIn = {
  status: boolean,
  tokenParsed: any,
  token: undefined
}

export type SignOutOption = {
  redirect: string
}

export type SignOut = (options?: SignOutOption) => void


export const AuthContext = React.createContext<AuthContextType | undefined>(undefined)

const AuthenticationProvider = ({children}: {children: React.ReactNode}) => {
  const router = useRouter()
  const [state, setState] = useState<AuthProviderState>(
    {
      isValidToken: false,
      isLoadingVerifyToken: true,
      tokenParsed: null,
      isSignIn: false,
      profile: null
    }
  )
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const {getItem, setItem, removeItem} = useLocalStorage(FIELD_ACCESS_TOKEN)

  const params = new URLSearchParams(searchParams)
  const pathnameReturn = params.get('return')

  useEffect(() => {
    const token = getItem()
    if(token) {
      setAuthorizationHeader(token)
    }
  }, [])

  const handleSetState = (key: keyof AuthProviderState, value: any) => {
    setState(prevState => ({...prevState, [key]: value}))
  }

  const parsedToken = (token: string | null): AccessTokenParseType | undefined => {
    if(!token) return
    return jwtDecode(token)
  }

  const verifyToken = async (token: string | null) => {
    if(!token) return false
    try {
      const res =  await UserAPI.verifyToken(token)
      if(res?.data?.status) {
        return true
      }
      throw new Error('Not found field status or status is false')
    } catch (e) {
      console.error("Token is expired or invalid:", e)
      return false
    }
  }

  const onSignIn = async (account: User) => {
    let resource: ResourceSignIn = {
      status: false,
      tokenParsed: null,
      token: undefined
    }
    try {
      const res = await UserAPI.getToken(account)
      const token = res.data?.[FIELD_ACCESS_TOKEN]
      const tokenParsed = parsedToken(token)

      if(tokenParsed && token) {
        removeItem()
        setItem(token)

        setAuthorizationHeader(token)

        handleSetState('tokenParsed', tokenParsed)
        handleSetState('isValidToken', true)


        resource = {
          token: token,
          tokenParsed: tokenParsed,
          status: true
        }
      }
    } catch (e) {
      console.error('Get token error', e )
    }
    return resource
  }

  const onSignOut: SignOut = (options={redirect: '/'}) => {
    removeItem()
    handleSetState('isSignIn', false)
    window.location.replace(options.redirect)
  }

  const getProfile = async (profileID: string) => {
    try {
      return await UserAPI.getProfile(profileID)
    } catch (e) {
      console.error('getProfile', e)
    }
  }

  /*
  * Check User existed a access token and token is valid
  * If token is not existed or token invalid system will remove session sign in Clerk and remove token invalid
  * Else user will be known that user have been signed in
  * */
  const checkToken = async () => {
    handleSetState('isLoadingVerifyToken', true)
    try {
      const accessToken = getItem()
      const isValid = await verifyToken(accessToken)
      if(!isValid) {
        removeItem()
        handleSetState('isSignIn', false)
        router.push(`/signin?return=${pathname}`)
        return
      }
      const tokenParsed = parsedToken(accessToken)
      if(!tokenParsed) throw new Error('Parse token failed')
      const profile = await getProfile(tokenParsed.profile_id)

      handleSetState('tokenParsed', tokenParsed)
      handleSetState('isValidToken', true)
      handleSetState('isSignIn', true)
      handleSetState('profile', profile?.data.data)
    } catch (e) {
      console.error(e)
    } finally {
      handleSetState('isLoadingVerifyToken', false)
    }
  }

  const onChangeProfile: AuthContextType['onChangeProfile'] = (profile) => {
    handleSetState('profile', profile)
  }

  const value: AuthContextType = {
    isValidToken: state.isValidToken,
    isValidTokenLoaded: state.isLoadingVerifyToken,
    tokenParsed: state.tokenParsed,
    isSignIn: state.isSignIn,
    profile: state.profile,
    onSignIn,
    onSignOut,
    refreshToken: () => {},
    verifySession: () => {},
    checkToken,
    parsedToken,
    onChangeProfile,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthenticationProvider;