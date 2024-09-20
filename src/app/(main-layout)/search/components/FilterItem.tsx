import React from 'react';
import {Checkbox} from "antd";

const mockupFilterItem = [
  {
    label: 'Căn hộ',
    count: 12,
  },
  {
    label: 'Resort',
    count: 12,
  },
  {
    label: 'Dưới 5km',
    count: 20,
  },
  {
    label: 'Phòng tắm riêng',
    count: 12,
  },
  {
    label: 'TV',
    count: 104,
  },
  {
    label: 'Khách sạn',
    count: 320,
  },
  {
    label: 'Giường đôi',
    count: 234,
  },
]

const FilterItem = () => {
  return (
    <div className='pl-3.5 pr-4 py-3 border-b border-gray-300 last:border-b-0'>
      <div className='font-bold text-sm text-[#1a1a1a] mb-2'>Dùng các bộ lọc cũ</div>
      {mockupFilterItem.map((filterItem, index) => (
        <div key={index} className='flex justify-between items-center py-[5px]'>
          <Checkbox style={{width: '100%'}}  onChange={() => {}}>
            <div>{filterItem.label}</div>
          </Checkbox>
          <div className='text-sm'>{filterItem.count}</div>
        </div>
      ))}
    </div>
  );
};

export default FilterItem;