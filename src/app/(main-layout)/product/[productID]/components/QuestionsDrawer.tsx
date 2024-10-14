import React from 'react';
import {IoChatbubblesOutline} from "react-icons/io5";
import {Drawer} from "antd";

export type QuestionsDrawerProps = {
  open: boolean,
  onClose: () => void
}

const QuestionsDrawer = ({open, onClose}:QuestionsDrawerProps) => {
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
          <div className='text-xl'>Câu hỏi của bạn</div>
          <div className='text-md text-[#595959]'><span className='font-bold'>Về:</span> Hai Yen Hotel</div>
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

export default QuestionsDrawer;