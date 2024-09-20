'use client'
import React, {createContext, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import {FaRegBell} from "react-icons/fa6";
import NavBarHeader, {NavBarItemHeader} from "@/app/components/layouts/NavBarHeader";
import Header from "@/app/components/layouts/Header";
import Footer from "@/app/components/layouts/Footer";
import {useAuth} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import ProtectRouteProvider from "@/app/providers/ProtectRouteProvider";
import {LayoutMainContext} from "@/hooks/useLayout";

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
        <Header isSearchTool={state.isSearch} isShowMenu={state.isMenu} />
        {children}
        <Footer />
      </LayoutMainContext.Provider>
    </ProtectRouteProvider>
  );
};

export default LayoutMain;