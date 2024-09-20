'use client'
import React from 'react';
import FilterItem from "@/app/(main-layout)/search/components/FilterItem";

const Filter = () => {
  return (
    <div className='filter-sidebar rounded-xl border border-gray-300'>
      {/*ITEM FILTER*/}
      <div className='p-2 font-bold text-[#1a1a1a] border-b border-gray-300' >Chọn lọc theo:</div>
      <FilterItem />
      <FilterItem />
    </div>
  );
};

export default Filter;