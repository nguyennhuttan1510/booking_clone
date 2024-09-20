import React from 'react';
import Image from "next/image";
import {Utils} from "@/utils";

interface CardProductType {
  image: string,
  name: string,
  isGenius: boolean,
  location: string,
  point: number,
  typeEvaluation: string,
  countEvaluation: number,
  promotion: {name: string}[],
  quantityUse: number,
  originalPrice: number,
  afterPromotionPrice: number
}

interface CardProductPropsType {
  product: CardProductType
}


const CardProduct = (props: CardProductPropsType) => {
  const {product} = props
  return (
    <div className='max-w-[260px] flex flex-col h-[404px] rounded-lg overflow-hidden' style={{boxShadow: '0 2px 8px 0 rgba(26, 26, 26, 0.16'}}>
      <div className='flex-1'>
        <div className='relative w-[260px] h-full'>
          <Image fill src={product.image} alt={'product'} />
        </div>
      </div>
      <div className='flex-1'>
        <div className='flex flex-col justify-between p-2 h-full'>
          <div className='flex flex-col gap-1'>
            {product.isGenius ? (
              <div className='bg-blue-500 px-1 leading-4 text-white text-[10px] rounded-sm w-fit'>Genius</div>
            ) : null}
            <div>
              <div className='font-bold text-md text-black'>{product.name}</div>
              <div className='text-[12px] text-[#595959]'>{product.location}</div>
            </div>
            <div className='flex gap-2 items-center'>
              <div className='bg-blue-500 p-1 text-white text-[12px] rounded leading-3'>{product.point}</div>
              <div className='text-[12px] text-[#595959]'>{product.typeEvaluation}</div>
              <div className='text-[12px] text-[#595959]'>{product.countEvaluation} đánh giá</div>
            </div>
            {
              product.promotion.map((promotion, index) => (
                <div key={index} className='bg-green-500 p-0.5 text-white text-[12px] rounded w-fit'>{promotion.name}</div>
              ))
            }
          </div>

          <div className='flex gap-1 flex-wrap justify-end items-end'>
            <div className='text-[12px] text-[#595959]'>{product.quantityUse} đêm</div>
            <div className='text-md text-[#D4111e] line-through'>{Utils.formatCurrency(product.originalPrice)}</div>
            <div className='text-lg font-bold text-[#1a1a1a]'>{Utils.formatCurrency(product.afterPromotionPrice)}</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CardProduct;