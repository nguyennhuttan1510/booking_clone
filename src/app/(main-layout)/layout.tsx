'use client'
import React, {useState} from 'react';
import ProtectRouteProvider from "@/app/providers/ProtectRouteProvider";
import {LayoutMainContext} from "@/hooks/useLayout";
import AuthenticationProvider from "@/app/providers/AuthenticationProvider";

export type MainLayoutContextValue = MainLayoutContextState & {
  setState: React.Dispatch<React.SetStateAction<MainLayoutContextState>>
}

export type MainLayoutContextState = {
  isSearch: boolean
  isMenu: boolean
}

const defaultContext: MainLayoutContextState = {
  isSearch: true,
  isMenu: true,
}

const LayoutMain = ({children}:{children: React.ReactNode}) => {
  const [state, setState] = useState<MainLayoutContextState>(defaultContext)

  const value: MainLayoutContextValue = {
    isMenu: state.isMenu,
    isSearch: state.isSearch,
    setState
  }

  return (
    <ProtectRouteProvider>
      <LayoutMainContext.Provider value={value}>
        {children}
      </LayoutMainContext.Provider>
    </ProtectRouteProvider>
  );
};

export default LayoutMain;