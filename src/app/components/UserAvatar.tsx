import React, {forwardRef} from 'react';
import classNames from "classnames";

export type UserAvatarProps = {
  name?: string | React.ReactNode
  sub?: string | React.ReactNode
  avatar?: string
} & React.HTMLAttributes<HTMLDivElement>
const UserAvatar = (props: UserAvatarProps, ref:  React.LegacyRef<HTMLDivElement> | undefined) => {
  const {name, sub, avatar, className,...rest} = props
  return (
    <div ref={ref} className={classNames('flex gap-1.5 items-center', className)} {...rest}>
      <div className='rounded-full w-[34px] h-[34px] bg-orange-300 flex justify-center items-center text-sm'>T</div>
      <div className='text-sm'>
        {typeof name === 'string' ? (<div className='text-sm font-medium'>{name}</div>) : <div>{name}</div>}
        {typeof sub === 'string' ? (<div className='text-[12px] text-gray-500'>{sub}</div>) : <div>{sub}</div>}
      </div>
    </div>
  );
};

export default forwardRef(UserAvatar);