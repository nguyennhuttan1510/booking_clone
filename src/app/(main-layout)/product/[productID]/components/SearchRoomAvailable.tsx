import React from 'react';
import {Button, DatePicker, Input, Switch} from "antd";
import {FaBed, FaRegCalendar, FaRegUser} from "react-icons/fa6";
import Dialog from "@/app/components/Dialog";
import Quantity from "@/app/components/SearchBar/Quantity";
import useMaskClosable from "@/hooks/useMaskClosable";

const {RangePicker} = DatePicker

const SearchRoomAvailable = () => {
  const [open, setOpen, contentRef ,triggerRef] = useMaskClosable()
  return (
    <div className='max-w-[840px] flex gap-0.5 p-0.5 mb-4 mt-2 w-full h-[42px] bg-yellow-400 rounded-lg'>
      <div className='flex-1'>
        <div className='h-full relative'>
          <div className='absolute z-50 top-1/2 -translate-y-1/2 left-3'><FaRegCalendar className='text-gray-400' size={20} /></div>
          <RangePicker suffixIcon={null} className='w-full' style={{height: '100%', paddingLeft: '60px'}} />
        </div>
      </div>
      <div className='flex-1'>
        <div className='h-full noSelect'>
          <div ref={triggerRef} className='w-full bg-white rounded-md relative pl-16 py-1 pr-3' style={{height: '100%'}}>
            <div className='absolute z-50 top-1/2 -translate-y-1/2 left-3'><FaRegUser className='text-gray-400' size={20} /></div>
          </div>
          <Dialog open={open} className='flex-col float-right w-[30%] p-8' ref={contentRef}>

            <Quantity value={2} title={'Người lớn'}/>
            <Quantity value={2} title={'Trẻ em'}/>
            <Quantity value={2} title={'Phòng'}/>
            <hr className='my-4'/>
            <Button style={{borderColor: 'blue'}} className='hover:!bg-blue-50'>
              <div className='text-blue-600'>
                Xong
              </div>
            </Button>
          </Dialog>
        </div>
      </div>
      <div className='flex-grow-0'>
        <Button style={{height: '100%', backgroundColor: 'blue', color: 'white', fontWeight: 'bold', fontSize: '16px', padding: '4px 24px'}}>Thay đổi tìm kiếm</Button>
      </div>
    </div>
  );
};

export default SearchRoomAvailable;