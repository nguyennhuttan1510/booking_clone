import React from 'react';

interface NavBarItemHeaderProps extends React.HtmlHTMLAttributes<'div'> {
  label?: string
  onClick?: () => void
  children?: React.ReactNode
}

const NavBarHeader = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='flex gap-3'>
      {children}
    </div>
  );
};

export const NavBarItemHeader = (props: NavBarItemHeaderProps) => {
  const {label, children, className, onClick} = props
  return (
    <div className='border border-white rounded-full px-4 py-3 text-white text-sm cursor-pointer' onClick={onClick}>
      {label ? label : children}
    </div>
  )
}

export default NavBarHeader;