import React from 'react';
import classNames from "classnames";

interface NavBarItemHeaderProps extends React.HtmlHTMLAttributes<'div'> {
  label?: string
  onClick?: () => void
  children?: React.ReactNode
  active?: boolean
}

const NavBarHeader = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='flex gap-3'>
      {children}
    </div>
  );
};

export const NavBarItemHeader = (props: NavBarItemHeaderProps) => {
  const {label, children, className, active=false, onClick} = props
  return (
    <div className={classNames('rounded-full px-4 py-3 text-white text-sm cursor-pointer', className, {'border border-white bg-[#1a4fa0]': active})} onClick={onClick}>
      {label ? label : children}
    </div>
  )
}

export default NavBarHeader;