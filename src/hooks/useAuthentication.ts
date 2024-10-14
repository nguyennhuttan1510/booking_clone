'use client';
import React, {useContext} from 'react';
import {AuthContext} from "@/app/providers/AuthenticationProvider";

const useAuthentication = () => {
  const context = useContext(AuthContext)
  if(!context) throw new Error('Please wrap with AuthenticationProvider')
  return context
}

export default useAuthentication;