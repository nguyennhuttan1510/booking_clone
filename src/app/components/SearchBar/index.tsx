'use client'
import React, {useEffect, useRef, useState} from 'react';
import {Button, DatePicker, Input, Switch} from "antd";
import useMaskClosable from "@/hooks/useMaskClosable";
import Dialog from "@/app/components/Dialog";
import {FaBed, FaRegCalendar, FaRegUser} from "react-icons/fa6";

const {RangePicker} = DatePicker

const SearchBar = () => {
  const [open, setOpen, contentRef ,triggerRef] = useMaskClosable()

  return (
      <div className='flex gap-2 p-1 mb-4 mt-2 w-full h-[66px] bg-yellow-400 rounded-lg'>
        <div className='flex-1'>
          <Input prefix={<FaBed className='text-gray-400' size={24} />} style={{height: '100%'}} />
        </div>
        <div className='w-[27%]'>
          <div className='h-full relative'>
            <div className='absolute z-50 top-1/2 -translate-y-1/2 left-3'><FaRegCalendar className='text-gray-400' size={24} /></div>
            <RangePicker suffixIcon={null} className='w-full' style={{height: '100%', paddingLeft: '60px'}} />
          </div>
        </div>
        <div className='w-[27%]'>
          <div className='h-full noSelect'>
            <div ref={triggerRef} className='w-full bg-white rounded-md relative pl-16 py-1 pr-3' style={{height: '100%'}}>
              <div className='absolute z-50 top-1/2 -translate-y-1/2 left-3'><FaRegUser className='text-gray-400' size={24} /></div>
            </div>
            <Dialog open={open} className='flex-col float-right w-[30%] p-8' ref={contentRef}>
                <div className='flex justify-between items-center mb-1'>
                  <div className='text-sm font-medium text-[#1a1a1a]'>Người lớn</div>
                  <div className='flex border border-gray-300 rounded'>
                    <div className='py-2 px-4 text-xl cursor-pointer' >-</div>
                    <div className='py-2 px-4 self-center font-bold text-sm'>2</div>
                    <div className='py-2 px-4 text-xl cursor-pointer'>+</div>
                  </div>
                </div>

                <div className='flex justify-between items-center mb-1'>
                  <div className='text-sm font-medium text-[#1a1a1a]'>Trẻ em</div>
                  <div className='flex border border-gray-300 rounded'>
                    <div className='py-2 px-4 text-xl cursor-pointer' >-</div>
                    <div className='py-2 px-4 self-center font-bold text-sm'>2</div>
                    <div className='py-2 px-4 text-xl cursor-pointer'>+</div>
                  </div>
                </div>

                <div className='flex justify-between items-center mb-1'>
                  <div className='text-sm font-medium text-[#1a1a1a]'>Phòng</div>
                  <div className='flex border border-gray-300 rounded'>
                    <div className='py-2 px-4 text-xl cursor-pointer' >-</div>
                    <div className='py-2 px-4 self-center font-bold text-sm'>2</div>
                    <div className='py-2 px-4 text-xl cursor-pointer'>+</div>
                  </div>
                </div>

                <hr className='my-4'/>

                <div className='flex justify-between mb-4'>
                  <div className='text-sm text-[#1a1a1a]'>mang thú cưng đi cùng</div>
                  <Switch size='small' defaultChecked />
                </div>

                <Button style={{borderColor: 'blue'}} className='hover:!bg-blue-50'>
                  <div className='text-blue-600'>
                    Xong
                  </div>
                </Button>
            </Dialog>
          </div>
        </div>
        <div className='flex-grow-0'>
          <Button style={{height: '100%', backgroundColor: 'blue', color: 'white', fontWeight: 'bold', fontSize: '16px', padding: '4px 24px'}}>Tìm</Button>
        </div>
      </div>
  );
};

export default SearchBar;