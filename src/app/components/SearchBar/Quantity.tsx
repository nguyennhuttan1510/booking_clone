import React from 'react';

export type QuantityProps = {
  title: string
  value: number
  onDecrease?: () => void
  onIncrease?: () => void
}

const Quantity = (props: QuantityProps) => {
  const {title='__', value=0, onDecrease, onIncrease} = props
  return (
    <div className='flex justify-between items-center mb-1'>
      {title && (<div className='text-sm font-medium text-[#1a1a1a]'>{title}</div>)}
      <div className='flex border border-gray-300 rounded'>
        <div className='py-2 px-4 text-xl cursor-pointer' onClick={onDecrease} >-</div>
        <div className='py-2 px-4 self-center font-bold text-sm'>{value}</div>
        <div className='py-2 px-4 text-xl cursor-pointer' onClick={onIncrease}>+</div>
      </div>
    </div>
  );
};

export default Quantity;