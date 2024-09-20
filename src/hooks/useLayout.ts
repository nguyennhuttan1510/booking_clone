import React, {createContext, useContext} from "react";
import {MainLayoutContextState, MainLayoutContextValue} from "@/app/(main-layout)/layout";

export const LayoutMainContext = createContext<MainLayoutContextValue | undefined>(undefined)

export function useLayout() {
  const context = useContext(LayoutMainContext)
  if(!context) throw new Error('context without LayoutMainContext provider')
  return context as MainLayoutContextValue
}