'use client'
import React from 'react';

const BannerHeader = () => {
  return (
    <>
      <div className='bg-no-repeat bg-cover bg-center py-20' style={{backgroundImage: `url(https://r-xx.bstatic.com/xdata/images/xphoto/2880x868/354823300.jpeg?k=fac80dfc673094fa181906ece2ef6478eb1e2b71837f8070c8647b05746c0f7f&o=)`}}>
        <div className='container mx-auto flex justify-center'>
          <div className='content-banner w-3/4'>
            <div className='text-5xl font-bold text-white' style={{lineHeight: '55px'}}>Chốn thiên đường <br/>dành cho bạn</div>
            <div className='text-2xl text-white mb-6' style={{lineHeight: '35px'}}>Đặt nhà, biệt thự, cabin nguyên căn và hơn thế</div>
            <button className='p-2.5 text-sm text-white font-medium bg-blue-500 rounded'>Khám phá nhà nghỉ dưỡng</button>
          </div>

          <div className='search'>

          </div>
        </div>
      </div>
    </>
  );
};

export default BannerHeader;