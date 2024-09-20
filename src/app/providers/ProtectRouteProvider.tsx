import React from 'react';
import {useAuth} from "@clerk/nextjs";
import {useRouter} from "next/navigation";

const ProtectRouteProvider = ({children}:{children: React.ReactNode}) => {
  const {isSignedIn, isLoaded} = useAuth()
  console.log('isSignedIn', isSignedIn)
  console.log('isLoaded', isLoaded)
  const router = useRouter()

  if(!isLoaded) {
    return null
  }

  if(!isSignedIn) {
    router.push('/signin')
    return
  }

  return (
    <>
      {children}
    </>
  );
};

export default ProtectRouteProvider;