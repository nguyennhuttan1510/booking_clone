import React from 'react';
import {IoChatbubblesOutline} from "react-icons/io5";
import {Button, Drawer} from "antd";
import {QuestionsDrawerProps} from "@/app/(main-layout)/product/[productID]/components/QuestionsDrawer";

const ReviewsDrawer = ({open, onClose}:QuestionsDrawerProps) => {
  return (
    <Drawer
      closeIcon={null}
      styles={{
        content: {
          borderRadius: '16px'
        },
      }}
      title={
        <div>
          <div className='text-xl mb-8'>Đánh giá của khách về Dalat Memory Inn</div>
          <div className='flex items-center'>
            <div className='flex gap-x-2 mr-4'>
              <div className='w-8 h-8 flex flex-none justify-center items-center text-[16px] font-medium text-white rounded-md rounded-bl-none bg-blue-600'>10</div>
              <div>
                <div className='font-bold'>tuyệt vời</div>
                <div className='text-gray-500 font-medium'>10 đánh giá</div>
              </div>
            </div>
            <div className='text-[14px] text-green-500'>
              Chúng tôi cố gắng mang đến 100% đánh giá thật
            </div>
            <div className='ml-auto'>
              <Button variant='outlined' color='primary'>
                Viết đánh giá
              </Button>
            </div>
          </div>
        </div>
      }
      onClose={onClose}
      open={open}
    >
      <div className='flex flex-col gap-4'>
        <div className='border-b border-gray-300 last:border-b-0 pb-4'>
          <div className='flex items-center gap-x-4 pb-4'>
            <IoChatbubblesOutline className='text-2xl' />
            <div>Chỗ nghỉ có chỗ đỗ xe không?</div>
          </div>
          <div className='p-4 bg-gray-100 rounded-lg'>
            <div className='flex flex-col gap-2'>
              <div className='text-[#595959] text-[12px]'>ngày 28 tháng 7 năm 2022</div>
              <p>
                Đây là thông tin của Hai Yen Hotel về chỗ đậu xe:
                Có chỗ đỗ xe riêng miễn phí tại chỗ (cần đặt chỗ trước).
              </p>
            </div>
          </div>
        </div>
        <div className='border-b border-gray-300 last:border-b-0 pb-4'>
          <div className='flex items-center gap-x-4 pb-4'>
            <IoChatbubblesOutline className='text-2xl' />
            <div>Chỗ nghỉ có chỗ đỗ xe không?</div>
          </div>
          <div className='p-4 bg-gray-100 rounded-lg'>
            <div className='flex flex-col gap-2'>
              <div className='text-[#595959] text-[12px]'>ngày 28 tháng 7 năm 2022</div>
              <p>
                Đây là thông tin của Hai Yen Hotel về chỗ đậu xe:
                Có chỗ đỗ xe riêng miễn phí tại chỗ (cần đặt chỗ trước).
              </p>
            </div>
          </div>
        </div>
        <div className='border-b border-gray-300 last:border-b-0 pb-4'>
          <div className='flex items-center gap-x-4 pb-4'>
            <IoChatbubblesOutline className='text-2xl' />
            <div>Chỗ nghỉ có chỗ đỗ xe không?</div>
          </div>
          <div className='p-4 bg-gray-100 rounded-lg'>
            <div className='flex flex-col gap-2'>
              <div className='text-[#595959] text-[12px]'>ngày 28 tháng 7 năm 2022</div>
              <p>
                Đây là thông tin của Hai Yen Hotel về chỗ đậu xe:
                Có chỗ đỗ xe riêng miễn phí tại chỗ (cần đặt chỗ trước).
              </p>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default ReviewsDrawer;