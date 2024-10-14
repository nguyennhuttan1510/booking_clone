'use client';
import React, {useEffect} from 'react';
import useAuthentication from "@/hooks/useAuthentication";

const ProtectRouteProvider = ({children}:{children: React.ReactNode}) => {
  const { checkToken, isSignIn } = useAuthentication()

  useEffect(() => {
    checkToken()
  }, [])

  if(!isSignIn) {
    return null
  }

  return (
    <>
      {children}
    </>
  );
};

export default ProtectRouteProvider;