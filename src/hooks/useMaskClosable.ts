import React, {useEffect, useRef, useState} from 'react';
const useMaskClosable = () => {
  const [state, setState] = useState({
    show: false
  })

  const contentRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const onDisplayBoxDropDownSearch = (isDisplay: boolean) => {
    setState(prevState => ({...prevState, show: isDisplay}))
  }

  useEffect(() => {
    const listenClick = () => {
      document.addEventListener('click', function(event: any) {
        if( triggerRef?.current && triggerRef?.current.contains(event.target)) {
          onDisplayBoxDropDownSearch(true)
          return
        }

        const isClickOverModel = contentRef?.current && !contentRef?.current.contains(event.target)
        const isClickOverTrigger = triggerRef?.current && !triggerRef?.current.contains(event.target)
        if(isClickOverTrigger && isClickOverModel) {
          onDisplayBoxDropDownSearch(false)
          return;
        }
        // Check if the clicked target is inside the element
      });
    }
    listenClick()
    return () => listenClick()


  }, [])

  return [state.show, onDisplayBoxDropDownSearch, contentRef, triggerRef] as const
};

export default useMaskClosable;