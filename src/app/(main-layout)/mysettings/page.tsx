'use client'
import React from 'react';
import {settings} from "@/app/(main-layout)/mysettings/constants";
import Link from "next/link";

const MySettingPage = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-3'>Đặt chỗ & Chuyến đi</h1>
      <p>Quản lý trải nghiệm Booking.com của bạn</p>
      <div className='my-8'>
        <div className='grid grid-cols-2 gap-6'>
          {settings.map((item, key) => (
            <Link key={key} href={item.redirect}>
              <div className='flex border border-gray-300 rounded-lg p-4 transition hover:shadow-lg'>
                <div className='flex-none mr-3'>
                  <div className='p-3 rounded-full bg-gray-100'>
                    {<item.Icon className="text-2xl" />}
                  </div>
                </div>
                <div className='flex flex-col gap-y-2'>
                  <h3 className='text-lg font-bold'>{item.title}</h3>
                  <p className='text-sm text-[#595959]'>{item.subTitle}</p>
                  <h4 className='text-sm text-blue-500'>{item.category}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySettingPage;