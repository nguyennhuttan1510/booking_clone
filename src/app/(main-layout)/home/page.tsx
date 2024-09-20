import React from 'react';
import Image from "next/image";
import CardProduct from "@/app/(main-layout)/home/components/CardProduct";

const imagesOfTypeProduct = [
  {
    image: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',
    label: 'Căn hộ'
  },
  {
    image: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=',
    label: 'Khách sạn'
  },
  {
    image: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=',
    label: 'Các resort'
  },
  {
    image: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=',
    label: 'Các resort'
  }
]

const imagesOfLocation = [
  {
    image: 'https://q-xx.bstatic.com/xdata/images/city/170x136/688956.jpg?k=fc88c6ab5434042ebe73d94991e011866b18ee486476e475a9ac596c79dce818&o=',
    label: 'Vũng Tàu',
    count: '1826'
  },
  {
    image: 'https://q-xx.bstatic.com/xdata/images/city/170x136/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o=',
    label: 'Đà Nẵng',
    count: '2513'
  },
  {
    image: 'https://q-xx.bstatic.com/xdata/images/city/170x136/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o=',
    label: 'Đà Lạt',
    count: '2115'
  },
  {
    image: 'https://q-xx.bstatic.com/xdata/images/city/170x136/688893.jpg?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o=',
    label: 'Thành phố Hồ Chí Minh',
    count: '5612'
  },
  {
    image: 'https://r-xx.bstatic.com/xdata/images/city/170x136/688907.jpg?k=8a219233969467d9f7ff828918cce2a53b4db6f1da1039d27222441ffb97c409&o=',
    label: 'Nha Trang',
    count: '1672'
  },
  {
    image: 'https://r-xx.bstatic.com/xdata/images/city/170x136/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o=',
    label: 'Hà Hội',
    count: '3810',
  },
]

const imagesOfPlace = [
  {
    image: 'https://q-xx.bstatic.com/xdata/images/city/170x136/688956.jpg?k=fc88c6ab5434042ebe73d94991e011866b18ee486476e475a9ac596c79dce818&o=',
    label: 'Vũng Tàu',
    near: '73'
  },
  {
    image: 'https://cf.bstatic.com/xdata/images/xphoto/300x240/140009620.jpg?k=3e6d918a0fc7a7dfb5e8da5b39d4f891b957a98e14f792133d14bb6858056d2d&o=',
    label: 'Long Hải',
    near: '83'
  },
  {
    image: 'https://cf.bstatic.com/xdata/images/xphoto/300x240/140051700.jpg?k=943100781f131d04badb9e0911afc9478de790cdfae554a736a56326f4053837&o=',
    label: 'Hồ Tràm',
    near: '94'
  },
  {
    image: 'https://cf.bstatic.com/xdata/images/xphoto/300x240/140009648.jpg?k=d4520be12e21ae073657cf7fc6c280e6ce993632d912e25aae401eb70aa72fab&o=',
    label: 'La Gi',
    near: '128'
  },
  {
    image: 'https://cf.bstatic.com/xdata/images/xphoto/300x240/140009649.jpg?k=e7feedb8dbe0eca8f0d3c90bd1bedccd399f7752209fb4d1cf6df27aa232b1a0&o=',
    label: 'Kê Gà',
    near: '150'
  },
  {
    image: 'https://cf.bstatic.com/xdata/images/xphoto/300x240/140009639.jpg?k=4f627feb35aef6f68e255e82570c59c7592698a99ff5df0160aeff99b00e5524&o=',
    label: 'Phan thiết',
    near: '163'
  },
]

const promotionWeekend = [
  {
    image: 'https://cf.bstatic.com/xdata/images/hotel/square600/557224436.jpg?k=88218333cd7d57d7b0b376de89855f902a2a05ab8d1777bc73be8b0cad810283&o=',
    name: 'Nicecy Hotel',
    isGenius: true,
    location: 'Tp.Hồ Chí Minh, Việt Nam',
    point: 8.2,
    typeEvaluation: 'Rất tốt',
    countEvaluation: 104,
    promotion: [
      {
        name: 'Ưu đãi mùa du lịch'
      }
    ],
    quantityUse: 2,
    originalPrice: 1949000,
    afterPromotionPrice: 949000
  },
  {
    image: 'https://cf.bstatic.com/xdata/images/hotel/square600/575674617.jpg?k=506f5216d469005145286ad7f09ac2ec48b362deea8917bdc061231224716f70&o=',
    name: 'Skylark Boutique Hotel',
    isGenius: true,
    location: 'Hà Nội, Việt Nam',
    point: 8.7,
    typeEvaluation: 'Tuyệt vời',
    countEvaluation: 150,
    promotion: [],
    quantityUse: 2,
    originalPrice: 10000000,
    afterPromotionPrice: 1199000
  },
  {
    image: 'https://cf.bstatic.com/xdata/images/hotel/square600/558087266.jpg?k=ce064f4601ec5303aec03a4dcf666871bbab9270128d6134f308b52a42fd1d31&o=',
    name: 'Journey Sai Gon',
    isGenius: true,
    location: 'Tp.Hồ Chí Minh, Việt Nam',
    point: 8.7,
    typeEvaluation: 'Tuyệt vời',
    countEvaluation: 59,
    promotion: [],
    quantityUse: 2,
    originalPrice: 1890000,
    afterPromotionPrice: 910000
  },
  {
    image: 'https://cf.bstatic.com/xdata/images/hotel/square600/576284808.jpg?k=14f3ac3dca5b7c40b4bd808a46de4d47e95f2bf194438f7c5464ccd31a2e1a81&o=',
    name: 'Priya Bontique House',
    isGenius: true,
    location: 'bangkok, Thái Lan',
    point: 9.9,
    typeEvaluation: 'Xuất sắc',
    countEvaluation: 499,
    promotion: [],
    quantityUse: 2,
    originalPrice: 4767000,
    afterPromotionPrice: 3954000
  }


]

const HomePage = () => {
  return (
    <main>
      <div className='container mx-auto w-3/4'>
        <section className='mt-8 mb-6'>
          <div className='text-black font-bold text-2xl mb-4'>Tìm theo loại chổ nghỉ</div>
          <div className='flex gap-4'>
            {imagesOfTypeProduct.map((item, index) => (
              <div key={index}>
                <div className='mb-3 rounded-xl overflow-hidden'>
                  <Image width={300} height={300} src={item.image} alt={'room'} />
                </div>
                <div className='text-md font-bold'>{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className='mt-8 mb-6'>
          <div className='text-black font-bold text-2xl mb-1'>Khám phá Việt Nam</div>
          <div className='mb-4 text-[#595959] text-md'>Các điểm đến phổ biến này có nhiều điều chờ đón bạn</div>
          <div className='flex gap-4'>
            {imagesOfLocation.map((item, index) => (
              <div key={index}>
                <div className='mb-3 rounded-xl overflow-hidden'>
                  <Image width={300} height={300} src={item.image} alt={'room'} />
                </div>
                <div className='mb-0.5 text-md font-bold'>{item.label}</div>
                <div className='text-md font-bold text-[#595959] text-sm'>{item.count} chỗ nghỉ</div>
              </div>
            ))}
          </div>
        </section>

        <section className='mt-8 mb-6'>
          <div className='text-black font-bold text-2xl mb-1'>Khám phá Việt Nam</div>
          <div className='mb-4 text-[#595959] text-md'>Các điểm đến phổ biến này có nhiều điều chờ đón bạn</div>
          <div className='mb-6 flex gap-1'>
            <div className='border border-white hover:border-blue-300 hover:text-blue-300 rounded-full px-3 py-2 text-[#595959] text-sm cursor-pointer'>Bãi biển</div>
            <div className='border border-white hover:border-blue-300 hover:text-blue-300 rounded-full px-3 py-2 text-[#595959] text-sm cursor-pointer'>Thiên nhiên</div>
            <div className='border border-white hover:border-blue-300 hover:text-blue-300 rounded-full px-3 py-2 text-[#595959] text-sm cursor-pointer'>Thành phố</div>
            <div className='border border-white hover:border-blue-300 hover:text-blue-300 rounded-full px-3 py-2 text-[#595959] text-sm cursor-pointer'>Lãng mạn</div>
            <div className='border border-white hover:border-blue-300 hover:text-blue-300 rounded-full px-3 py-2 text-[#595959] text-sm cursor-pointer'>Thư giản</div>
          </div>
          <div className='flex gap-4'>
            {imagesOfPlace.map((item, index) => (
              <div key={index}>
                <div className='mb-3 rounded-xl overflow-hidden'>
                  <Image width={300} height={300} src={item.image} alt={'room'} />
                </div>
                <div className='mb-0.5 text-md font-bold'>{item.label}</div>
                <div className='text-md font-bold text-[#595959] text-sm'>{item.near} cách đây</div>
              </div>
            ))}
          </div>
        </section>

        <section className='mt-8 mb-6'>
          <div className='text-black font-bold text-2xl mb-1'>Ưu đãi cho cuối tuần</div>
          <div className='mb-4 text-[#595959] text-md'>Tiết kiệm cho chỗ nghỉ từ ngày 9 tháng 8 - ngày 11 tháng 8</div>
          <div className='flex gap-4'>
            {promotionWeekend.map(product => (
              <CardProduct key={product.name} product={product} />
            ))}
          </div>
        </section>
      </div>

    </main>
  );
};

export default HomePage;