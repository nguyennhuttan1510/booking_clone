'use client'
import React from 'react';
import {Button, Table, TableProps, Tooltip} from "antd";
import Quantity from "@/app/components/SearchBar/Quantity";
import {ChooseMappingType, PropertiesMappingType, Utils} from "@/utils";
import { IoSnowOutline, IoPersonSharp } from "react-icons/io5";
import classNames from "classnames";
import {tree} from "next/dist/build/templates/app-page";
import Link from "next/link";

export type ProductAvailableType = {
  productID: string
  typeProduct: any
  quantityPeople: number
  price: {
    oldPrice: number
    currentPrice: number
    benefit: {
      code: string
      title: string
      description: string
    }[]
  }
  choose: any
  quantityProduct: number
}

const ProductAvailableTable = () => {

  const columns: TableProps<ProductAvailableType>['columns'] = [
    {
      width: 300,
      title: 'Loại chỗ nghỉ',
      dataIndex: 'typeProduct',
      key: 'typeProduct',
      render: (value) => <div>
        <div className='text-[16px] font-bold text-blue-400 underline'>{value.name}</div>
        <div className='flex flex-wrap'>
          {value.properties.map((item: any, key: number) => {
            console.log('item', item)
            const Icon = item.Icon
            return(
              <div className='mt-1 ml-1 flex items-center' key={key}><span className='mr-1'><Icon /></span><span>{item.title}</span></div>
            )
          })}
        </div>
      </div>,
    },
    {
      title: 'Số lượng khách',
      dataIndex: 'quantityPeople',
      key: 'quantityPeople',
      width: 100,
      align: 'start',
      className: 'align-baseline',
      render: (value) => typeof value === 'number' && (
        <div className='flex gap-1'>{
          Array.from({length: value}, (_, i) => <IoPersonSharp key={i} />)
        }</div>
      ),
    },
    {
      title: 'Giá hôm nay',
      dataIndex: 'price',
      key: 'price',
      render: (value) => (
        <div>
          <div className='mb-2 text-red-500 line-through'>{Utils.formatCurrency(value.oldPrice)}</div>
          <div className='mb-2 text-[16px] text-black'>{Utils.formatCurrency(value.currentPrice)}</div>
          <div className='mb-2 text-gray-500'>Đã bao gồm thuế và phí</div>
          <div className='flex flex-col gap-0.5'>{
            value.benefit.map((item: any, key: string) => (
              <Tooltip placement='top' title={() => (
                <div className='text-black'>
                  <div className='font-bold text-md mb-1'>{item.title}</div>
                  <div>{item.description}</div>
                </div>
              )} color={'white'} key={'white'}>
                <div key={key} className=' w-fit py-0.5 px-1 rounded text-white text-sm bg-green-600 cursor-pointer'>{item.title}</div>
              </Tooltip>
            ))
          }</div>
        </div>
      ),
    },
    {
      title: 'Các lựa chọn',
      dataIndex: 'choose',
      key: 'choose',
      render: (value) => <div className='flex flex-col gap-1'>
        {value.map((item: any, key: number) => {
          const Icon = item.icon
          console.log('icon', Icon)
          return(
            <div key={key} className={classNames('flex gap-1 items-baseline text-green-600', {'text-red-600': item.status == 'warning', })}><div className='min-w-4'>{item.icon}</div><div><span className='font-bold'>{item.title}</span> <span>{item.value}</span></div></div>
          )
        })}
      </div>,
    },
    {
      title: 'Chọn phòng',
      width: 150,
      dataIndex: 'quantityProduct',
      key: 'quantityProduct',
      render: (value) => <Quantity title={''} value={value} />,
    },
    {
      title: '',
      dataIndex: 'productID',
      key: 'productID',
      // align: 'start',
      onCell: (_, index) => ({
        rowSpan: index === 0 ? 3 : 0,
        className: 'align-top'
      }),
      render: (text) => (
        <div className='sticky top-[80px]'>
          <div className='pt-2.5'>
            <div>2 phòng tổng giá</div>
            <div className='text-red-500 line-through'>VND 1.554.000</div>
            <div className='text-xl font-medium'>VND 699.300</div>
          </div>
          <p className='mb-2 text-[12px] text-[#595959]'>Đã bao gồm thuế và phí</p>
          <Button className='my-2' type='primary'>
            <Link href='/book'>Đặt với giá Genius</Link>
          </Button>
          <ul style={{listStyleType: 'disc'}} className='pl-8'>
            <li>Chỉ mất 2 phút</li>
            <li>Xác nhận tức thì</li>
          </ul>
        </div>
      ),
    },
  ]

  const mappingProductsAvailable = (properties: ProductAvailableType[]) => {
    return properties.map(item => {
      const _item = item
      const properties = _item.typeProduct.properties.map((property: {code: PropertiesMappingType}) => {
        return {
          ...property,
          Icon: Utils.PROPERTIES_MAPPING[property.code].Icon
        }
      })
      const choose = _item.choose.map((item: {code: ChooseMappingType}) => {
        const Icon = Utils.CHOOSE_MAPPING?.[item.code]?.Icon
        return {
          ...item,
          icon: Icon ? item.code == '2' ? <Icon className='text-[8px]'/> : <Icon /> : null
        }
      })
      return {
        ..._item,
        typeProduct: {..._item.typeProduct, properties},
        choose
      }
    })
  }

  const data: ProductAvailableType[] = [
    {
      productID: '1',
      typeProduct: {
        name: 'Tiêu chuẩn giường đôi',
        properties: [
          {
            title: '25 m²',
            code: '1',
          },{
            title: 'Điều hòa không khí',
            code: '2',
          },{
            title: 'Sân trong',
            code: '2',
          },{
            title: 'Phòng tắm riêng trong phòng',
            code: '2',
          },{
            title: 'TV màn hình phẳng',
            code: '2',
          },
        ]
      },
      quantityPeople: 2,
      quantityProduct: 1,
      price: {
        currentPrice: 200000,
        oldPrice: 500000,
        benefit: [
          {
            code: '1',
            title: 'tiết kiệm 70%',
            description: 'Bạn nhận được giá ưu đãi vì chỗ nghỉ này đang có Ưu Đãi Trong Thời Gian Có Hạn.'
          },{
            code: '2',
            title: 'Ưu Đãi Trong Thời Gian Có Hạn',
            description: 'Bạn được giảm giá vì chỗ nghỉ này đang có ưu đãi trong thời gian có hạn. Ưu đãi này chỉ kéo dài tối đa 48 giờ.'
          },
        ]
      },
      choose: [
        {
          title: 'Không hoàn tiền',
          value: 'trước 18:00, 13 tháng 9, 2024',
          code: '1',
          status: 'success'
        },{
          title: 'Giảm giá Genius 10% trên giá trước thuế và phí',
          code: '1',
          status: 'success'
        },{
          title: 'Không cần thanh toán trước',
          value: 'thanh toán tại chỗ nghỉ',
          code: '1',
          status: 'success'
        },{
          title: 'Chỉ còn 1 phòng trên trang của chúng tôi',
          value: '1',
          code: '2',
          status: 'warning'
        },
      ]
    },
    {
      productID: '1',
      typeProduct: {
        name: 'Tiêu chuẩn giường đôi',
        properties: [
          {
            title: '25 m²',
            code: '1',
          },{
            title: 'Điều hòa không khí',
            code: '2',
          },{
            title: 'Sân trong',
            code: '2',
          },{
            title: 'Phòng tắm riêng trong phòng',
            code: '2',
          },{
            title: 'TV màn hình phẳng',
            code: '2',
          },
        ]
      },
      quantityPeople: 2,
      quantityProduct: 1,
      price: {
        currentPrice: 200000,
        oldPrice: 500000,
        benefit: [
          {
            code: '1',
            title: 'tiết kiệm 70%',
            description: 'Bạn nhận được giá ưu đãi vì chỗ nghỉ này đang có Ưu Đãi Trong Thời Gian Có Hạn.'
          },{
            code: '2',
            title: 'Ưu Đãi Trong Thời Gian Có Hạn',
            description: 'Bạn được giảm giá vì chỗ nghỉ này đang có ưu đãi trong thời gian có hạn. Ưu đãi này chỉ kéo dài tối đa 48 giờ.'
          },
        ]

      },
      choose: [
        {
          title: 'Không hoàn tiền',
          value: 'trước 18:00, 13 tháng 9, 2024',
          code: '1',
          status: 'success'
        },{
          title: 'Giảm giá Genius 10% trên giá trước thuế và phí',
          code: '1',
          status: 'success'
        },{
          title: 'Không cần thanh toán trước',
          value: 'thanh toán tại chỗ nghỉ',
          code: '1',
          status: 'success'
        },{
          title: 'Chỉ còn 1 phòng trên trang của chúng tôi',
          value: '1',
          code: '2',
          status: 'warning'
        },
      ]
    },
    {
      productID: '1',
      typeProduct: {
        name: 'Tiêu chuẩn giường đôi',
        properties: [
          {
            title: '25 m²',
            code: '1',
          },{
            title: 'Điều hòa không khí',
            code: '2',
          },{
            title: 'Sân trong',
            code: '2',
          },{
            title: 'Phòng tắm riêng trong phòng',
            code: '2',
          },{
            title: 'TV màn hình phẳng',
            code: '2',
          },
        ]
      },
      quantityPeople: 4,
      quantityProduct: 1,
      price: {
        currentPrice: 200000,
        oldPrice: 500000,
        benefit: [
          {
            code: '1',
            title: 'tiết kiệm 70%',
            description: 'Bạn nhận được giá ưu đãi vì chỗ nghỉ này đang có Ưu Đãi Trong Thời Gian Có Hạn.'
          },{
            code: '2',
            title: 'Ưu Đãi Trong Thời Gian Có Hạn',
            description: 'Bạn được giảm giá vì chỗ nghỉ này đang có ưu đãi trong thời gian có hạn. Ưu đãi này chỉ kéo dài tối đa 48 giờ.'
          },
        ]

      },
      choose: [
        {
          title: 'Không hoàn tiền',
          value: 'trước 18:00, 13 tháng 9, 2024',
          code: '1',
          status: 'success'
        },{
          title: 'Giảm giá Genius 10% trên giá trước thuế và phí',
          code: '1',
          status: 'success'
        },{
          title: 'Không cần thanh toán trước',
          value: 'thanh toán tại chỗ nghỉ',
          code: '1',
          status: 'success'
        },{
          title: 'Chỉ còn 1 phòng trên trang của chúng tôi',
          value: '1',
          code: '2',
          status: 'warning'
        },
      ]
    }
  ];

  return (
    <Table sticky={true} pagination={false} columns={columns} dataSource={mappingProductsAvailable(data)} />
  );
};

export default ProductAvailableTable;