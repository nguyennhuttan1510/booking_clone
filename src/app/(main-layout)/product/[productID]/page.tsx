'use client';
import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import {Button, Card, Carousel, Col, Divider, Drawer, Flex, Modal, Progress, Row, Tag, Typography} from 'antd';
import {
  FaPeopleGroup, FaPerson,
  FaShower,
  FaSmoking,
  FaStar,
  FaTemperatureHalf,
  FaToiletPortable,
  FaVolumeXmark,
  FaWifi,
} from 'react-icons/fa6';
import {
  IoArrowUpOutline,
  IoArrowDown,
  IoAddOutline,
  IoChatbubblesOutline,
  IoChevronForwardOutline,
  IoLogInOutline, IoLogOutOutline, IoInformationCircleOutline, IoCardOutline
} from "react-icons/io5";
import { EnvironmentOutlined } from '@ant-design/icons';
import TemplateImage, {RecordType} from "@/app/components/TemplateImage";
import SearchRoomAvailable from "@/app/(main-layout)/product/[productID]/components/SearchRoomAvailable";
import ProductAvailableTable from "@/app/(main-layout)/product/[productID]/components/ProductAvailableTable";
import Link from "next/link";
import UserAvatar from "@/app/components/UserAvatar";

import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {MdOutlinePets} from "react-icons/md";

const { Title, Paragraph } = Typography;

const mappingConvention = (type:string, data: any) => {
  switch (type) {
    case '1':
      return(
        <div className='flex items-start p-4 border-b border-[#f0f0f0]'>
          <div className='flex items-center'>
            <IoLogInOutline className='text-3xl mr-4' />
            <div className='w-60 mr-6 text-[16px] font-bold'>Nhận phòng</div>
          </div>
          <div>
            <p>{data.content.main}</p>
            <p className='text-[#595959]'>Khách được yêu cầu xuất trình giấy tờ tùy thân có ảnh và thẻ tín dụng lúc nhận phòng</p>
            <p className='text-[#595959]'>Trước đó bạn sẽ cần cho chỗ nghỉ biết giờ bạn sẽ đến nơi</p>
          </div>
        </div>
      )
    case '2':
      return(
        <div className='flex items-start p-4 border-b border-[#f0f0f0]'>
          <div className='flex items-center'>
            <IoLogOutOutline className='text-3xl mr-4' />
            <div className='w-60 mr-6 text-[16px] font-bold'>Trả phòng</div>
          </div>
          <div>
            <p>{data.content.main}</p>
          </div>
        </div>
      )
    case '3':
      return(
        <div className='flex items-start p-4 border-b border-[#f0f0f0]'>
          <div className='flex items-center'>
            <IoInformationCircleOutline className='text-3xl mr-4' />
            <div className='w-60 mr-6 text-[16px] font-bold'>Hủy đặt phòng/ Trả trước</div>
          </div>
          <div>
            <p>Các chính sách hủy và thanh toán trước sẽ khác nhau tùy vào từng loại chỗ nghỉ. Vui lòng kiểm tra <span className='text-blue-500 underline'>các điều kiện</span> có thể được áp dụng cho mỗi lựa chọn của bạn.</p>
          </div>
        </div>
      )
    case '4':
      return(
        <div className='flex items-start p-4 border-b border-[#f0f0f0]'>
          <div className='flex items-center'>
            <IoLogOutOutline className='text-3xl mr-4' />
            <div className='w-60 mr-6 text-[16px] font-bold'>Trẻ em và giường</div>
          </div>
          <div>
            <div className='text-[16px] font-medium mb-3.5'>Chính sách trẻ em</div>
            <p className='mb-3.5'>Phù hợp cho tất cả trẻ em</p>
            <p className='mb-3.5'>Trẻ em từ 13 tuổi trở lên sẽ được tính giá như người lớn tại chỗ nghỉ này.</p>
            <p className='mb-3.5'>Để xem thông tin giá và tình trạng phòng trống chính xác, vui lòng thêm số lượng và độ tuổi của trẻ em trong nhóm của bạn khi tìm kiếm.</p>

            <div className='text-[16px] font-medium mb-3.5'>Chính sách nôi (cũi) và giường phụ</div>
            <div className='border border-[#f0f0f0] rounded mb-3.5'>
              <div className='p-2 border-b border-[#f0f0f0] font-medium'>0 - 2 tuổi</div>
              <div className='p-2 flex'>
                <div className='flex-1 mr-2'>Có nôi/cũi nếu yêu cầu</div>
                <div className='flex-1 text-green-600'>Miễn phí</div>
              </div>
            </div>
            <div className='border border-[#f0f0f0] rounded mb-3.5'>
              <div className='p-2 border-b border-[#f0f0f0] font-medium'>Từ 6 tuổi trở lên</div>
              <div className='p-2 flex'>
                <div className='flex-1 mr-2'>Có giường phụ nếu yêu cầu</div>
                <div className='flex-1'>VND 150.000/người/đêm</div>
              </div>
            </div>

            <p className='mb-3.5'>Giá cho nôi/cũi và giường phụ chưa được bao gồm trong giá tổng và sẽ cần được thanh toán riêng trong kỳ nghỉ.</p>
            <p className='mb-3.5'>Số lượng giường phụ và nôi/cũi được phép tùy thuộc vào tùy chọn của bạn. Vui lòng kiểm tra tùy chọn mà bạn đã chọn để biết thêm thông tin.</p>
            <p>Tất cả nôi/cũi và giường phụ tùy thuộc vào tình trạng có sẵn.</p>
          </div>
        </div>
      )
    case '5':
      return (
        <div className='flex items-start p-4 border-b border-[#f0f0f0]'>
          <div className='flex items-center'>
            <FaPerson className='text-3xl mr-4' />
            <div className='w-60 mr-6 text-[16px] font-bold'>Không giới hạn độ tuổi</div>
          </div>
          <div>
            <p>Không có yêu cầu về độ tuổi khi nhận phòng</p>
          </div>
        </div>
      )
    case '6':
      return (
        <div className='flex items-start p-4 border-b border-[#f0f0f0]'>
          <div className='flex items-center'>
            <MdOutlinePets className='text-3xl mr-4' />
            <div className='w-60 mr-6 text-[16px] font-bold'>Vật nuôi</div>
          </div>
          <div>
            <p>{true ? 'Vật nuôi được phép.' : 'Vật nuôi không được phép.'}</p>
          </div>
        </div>
      )
    case '7':
      return (
        <div className='flex items-start p-4 border-b border-[#f0f0f0]'>
          <div className='flex items-center'>
            <IoCardOutline className='text-3xl mr-4' />
            <div className='w-60 mr-6 text-[16px] font-bold'>Các phương thức thanh toán được chấp nhận</div>
          </div>
          <div>
            <div className='px-1.5 py-0.5 rounded-lg bg-green-200 text-green-600 font-bold'>Tiền mặt</div>
          </div>
        </div>
      )
  }
}


const conventionFromAPI = [
  {
    id: '1',
    title: 'Nhận phòng',
    content: {
      main: 'Từ 14:00 - 00:00',
      sub: [
        {
          id: 1,
          value: 'Khách được yêu cầu xuất trình giấy tờ tùy thân có ảnh và thẻ tín dụng lúc nhận phòng'
        },
        {
          id: 2,
          value: 'Trước đó bạn sẽ cần cho chỗ nghỉ biết giờ bạn sẽ đến nơi.'
        },
      ]
    }
  },
  {
    id: '2',
    title: 'Trả phòng',
    content: {
      main: 'Từ 00:00 - 12:00'
    }
  },
  {
    id: '3',
    title: 'Hủy đặt phòng/ Trả trước',
    content: {
      main: 'Các chính sách hủy và thanh toán trước sẽ khác nhau tùy vào từng loại chỗ nghỉ. Vui lòng kiểm tra các điều kiện có thể được áp dụng cho mỗi lựa chọn của bạn.'
    }
  },
  {
    id: '4',
    title: 'Trẻ em và giường',
  },
  {
    id: '5',
    title: 'Không giới hạn độ tuổi',
    content: {
      main: 'Không có yêu cầu về độ tuổi khi nhận phòng'
    }
  },
  {
    id: '6',
    title: 'Vật nuôi',
    content: {
      main: 'Vật nuôi không được phép.'
    }
  },
  {
    id: '7',
    title: 'Các phương thức thanh toán được chấp nhận',
    content: {
      main: [1,2,3],
    }
  },
]

const question = [
  {
    title: 'Chỗ nghỉ có chỗ đỗ xe không?',
    about: 'Hai Yen Hotel',
    content: {
      text: 'Đây là thông tin của Hai Yen Hotel về chỗ đậu xe: Có chỗ đỗ xe riêng miễn phí tại chỗ (cần đặt chỗ trước).'
    }
  },
  {
    title: 'Chỗ nghỉ có chỗ đỗ xe không?',
    about: 'Hai Yen Hotel',
    content: {
      text: 'Đây là thông tin của Hai Yen Hotel về chỗ đậu xe: Có chỗ đỗ xe riêng miễn phí tại chỗ (cần đặt chỗ trước).'
    }
  },
  {
    title: 'Chỗ nghỉ có chỗ đỗ xe không?',
    about: 'Hai Yen Hotel',
    content: {
      text: 'Đây là thông tin của Hai Yen Hotel về chỗ đậu xe: Có chỗ đỗ xe riêng miễn phí tại chỗ (cần đặt chỗ trước).'
    }
  },
  {
    title: 'Chỗ nghỉ có chỗ đỗ xe không?',
    about: 'Hai Yen Hotel',
    content: {
      text: 'Đây là thông tin của Hai Yen Hotel về chỗ đậu xe: Có chỗ đỗ xe riêng miễn phí tại chỗ (cần đặt chỗ trước).'
    }
  },
  {
    title: 'Chỗ nghỉ có chỗ đỗ xe không?',
    about: 'Hai Yen Hotel',
    content: {
      text: 'Đây là thông tin của Hai Yen Hotel về chỗ đậu xe: Có chỗ đỗ xe riêng miễn phí tại chỗ (cần đặt chỗ trước).'
    }
  },
  {
    title: 'Chỗ nghỉ có chỗ đỗ xe không?',
    about: 'Hai Yen Hotel',
    content: {
      text: 'Đây là thông tin của Hai Yen Hotel về chỗ đậu xe: Có chỗ đỗ xe riêng miễn phí tại chỗ (cần đặt chỗ trước).'
    }
  },
]

const topicEvaluation = [
  {
    title: 'Vị trí',
    code: 1,
  },
  {
    title: 'Bãi biển',
    code: 2,
  },
  {
    title: 'Phòng',
    code: 3,
  },
  {
    title: 'Sạch sẽ',
    code: 4,
  },
  {
    title: 'Cửa sổ',
    code: 5,
  },
]

const evaluationsMockup = [
  {
    title: 'Nhân viên phục vụ',
    value: '8,5',
    percent: 85,
  },
  {
    title: 'Tiện nghi',
    value: '7,7',
    percent: 77,
  },
  {
    title: 'Sạch sẽ',
    value: '7,9',
    percent: 79,
  },
  {
    title: 'Thoải mái',
    value: '8,0',
    percent: 80,
  },
  {
    title: 'Đáng giá tiền',
    value: '8,0',
    percent: 80,
  },
  {
    title: 'Địa điểm',
    value: '8,4',
    percent: 84,
  },
  {
    title: 'WiFi miễn phí',
    value: '6,6',
    percent: 66,
  },
]

const settingsSlider = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const ProductDetailPage = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const router = useRouter();
  const onCloseDrawer = () => {
    setOpenDrawer(false)
  }

  const images: RecordType[] = [
    {
      spanCol: 3,
      spanRow: 3,
      width: '100%',
      height: '100%',
      data: 'https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN2  74kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67870160-b2018c22565014dcd24421424157c61a.jpeg?_src=imagekit&tr=c-at_max,f-jpg,h-360,pr-true,q-100,w-640',
    },
    {
      width: '100%',
      height: '120px',
      data: 'https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67870160-c9461fa715f247b0a3375bd8ba112d39.jpeg?_src=imagekit&tr=c-at_max,f-jpg,h-360,pr-true,q-100,w-640',
    },
    {
      width: '100%',
      height: '120px',
      data: 'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20011770-8edf3caa310bfe8644baf32ac8a95e46.jpeg?_src=imagekit&tr=c-at_max,f-jpg,h-360,pr-true,q-100,w-640',
    },
    {
      width: '100%',
      height: '120px',
      data: 'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20011770-65ed7088edb5a27ea3c549d9f50e1663.jpeg?_src=imagekit&tr=c-at_max,f-jpg,h-360,pr-true,q-100,w-640',
    },
    {
      width: '100%',
      height: '120px',
      data: 'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20011770-76da33ac4a4d1e377f606253e67c93c6.jpeg?_src=imagekit&tr=c-at_max,f-jpg,h-360,pr-true,q-100,w-640',
    },
    {
      width: '100%',
      height: '120px',
      data: 'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20011770-79bc799e01a2ed2cbaa8be68f5d523fd.jpeg?_src=imagekit&tr=c-at_max,f-jpg,h-360,pr-true,q-100,w-640',
    },
    {
      width: '100%',
      height: '120px',
      data: 'https://ik.imagekit.io/tvlk/generic-asset/oJLNzNs71wS3RVcWVniLgofXtaluprJ7ristt-jspoM=/images//1mc0t12000d5emrj3B5D6_R_1080_808_R5_Mtrip.jpg?_src=imagekit&tr=c-at_max,f-jpg,h-360,pr-true,q-100,w-640',
    },
    {
      width: '100%',
      height: '120px',
      data: 'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20011770-96fdc30e525f75f478d6cf9977234d70.jpeg?_src=imagekit&tr=c-at_max,f-jpg,h-360,pr-true,q-100,w-640',
    },
  ];

  return (
    <div className='container mx-auto w-3/4 mt-14'>
      {/*<SearchBar />*/}
      <Row gutter={18} style={{ minHeight: '80vh' }}>
        <Col md={14}>
          <Flex gap={18} vertical>
            <TemplateImage data={images} rows={3} cols={5} />

            <Card styles={{ body: { padding: '18px' } }}>
              <Flex justify="space-between" align="center" className="mb-2">
                <Title style={{ marginBottom: 0 }} level={5}>
                  Giới thiệu
                </Title>
                <Button type={'link'}>xem thêm</Button>
              </Flex>
              <Paragraph>
                Seashore Hotel & Apartment toạ lạc tại khu vực / thành phố Mân Thái. Quầy tiếp tân 24
                giờ luôn sẵn sàng phục vụ quý khách từ thủ tục nhận phòng đến trả phòng hay bất kỳ yêu
                cầu nào. Nếu cần giúp đỡ
              </Paragraph>
            </Card>
          </Flex>

          {/*<Col md={24}>*/}
          {/*  <Tabs defaultActiveKey="1" items={imageTab(images)}/>*/}
          {/*</Col>*/}
        </Col>
        <Col md={10}>
          <Row>
            <Col md={16}>
              <Title style={{ marginBottom: 0 }} level={2}>
                Room 003
              </Title>
              <Paragraph style={{ marginBottom: 8, marginTop: 0 }}>Goldient Boutique Hotel</Paragraph>
              <Flex align={'center'} style={{ marginBottom: 8 }}>
                <Tag color={'blue'} key={'1'}>
                  Hotel
                </Tag>
                <Flex align={'center'}>
                  <FaStar className={'text-yellow-400'} />
                  <FaStar className={'text-yellow-400'} />
                  <FaStar className={'text-yellow-400'} />
                  <FaStar className={'text-yellow-400'} />
                </Flex>
              </Flex>

              <Flex gap={12} align={'baseline'}>
                <EnvironmentOutlined />
                <Paragraph style={{ marginBottom: 0 }}>
                  26 To Hien Thanh Street, 3 Ward, Dalat city, Lam Dong Province, Phường 3, Đà Lạt,
                  Tỉnh Lâm Đồng, Việt Nam, 670000
                </Paragraph>
              </Flex>
            </Col>
            <Col md={8}>
              <Flex justify="end">
                <div className="text-right">
                  <p>Giá/phòng/đêm từ</p>
                  <h3 className="text-orange-500 font-medium text-xl">1.288.329 VND</h3>
                  <Button type="primary" className="mt-3">
                    Chọn
                  </Button>
                </div>
              </Flex>
            </Col>
          </Row>

          <Row gutter={12} className="mt-6 mb-3">
            <Col md={12}>
              <Card styles={{ body: { padding: '18px' } }} className="h-full">
                <Flex justify="space-between" align="center" className="mb-2">
                  <Title style={{ marginBottom: 0 }} level={5}>
                    Trang bị
                  </Title>
                  <Button type={'link'}>xem thêm</Button>
                </Flex>

                <Flex gap={16} vertical>
                  <Flex gap={18} align="center">
                    <div>x3</div>
                    <Flex gap={4} align="center">
                      <FaWifi />
                      <div>Sức chứa</div>
                    </Flex>
                  </Flex>
                  <Flex gap={18} align="center">
                    <div>x1</div>
                    <Flex gap={4} align="center">
                      <FaShower />
                      <div>Giường đôi</div>
                    </Flex>
                  </Flex>
                  <Flex gap={18} align="center">
                    <div>x1</div>
                    <Flex gap={4} align="center">
                      <FaWifi />
                      <div>Nệm Futon</div>
                    </Flex>
                  </Flex>
                  <Flex gap={18} align="center">
                    <div>x2</div>
                    <Flex gap={4} align="center">
                      <FaWifi />
                      <div>Dụng cụ vệ sinh cá nhân</div>
                    </Flex>
                  </Flex>
                </Flex>
              </Card>
            </Col>

            <Col md={12}>
              <Card styles={{ body: { padding: '18px' } }} className="h-full">
                <Flex justify="space-between" align="center" className="mb-2">
                  <Title style={{ marginBottom: 0 }} level={5}>
                    Tiện ích
                  </Title>
                  <Button type={'link'}>xem thêm</Button>
                </Flex>
                <Flex wrap gap={16}>
                  <Flex gap={12} align="center">
                    <FaShower />
                    <div>Vòi Tắm</div>
                  </Flex>
                  <Flex gap={12} align="center">
                    <FaWifi />
                    <div>Wifi</div>
                  </Flex>
                  <Flex gap={12} align="center">
                    <FaTemperatureHalf />
                    <div>Điều hòa</div>
                  </Flex>
                  <Flex gap={12} align="center">
                    <FaToiletPortable />
                    <div>Toilet riêng</div>
                  </Flex>
                  <Flex gap={12} align="center">
                    <FaVolumeXmark />
                    <div>Cách âm</div>
                  </Flex>
                  <Flex gap={12} align="center">
                    <FaSmoking />
                    <div>Khu vực hút thuốc</div>
                  </Flex>
                </Flex>
              </Card>
            </Col>
          </Row>

          <Card
            styles={{ body: { padding: '18px' } }}
            style={{
              backgroundImage: `url(https://ik.imagekit.io/tvlk/image/imageResource/2022/12/22/1671697257708-40dfdb8bfb9aafb6d141a4327a8d605e.svg?tr=q-75)`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'right',
              overflow: 'hidden',
            }}
          >
            <div
              className="absolute top-0 left-0 bottom-0 right-0 z-0"
              style={{
                backgroundImage:
                  'linear-gradient(45deg, rgb(255, 255, 255) 60%, rgba(255, 255, 255, 0) 100%)',
              }}
            ></div>
            <div className="relative z-10">
              <Flex justify="space-between" align="center" className="mb-2">
                <Title style={{ marginBottom: 0 }} level={5}>
                  Gần khách sạn và căn hộ Seashore
                </Title>
                <Button type={'link'}>xem thêm</Button>
              </Flex>
              <Row gutter={16}>
                <Col md={12}>
                  <Flex gap={12} align="center">
                    <EnvironmentOutlined />
                    <div>Khu vui chơi giải trí</div>
                  </Flex>
                </Col>
                <Col md={12}>
                  <Flex gap={12} align="center">
                    <EnvironmentOutlined />
                    <div>Quảng trường</div>
                  </Flex>
                </Col>
                <Col md={12}>
                  <Flex gap={12} align="center">
                    <EnvironmentOutlined />
                    <div>Bảo tàng</div>
                  </Flex>
                </Col>
                <Col md={12}>
                  <Flex gap={12} align="center">
                    <EnvironmentOutlined />
                    <div>Khu sinh thái</div>
                  </Flex>
                </Col>
                <Col md={12}>
                  <Flex gap={12} align="center">
                    <EnvironmentOutlined />
                    <div>Khu nghỉ dưỡng</div>
                  </Flex>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Divider />
        <Col md={24} className='mb-8' id='product-item'>
          <Typography.Title level={3}>Phòng Trống</Typography.Title>
          <SearchRoomAvailable />
          <ProductAvailableTable />
        </Col>
        <Col md={24} className='mb-8'>
          <div className='flex'>
            <div>
              <Typography.Title level={3}>Đánh giá của khách</Typography.Title>
            </div>
            <div className='ml-auto'>
              <Button type='primary' >
                <a href='#product-item'>
                  Xem phòng trống
                </a>
              </Button>
            </div>
          </div>

          <div className='mt-4 mb-6 flex items-center gap-2'>
            <div className='w-fit h-fit p-1 text-lg font-bold text-white rounded-lg rounded-bl-none bg-blue-600'>8,6</div>
            <div className='text-[16px]'><span className='font-bold'>Tốt</span> <span className='text-gray-500'>583 đánh giá</span></div>
            <Link href='/'>
              <div className='text-[16px]'>Đọc tất cả đánh giá</div>
            </Link>
          </div>
          <div className='text-[16px] font-bold py-4'>Hạng mục</div>
          <div className='flex flex-wrap -mx-3'>
            {Array.isArray(evaluationsMockup) && evaluationsMockup.length > 0 && evaluationsMockup.map((evaluation, key) => (
              <div key={key} className='w-full p-3 md:w-1/3'>
                <div className='flex justify-between text-sm font-medium'>
                  <div className='flex items-center gap-2'>
                    <div>{evaluation.title}</div>
                    {evaluation.percent < 70 && <div><IoArrowDown className='text-red-500' /></div> }
                  </div>
                  <div>{evaluation.value}</div>
                </div>
                <Progress percent={evaluation.percent} showInfo={false} status={evaluation.percent < 70 ? 'exception' : 'normal'} />
              </div>
            ))}
          </div>

          <div className='text-[16px] font-bold py-4'>Chọn chủ đề để đọc đánh giá:</div>
          <div className='flex gap-2'>
            {Array.isArray(topicEvaluation) && topicEvaluation.length > 0 && topicEvaluation.map((item, key) => (
              <div key={key} className='flex items-center py-1.5 px-2.5 w-fit rounded-full border border-gray-500'>
                <IoAddOutline className='text-gray-500 text-lg mr-1' />
                <div className='font-medium'>{item.title}</div>
              </div>
            ))}
          </div>

          <div className='text-[16px] font-bold py-4'>Khách lưu trú ở đây thích điều gì?</div>
          <Slider {...settingsSlider} className='-mx-2 mb-4'>
            <div>
              <div className='px-2 h-48'>
                <Card className='h-full flex flex-col gap-y-2 min-h' styles={{ body: { padding: '16px' } }}>
                  <UserAvatar name={'Hương'} sub={'Việt Nam'} />
                  <p className='truncate-multiple-3'>“Giường thoải mái. Chú lễ tân dễ thương. Gần biển . Gần các chỗ đi chs . ăn uống thoải mái”</p>
                  <div className='mt-auto'>
                    <a>Tìm hiểu thêm</a>
                  </div>
                </Card>
              </div>
            </div>
            <div>
              <div className='px-2 h-48'>
                <Card className='h-full flex flex-col gap-y-2 min-h' styles={{ body: { padding: '16px' } }}>
                  <UserAvatar name={'Hương'} sub={'Việt Nam'} />
                  <p className='truncate-multiple-3'>“Giường thoải mái. Chú lễ tân dễ thương. Gần biển . Gần các chỗ đi chs . ăn uống thoải mái”</p>
                  <div className='mt-auto'>
                    <a>Tìm hiểu thêm</a>
                  </div>
                </Card>
              </div>
            </div>
            <div>
              <div className='px-2 h-48'>
                <Card className='h-full flex flex-col gap-y-2 min-h' styles={{ body: { padding: '16px' } }}>
                  <UserAvatar name={'Hương'} sub={'Việt Nam'} />
                  <p className='truncate-multiple-3'>“Giường thoải mái. Chú lễ tân dễ thương. Gần biển . Gần các chỗ đi chs . ăn uống thoải mái”</p>
                  <div className='mt-auto'>
                    <a>Tìm hiểu thêm</a>
                  </div>
                </Card>
              </div>
            </div>

          </Slider>
          <Button>Đọc tất cả đánh giá</Button>
        </Col>

        <Col md={24} className='mb-8'>
          <div className='flex'>
            <div>
              <Typography.Title level={3}>Thắc mắc của du khách</Typography.Title>
            </div>
            <div className='ml-auto'>
              <Button type='primary' >
                <a href='#product-item'>
                  Xem phòng trống
                </a>
              </Button>
            </div>
          </div>

          <div className='flex gap-6'>
            <div className='flex-1'>
              <Card styles={{ body: { padding: '16px' } }}>
                {question.map((item, key: number) => (
                  <div key={key} onClick={() => {setOpenDrawer(true)}} className='cursor-pointer flex items-center gap-x-4 border-b border-[#f0f0f0] py-4 first:pt-0 last:pb-0 last:border-b-0'>
                    <IoChatbubblesOutline className='text-2xl' />
                    <div>{item.title}</div>
                    <IoChevronForwardOutline className='text-xl ml-auto' />
                  </div>
                ))}
              </Card>
            </div>
            <div className='flex-1'>
              <Card styles={{ body: { padding: '16px' } }}>
                {question.map((item, key: number) => (
                  <div key={key} onClick={() => {setOpenDrawer(true)}} className='cursor-pointer flex items-center gap-x-4 border-b border-[#f0f0f0] py-4 first:pt-0 last:pb-0 last:border-b-0'>
                    <IoChatbubblesOutline className='text-2xl' />
                    <div>{item.title}</div>
                    <IoChevronForwardOutline className='text-xl ml-auto' />
                  </div>
                ))}
              </Card>
            </div>
            <div className='flex-1'>
              <Card className='h-full' styles={{ body: { padding: '16px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' } }}>
                <Typography.Title level={3} style={{marginBottom: 0}}>Bạn vẫn đang tìm kiếm?</Typography.Title>
                <Button className='mt-6'>Đặt câu hỏi</Button>
                <div className='mt-6 text-center'>Chúng tôi có thể giải đáp tức thì hầu hết các thắc mắc</div>
              </Card>
            </div>
          </div>
        </Col>
        <Col md={24} className='mb-8'>
          <div className='flex'>
            <div>
              <Typography.Title level={3}>Quy tắc chung</Typography.Title>
              <p className='text-[16px] text-[#595959]'>Hai Yen Hotel nhận yêu cầu đặc biệt - gửi yêu cầu trong bước kế tiếp!</p>
            </div>
            <div className='ml-auto'>
              <Button type='primary' >
                <a href='#product-item'>
                  Xem phòng trống
                </a>
              </Button>
            </div>
          </div>
          <div className='my-4'>
            <Card
              styles={{
                body: {
                  padding: '16px'
                }
              }}
            >
              {conventionFromAPI.map((item, key: number) => mappingConvention(item.id, item))}
            </Card>
          </div>
        </Col>

        <Col md={24} className='mb-8'>
          <div className='flex'>
            <div>
              <Typography.Title level={3}>Thông tin quan trọng</Typography.Title>
              <p className='text-[16px] text-[#595959]'>Thông tin quan trọng về chỗ nghỉ này</p>
            </div>
            <div className='ml-auto'>
              <Button type='primary' >
                <a href='#product-item'>
                  Xem phòng trống
                </a>
              </Button>
            </div>
          </div>

          <div className='my-4'>
            <Card
              styles={{
                body: {
                  padding: '16px'
                }
              }}
            >
              <p className='mb-4'>Khách cần phải xuất trình giấy tờ tùy thân có ảnh và thẻ tín dụng vào thời điểm nhận phòng. Vui lòng lưu ý tất cả các Yêu cầu Đặc biệt đều tùy thuộc vào tình trạng phòng trống và phụ phí có thể sẽ được tính thêm.</p>
              <p className='mb-4'>Vui lòng thông báo trước cho Hai Yen Hotel về thời gian đến dự kiến của quý khách. Khách có thể sử dụng ô Yêu cầu Đặc biệt khi đặt phòng hoặc liên lạc trực tiếp với chỗ nghỉ qua các thông tin liên hệ được ghi trong xác nhận đặt phòng.</p>
              <p className='mb-4'>Trong trường hợp bạn trả phòng sớm, chỗ nghỉ vẫn sẽ thu toàn bộ tiền phòng.</p>
              <p>Chỗ đậu xe có số lượng hạn chế và tùy thuộc vào tình trạng sẵn có.</p>
            </Card>
          </div>
        </Col>
      </Row>
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
        onClose={onCloseDrawer}
        open={openDrawer}
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
    </div>
  );
};

export default ProductDetailPage;
