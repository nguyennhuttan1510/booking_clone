import React, {ForwardedRef, forwardRef} from 'react';
import classNames from "classnames";

type DialogType = {
  open: boolean
} & React.HTMLAttributes<HTMLDivElement>

const Dialog = (props: DialogType, ref: ForwardedRef<HTMLDivElement>) => {
  const {className, children, open} = props
  if (!open) return null;
  return (
      <div ref={ref} className={classNames('flex bg-white rounded-lg shadow-lg mt-2 absolute z-50', className)}>
        {children}
      </div>
  );
}

export default forwardRef<HTMLDivElement, DialogType>(Dialog);