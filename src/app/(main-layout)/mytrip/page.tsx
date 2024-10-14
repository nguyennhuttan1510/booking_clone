'use client'
import React, {useState} from 'react';
import Image from "next/image";
import {CiReceipt, CiStar} from "react-icons/ci";
import {Button, Dropdown, Form, Input, MenuProps, Tooltip} from "antd";
import {IoChevronForwardOutline, IoClose, IoCloseOutline} from "react-icons/io5";
import {useLayout} from "@/hooks/useLayout";
import {IoMdMore} from "react-icons/io";

const SearchBooked = ({onClose}: {onClose: () => void}) => {
  return (
    <div className='flex flex-col gap-y-4 text-black p-4'>
      <div className='flex justify-end'>
        <h1 className='text-xl font-bold'>Nhập thông tin đặt phòng</h1>
        <div className='p-2 ml-auto'>
          <IoClose onClick={onClose} className='text-xl cursor-pointer' />
        </div>
      </div>
      <p>Để quản lý đặt phòng, vui lòng nhập mã xác nhận và mã PIN. Bạn có thể tìm thấy hai mã này ở đầu email xác nhận.</p>
      <Form layout='vertical'>
        <Form.Item label={<span className='text-[14px] font-medium'>Mã xác nhận</span>} required={true}>
          <Input />
        </Form.Item>
        <Form.Item label={<span className='text-[14px] font-medium'>Mã số PIN</span>} required={true}>
          <Input />
        </Form.Item>
        <Button type='primary'>
          Quản lý đặt phòng
        </Button>
      </Form>
      <p>
        Bạn có muốn quản lý đặt chỗ loại khác?
      </p>
    </div>
  )
}


  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className='px-2 py-1'>
          Đặt lại
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div className='px-2 py-1'>
          Xóa đơn đặt
        </div>
      ),
    },
  ];

const MyTripPage = () => {
  const [openSearchBooked, setOpenSearchBooked] = useState<boolean>(false)
  const onCloseSearchBooked = () => {
    setOpenSearchBooked(false)
  }

  return (
    <div>
      <div className='flex justify-between mb-8'>
        <h1 className='text-3xl font-bold'>Đặt chỗ & Chuyến đi</h1>
        <Tooltip open={openSearchBooked} placement="bottomLeft" color='white' overlayInnerStyle={{width: '150%'}} title={<SearchBooked onClose={onCloseSearchBooked} />} >
          <Button onClick={() => {setOpenSearchBooked(prev => !prev)}} color='primary'>Bạn không tìm thấy đặt phòng ?</Button>
        </Tooltip>
      </div>
      <div className='flex flex-col gap-y-6'>
        <div>
          <div className='mb-4'>
            <div className='font-bold text-2xl mb-2'>Vũng Tàu</div>
            <div className='text-[#595959]'>26 tháng 7 – 27 tháng 7</div>
          </div>
          <div id='card' className='rounded-lg border border-gray-100 shadow-lg transition hover:shadow-xl'>
            <div className='flex p-6'>
              <div className='mr-6 rounded-xl overflow-hidden'>
                <Image width={150} height={150} src='https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67870160-c9461fa715f247b0a3375bd8ba112d39.jpeg?_src=imagekit&tr=c-at_max,f-jpg,h-360,pr-true,q-100,w-640' alt='presentation_image' />
              </div>
              <div className='flex-1 flex justify-between mr-6'>
                <div className='flex flex-col gap-y-2'>
                  <div className='font-bold'>BamBoo Hotel Vung Tau</div>
                  <div className='text-[#595959]'>26 tháng 7 – 27 tháng 7</div>
                  <div className='text-[#595959]'>Đã hoàn thành</div>
                </div>
                <div className='text-xl font-bold'>VND 289.000</div>
              </div>
              <div className='ml-auto'>
                <Dropdown menu={{ items }} placement="bottomLeft" trigger={['click']}>
                  <Button type='text' icon={<IoMdMore className='text-2xl flex-none cursor-pointer' />}></Button>
                </Dropdown>
              </div>
            </div>

            <hr />

            <div className='p-6 flex items-center cursor-pointer hover:shadow-lg'>
              <CiStar className='flex-none text-3xl mr-4' />
              <div className='flex-1'>Cho điểm và đánh giá kỳ lưu trú của bạn</div>
              <IoCloseOutline className='text-2xl' />
            </div>

            <hr />

            <div className='p-6 flex items-center cursor-pointer hover:shadow-lg'>
              <CiReceipt className='flex-none text-3xl mr-4' />
              <div className='flex-1'>Yêu cầu hóa đơn</div>
              <IoChevronForwardOutline className='text-2xl' />
            </div>
          </div>
        </div>

        <div >
          <div className='mb-4'>
            <div className='font-bold text-2xl mb-2'>Vũng Tàu</div>
            <div className='text-[#595959]'>26 tháng 7 – 27 tháng 7</div>
          </div>
          <div className='relative'>
            <div className='h-full w-[1px] border-l-2 border-gray-300 absolute left-24 z-10'></div>
            <div className='relative z-50 flex flex-col gap-y-6'>
              <div id='card' className='bg-white rounded-lg border border-gray-100 shadow-lg transition hover:shadow-xl'>
                <div className='flex p-6'>
                  <div className='mr-6 rounded-xl overflow-hidden'>
                    <Image width={150} height={150} src='https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67870160-c9461fa715f247b0a3375bd8ba112d39.jpeg?_src=imagekit&tr=c-at_max,f-jpg,h-360,pr-true,q-100,w-640' alt='presentation_image' />
                  </div>
                  <div className='flex-1 flex justify-between mr-6'>
                    <div className='flex flex-col gap-y-2'>
                      <div className='font-bold'>BamBoo Hotel Vung Tau</div>
                      <div className='text-[#595959]'>26 tháng 7 – 27 tháng 7</div>
                      <div className='text-[#595959]'>Đã hoàn thành</div>
                    </div>
                    <div className='text-xl font-bold'>VND 289.000</div>
                  </div>
                  <div className='ml-auto'>
                    <Dropdown menu={{ items }} placement="bottomLeft" trigger={['click']}>
                      <Button type='text' icon={<IoMdMore className='text-2xl flex-none cursor-pointer' />}></Button>
                    </Dropdown>
                  </div>
                </div>
              </div>

              <div id='card' className='bg-white rounded-lg border border-gray-100 shadow-lg transition hover:shadow-xl'>
                <div className='flex p-6'>
                  <div className='mr-6 rounded-xl overflow-hidden'>
                    <Image width={150} height={150} src='https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67870160-c9461fa715f247b0a3375bd8ba112d39.jpeg?_src=imagekit&tr=c-at_max,f-jpg,h-360,pr-true,q-100,w-640' alt='presentation_image' />
                  </div>
                  <div className='flex-1 flex justify-between mr-6'>
                    <div className='flex flex-col gap-y-2'>
                      <div className='font-bold'>BamBoo Hotel Vung Tau</div>
                      <div className='text-[#595959]'>26 tháng 7 – 27 tháng 7</div>
                      <div className='text-[#595959]'>Đã hoàn thành</div>
                    </div>
                    <div className='text-xl font-bold'>VND 289.000</div>
                  </div>
                  <div className='ml-auto'>
                    <Dropdown menu={{ items }} placement="bottomLeft" trigger={['click']}>
                      <Button type='text' icon={<IoMdMore className='text-2xl flex-none cursor-pointer' />}></Button>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTripPage;