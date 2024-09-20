import React from 'react';
import Image from "next/image";
import { FaAngleRight, FaInfo } from "react-icons/fa6";

export type ProductType = {

}

export type SearchResultItemType = {
  onRedirectDetail: (product: ProductType) => void
  product: ProductType
}

const SearchResultItem = (props: SearchResultItemType) => {
  const {onRedirectDetail, product} = props
  return (
    <div className='flex min-w-fit p-4 my-4 border border-gray-300 rounded-xl' onClick={() => {onRedirectDetail(product)}}>
      <div className='flex-none relative w-[240px] h-[240px] mr-4 rounded-xl overflow-hidden'>
        <Image fill src={'https://cf.bstatic.com/xdata/images/hotel/square600/576284808.jpg?k=14f3ac3dca5b7c40b4bd808a46de4d47e95f2bf194438f7c5464ccd31a2e1a81&o='} alt={'product'} />
      </div>
      <div className='flex w-full justify-between'>
        <div className='left'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='font-bold text-xl text-blue-600'>Name</div><div className='w-fit h-fit text-white px-2 py-0.5 bg-blue-600 text-[12px] leading-4 rounded'>Genius</div>
          </div>

          <div className='mb-2 flex flex-wrap gap-2 text-[12px] text-blue-500 font-medium'>
            <div>Vũng Tàu</div>
            <div>Xem trên bản đồ</div>
            <div className='text-[#1a1a1a]'>Cách trung tâm 1,2km</div>
            <div>Giáp biển</div>
          </div>

          <div className='detail text-[12px] border-l border-gray-300 pl-2'>
            <div className='type room text-[#1a1a1a] mb-2'>
              <div className='font-bold'>Phòng gia đình tiêu chuẩn</div>
              <div className='text-left'>1 Giường đôi cực lớn</div>
            </div>
            <div className='benefit text-green-600 flex flex-col gap-0.5'>
              <div className='font-bold'>Miễn phí hủy</div>
              <div className='font-bold'>Không cần thanh toán trước - <span className='font-normal'>thanh toán tại chổ nghỉ</span></div>
            </div>
            <div className='text-[#d4111e] font-bold'>Chỉ còn 4 phòng với giá này trên trang của chúng tôi</div>
          </div>

        </div>

        <div className='right flex flex-col items-end'>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-1'>
              <div>
                <div className='text-sm font-bold'>Tuyệt vời</div>
                <div className='text-[#1a1a1a] text-[12px]'>10 đánh giá</div>
              </div>
              <div className='w-fit h-fit p-1.5 font-bold text-white rounded-lg bg-blue-900'>8,6</div>
            </div>
            <div className='text-right font-bold text-sm text-blue-500'>Địa điểm 9,3</div>
          </div>

          <div className='flex flex-col items-end mb-2'>
            <div className='text-[#595959] text-[12px]'>1 đêm, 2 người lớn</div>
            <div className='text-[#d4111e] text-[12px] line-through'>VND 3.000.000</div>
            <div className='text-xl flex items-center font-medium gap-1'><span>VND 1.500.000</span> <FaInfo style={{fontSize: '12px'}} /></div>
            <div className='text-[#595959] text-[12px]'><span>Đã bao gồm thuế và phí</span></div>
          </div>

          <div className='bg-blue-500 w-fit h-fit px-3 py-1 rounded text-white text-sm leading-7 flex items-center gap-1'><span>Xem chỗ trống</span> <FaAngleRight style={{fontSize: '14px'}} /></div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultItem;