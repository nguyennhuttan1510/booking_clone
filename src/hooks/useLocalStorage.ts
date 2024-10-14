import {useCallback} from "react";

const useLocalStorage = (key: string) => {

  const getItem = useCallback(() => {
    return localStorage.getItem(key)
  },[key])

  const setItem = useCallback((value: string) => {
    return localStorage.setItem(key, value)
  },[key])

  const removeItem = useCallback(() => {
    return localStorage.removeItem(key)
  },[key])

  const clear = useCallback(() => {
    return localStorage.clear()
  },[key])


  return { getItem, setItem, removeItem, clear } as const
}

export default useLocalStorage;