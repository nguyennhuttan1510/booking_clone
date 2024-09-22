'use client';

import React, {useContext, useLayoutEffect, useState} from 'react';
import {Button, Card, Checkbox, Flex, Form, Input, Radio, Select, Space, Steps, Tag, Tooltip} from "antd";
import {FaStar} from "react-icons/fa6";
import {
  IoIosCash,
  IoIosCheckmarkCircle,
  IoIosCheckmarkCircleOutline,
  IoIosInformationCircle,
  IoIosInformationCircleOutline
} from "react-icons/io";
import Image from "next/image";
import {LuAlarmClock} from "react-icons/lu";
import {BsPersonCircle} from "react-icons/bs";
import {useLayout} from "@/hooks/useLayout";
import {MdOutlineCreditCardOff} from "react-icons/md";
import {IoChevronForwardOutline, IoLockClosed, IoRocketOutline} from "react-icons/io5";
import Link from "next/link";
import PaymentIntent from "@/lib/stripe-payment/components/PaymentIntent";

const BookingPage = () => {
  const {setState} = useLayout()
  const [currentStep, setCurrentStep] = useState<number>(1)

  const bookConfirm = <div className='p-3 text-black'>
    <div className='mb-2 text-xl font-bold'>BAMBOO HOTEL Vung Tau</div>
    <div className='font-bold'>Phòng Superior Giường Đôi</div>
    <hr className='my-4' />
    <div className='flex'>
      <div className='pr-4'>
        <div className='font-medium mb-1'>Nhận phòng</div>
        <div className='text-[16px] font-bold'>T6, 20 tháng 9 2024</div>
        <div className='text-[#595959]'>14:00 – 00:00</div>
      </div>
      <div className='pl-4'>
        <div className='font-medium mb-1'>Trả phòng</div>
        <div className='text-[16px] font-bold'>T6, 20 tháng 9 2024</div>
        <div className='text-[#595959]'>Cho đến 12:00</div>
      </div>
    </div>
    <div className='flex items-center text-orange-600 mt-4'>
      <IoIosInformationCircle className='text-2xl mr-2' />
      <div>Chỉ còn <span className='font-bold'>1</span> ngày nữa!</div>
    </div>
    <div className='mt-4'>
      <div className='mb-1 font-medium'>Tổng thời gian lưu trú:</div>
      <div className='font-bold'>1 đêm</div>
    </div>
  </div>

  useLayoutEffect(() => {
    setState((prevState) => ({...prevState, isSearch: false, isMenu: false}))
  }, [])

  return (
    <div className='container mx-auto w-3/4'>
      <div className='my-6'>
        <Steps
          size="small"
          onChange={(current) => {setCurrentStep(current)}}
          current={currentStep}
          items={[
            {
              title: <div className='font-bold'>Bạn chọn</div>,
            },
            {
              title: <div className='font-bold'>Chi tiết về bạn</div>,
            },
            {
              title: <div className='font-bold'>Thông tin thanh toán</div>,
            },
          ]}
        />
      </div>

      <div className='flex'>
        <div className='w-full md:w-1/3 px-2'>
          <div className='flex flex-col gap-4'>
            <Card
              styles={{
                body: {
                  padding: '16px'
                }
              }}>
              <div className='flex flex-col gap-y-2'>
                <div>
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
                  <div className='text-lg font-bold'>BAMBOO HOTEL Vung Tau</div>
                </div>
                <div>
                  <div>09 Trần Quý Cáp,Phường Thắng Tam,Thành phố Vũng Tàu, Vũng Tàu, Việt Nam</div>
                  <div className='text-green-600 text-[12px]'>Vị trí xuất sắc — 9.2</div>
                </div>
                <div className='flex items-center'>
                  <div className='w-fit h-fit p-0.5 font-bold text-white rounded bg-blue-900 mr-2'>8,6</div>
                  <div className='text-[12px] text-[#595959]'>Rất tốt · 137 đánh giá</div>
                </div>
              </div>
            </Card>

            <Card
              styles={{
                body: {
                  padding: '16px'
                }
              }}>
              <div className='text-[16px] font-bold mb-4'>Chi tiết đặt phòng của bạn</div>
              <div className='flex'>
                <div className='pr-4'>
                  <div className='font-medium mb-1'>Nhận phòng</div>
                  <div className='text-[16px] font-bold'>T6, 20 tháng 9 2024</div>
                  <div className='text-[#595959]'>14:00 – 00:00</div>
                </div>
                <div className='pl-4'>
                  <div className='font-medium mb-1'>Trả phòng</div>
                  <div className='text-[16px] font-bold'>T6, 20 tháng 9 2024</div>
                  <div className='text-[#595959]'>Cho đến 12:00</div>
                </div>
              </div>
              <div className='flex items-center text-orange-600 mt-4'>
                <IoIosInformationCircle className='text-2xl mr-2' />
                <div>Chỉ còn <span className='font-bold'>1</span> ngày nữa!</div>
              </div>
              <div className='mt-4'>
                <div className='mb-1 font-medium'>Tổng thời gian lưu trú:</div>
                <div className='font-bold'>1 đêm</div>
              </div>

              <hr className='my-4' />

              <div className='font-medium'>
                <div>Bạn đã chọn</div>
                <div className='font-bold text-[16px]'>1 phòng cho 2 người lớn</div>
                <div className='pt-4'>1 x Phòng Superior Giường Đôi</div>
                <div className='pt-4 -ml-3'>
                  <Button type='text' style={{color: '#006ce4'}}>Đổi lựa chọn của bạn</Button>
                </div>
              </div>
            </Card>

            <Card
              styles={{
                body: {
                  padding: '16px'
                }
              }}>
              <div className='text-[16px] font-bold mb-4'>Tóm tắt giá</div>
              <div className='flex justify-between gap-x-2 mb-2'>
                <div className='pr-2'>Giá gốc</div>
                <div className='text-nowrap'>VND 555.000</div>
              </div>
              <div className='flex justify-between gap-x-2 mb-2'>
                <div className='pr-2'>
                  <div>Ưu Đãi Mùa Du Lịch</div>
                  <div className='text-[12px] text-[#595959]'>Chỗ nghỉ này đang có giảm giá khi lưu trú từ 29/3 – 30/9/2024.</div>
                </div>
                <div className='text-nowrap'>- VND 249.750</div>
              </div>
              <div className='flex justify-between gap-x-2'>
                <div className='pr-2'>
                  <div>Giảm giá Genius</div>
                  <div className='text-[12px] text-[#595959]'>Bạn nhận được giảm giá vì bạn là thành viên Genius.</div>
                </div>
                <div className='text-nowrap'>- VND 55.500</div>
              </div>

              <div className='p-4 border-y border-[#e7e7e7] -mx-4 my-4 bg-[#ebf3ff]'>
                <div className='flex justify-between items-end'>
                  <div className='pr-2 text-2xl font-bold'>Tổng cộng</div>
                  <div className='text-right'>
                    <div className='text-red-500 line-through'>VND 555.000</div>
                    <div className='text-2xl font-bold'>VND 249.750</div>
                  </div>
                </div>
                <div className='text-right text-[#595959]'>Đã bao gồm thuế và phí</div>
              </div>

              <div>
                <div className='text-[16px] font-bold mb-4'>Thông tin giá</div>
                <div className='flex gap-x-3'>
                  <IoIosCash className='text-xl' />
                  <div>
                    <div className='mb-2'>Bao gồm VND 18.500 phí và thuế</div>
                    <div className='flex justify-between text-[#595959]'>
                      <div>8 % Thuế GTGT</div>
                      <div>VND 18.500</div>
                    </div>
                  </div>
                </div>
                <div className='mt-2 -ml-3'>
                  <Button type='text' style={{color: '#006ce4'}}>Ẩn chi tiết</Button>
                </div>
              </div>
            </Card>

            <Card
              styles={{
                body: {
                  padding: '16px'
                }
              }}>
              <div className='text-[16px] font-bold mb-4'>Lịch thanh toán của bạn</div>
              <div>
                Bạn sẽ phải trả khoản thanh toán trước bằng toàn bộ tiền phòng vào bất kỳ lúc nào.
              </div>
            </Card>

            <Card
              styles={{
                body: {
                  padding: '16px'
                }
              }}>
              <div className='text-[16px] font-bold mb-4'>Chi phí hủy là bao nhiêu?</div>
              <div className='flex justify-between gap-x-2'>
                <div>Nếu hủy, bạn sẽ phải thanh toán</div>
                <div>VND 249.750</div>
              </div>
            </Card>

            <Card
              styles={{
                body: {
                  padding: '16px'
                }
              }}>
              <div className='text-[16px] font-bold mb-4'>Đơn đặt này sẽ được tính!</div>
              <div>
                Chỗ nghỉ, vé máy bay, xe thuê, taxi hay vé tham quan, mỗi đơn đặt hoàn tất đều được tính vào tiến trình Genius của bạn.
              </div>
              <hr className='my-2' />
              <div className='flex justify-between gap-x-2'>
                <div className='text-[#595959]'>Chương trình khách hàng thân thiết của Booking.com</div>
                <Image src={'/logo/genius.svg'} alt={'logo genius blue'} width={53} height={14} />
              </div>
            </Card>

            <Card
              styles={{
                body: {
                  padding: '16px'
                }
              }}>
              <div className='text-[16px] font-bold mb-4'>Bạn có mã khuyến mãi không?</div>
              <Form layout='vertical'>
                <Form.Item style={{marginBottom: 0}} label={<span className='font-medium'>Nhập mã khuyến mại</span>}>
                  <Input placeholder="Basic usage" />
                </Form.Item>
              </Form>
              <div className='mt-4'>
                <Button color='primary'>Áp dụng</Button>
              </div>
            </Card>

            <Card
              style={{borderColor: 'red', overflow: "hidden"}}
              styles={{
                body: {
                  padding: '16px',
                  backgroundColor: '#fff5f5'
                }
              }}>
              <div className='flex gap-x-4'>
                <LuAlarmClock className='flex-none text-3xl text-red-500' />
                <div>
                  <div className='text-[16px] font-bold mb-4'>Nguồn cung giới hạn trong những ngày bạn chọn:</div>
                  <div>67 khách sạn 2 sao giống vậy đã không còn chỗ trên trang của chúng tôi</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className='w-full md:w-2/3 px-2'>
          {currentStep === 1 && (
            <div className='flex flex-col gap-y-4'>

              <Card
                styles={{
                  body: {
                    padding: '16px'
                  }
                }}>
                <div className='flex'>
                  <div className='flex-none w-fit h-fit border-yellow-400 border-2 rounded-full mr-3'>
                    <BsPersonCircle className='text-4xl' />
                  </div>
                  <div>
                    <div className='text-[16px] font-bold'>Bạn đã được đăng nhập</div>
                    <div className='text-[#595959]'>nguyentan15102000@gmail.com</div>
                  </div>
                </div>
              </Card>

              <Card
                styles={{
                  body: {
                    padding: '16px'
                  }
                }}>
                <div className='text-[16px] font-bold mb-4'>Nhập thông tin chi tiết của bạn</div>
                <Card
                  style={{overflow: "hidden",}}
                  styles={{
                    body: {
                      padding: '16px',
                      backgroundColor: '#f5f5f5'
                    }
                  }}>
                  <div className='flex gap-x-3'>
                    <div>
                      <IoIosInformationCircleOutline className='text-xl' />
                    </div>
                    <div>
                      <div>Gần xong rồi! Chỉ cần điền phần thông tin * bắt buộc</div>
                      <div>Vui lòng nhập thông tin của bạn bằng ký tự Latin để chỗ nghỉ có thể hiểu được</div>
                    </div>
                  </div>
                </Card>

                <div className='mt-4'>
                  <Form layout='vertical'>
                    <div className='flex gap-x-4 mb-1'>
                      <Form.Item className='w-1/2' label={<span className='font-medium'>Họ (tiếng Anh)</span>}>
                        <Input placeholder="Basic usage" />
                      </Form.Item>
                      <Form.Item className='w-1/2' label={<span className='font-medium'>Tên (tiếng Anh)</span>}>
                        <Input placeholder="Basic usage" />
                      </Form.Item>
                    </div>

                    <div className='flex gap-x-4 mb-1'>
                      <Form.Item
                        help={<span className='text-[12px] text-[#595959]'>Email xác nhận đặt phòng sẽ được gửi đến địa chỉ này</span>}
                        className='w-1/2'
                        label={<span className='font-medium'>Địa chỉ email</span>}>
                        <Input placeholder="Basic usage" />
                      </Form.Item>
                    </div>

                    <div className='flex gap-x-4 mb-1'>
                      <Form.Item
                        className='w-1/2'
                        label={<span className='font-medium'>Vùng/quốc gia</span>}
                      >
                        <Select
                          defaultValue="lucy"
                          options={[{ value: 'lucy', label: 'Lucy' }]}
                        />
                      </Form.Item>
                    </div>

                    <div className='flex gap-x-4 mb-1'>
                      <Form.Item
                        className='w-1/2'
                        label={<span className='font-medium'>Số điện thoại</span>}
                        help={<span className='text-[12px] text-[#595959]'>Cần thiết để chỗ nghỉ xác nhận đặt phòng của bạn</span>}
                      >
                        <div className='flex gap-x-2'>
                          <Select
                            defaultValue="lucy"
                            style={{ width: 120 }}
                            options={[{ value: 'lucy', label: 'Lucy' }]}
                          />
                          <Input placeholder="Basic usage" />
                        </div>
                      </Form.Item>
                    </div>

                    <Form.Item help={<span className='pl-6 text-[12px]'>Chúng tôi sẽ nhắn tin cho bạn đường dẫn để tải ứng dụng</span>}>
                      <Checkbox defaultChecked={false}>Có, tôi muốn xác nhận điện tử miễn phí (được đề xuất)</Checkbox>
                    </Form.Item>

                    <Form.Item>
                      <Checkbox defaultChecked={false}>Cập nhật tài khoản của tôi để thêm vào những chi tiết mới này.</Checkbox>
                    </Form.Item>

                    <hr className='my-2' />

                    <Form.Item
                      label={<span className='font-medium'>Bạn đặt phòng cho ai? <span className='font-normal'>(không bắt buộc)</span></span>}
                    >
                      <Radio.Group>
                        <Space direction="vertical">
                          <Radio value={1}>Tôi là khách lưu trú chính</Radio>
                          <Radio value={2}>Đặt phòng này là cho người khác</Radio>
                        </Space>
                      </Radio.Group>
                    </Form.Item>

                    <Form.Item
                      style={{marginBottom: 0}}
                      label={<span className='font-medium'>Bạn sắp đi công tác? <span className='font-normal'>(không bắt buộc)</span></span>}
                    >
                      <Radio.Group>
                        <Space direction="horizontal">
                          <Radio value={1}>Đúng</Radio>
                          <Radio value={2}>Sai</Radio>
                        </Space>
                      </Radio.Group>
                    </Form.Item>
                  </Form>
                </div>
              </Card>

              <Card
                styles={{
                  body: {
                    padding: '16px'
                  }
                }}>
                <div className='font-bold text-xl mb-4'>
                  Mách nhỏ:
                </div>
                <div className='flex items-center'>
                  <div className='mr-3'>
                    <MdOutlineCreditCardOff className='text-green-600 text-xl' />
                  </div>
                  <div>Không cần thẻ, bạn chỉ cần điền thông tin vào thôi!</div>
                </div>
              </Card>

              <Card
                styles={{
                  body: {
                    padding: '16px'
                  }
                }}>
                <div className='text-xl font-bold mb-4'>Phòng Superior Giường Đôi</div>
                <div className='mb-4'>
                  <div>
                    <div></div>
                    <div className='font-bold'>Không hoàn tiền</div>
                  </div>
                  <div>
                    <div></div>
                    <div><span className='font-bold'>Khách:</span> 2 người lớn</div>
                  </div>
                  <div>
                    <div></div>
                    <div className='text-[#595959]'>Phòng cực kỳ sạch - 8,8</div>
                  </div>
                  <div>
                    <div></div>
                    <div className='text-[#595959]'>Không hút thuốc</div>
                  </div>
                </div>

                <div className='flex flex-wrap gap-x-1'>
                  <div className='border rounded border-gray-300 p-0.5 text-[12px]'>
                    <div></div>
                    <div>25 m²</div>
                  </div>
                  <div className='border rounded border-gray-300 p-0.5 text-[12px]'>
                    <div></div>
                    <div>Nhìn ra thành phố</div>
                  </div>
                  <div className='border rounded border-gray-300 p-0.5 text-[12px]'>
                    <div></div>
                    <div>Điều hòa không khí</div>
                  </div>
                  <div className='border rounded border-gray-300 p-0.5 text-[12px]'>
                    <div></div>
                    <div>Sân trong</div>
                  </div>
                  <div className='border rounded border-gray-300 p-0.5 text-[12px]'>
                    <div></div>
                    <div>Phòng tắm riêng trong phòng</div>
                  </div>
                  <div className='border rounded border-gray-300 p-0.5 text-[12px]'>
                    <div></div>
                    <div>TV màn hình phẳng</div>
                  </div>
                </div>

                <hr className='my-4' />

                <div className='font-medium mb-4'>Quyền lợi Genius của bạn</div>
                <div className='flex'>
                  <div className='mr-3'>
                    <IoIosCheckmarkCircle className='text-xl text-yellow-400'/>
                  </div>
                  <div>
                    <div className='font-medium'>Giảm giá 10%</div>
                    <p className='text-[12px] text-[#595959]'>Bạn được giảm 10% trên giá của lựa chọn này trước khi áp dụng thuế và phí.</p>
                  </div>
                </div>

                <hr className='my-4' />

                <Form layout='vertical'>
                  <Form.Item label={<span className='font-medium'>Tên đầy đủ của khách</span>}>
                    <Input placeholder="Basic usage" />
                  </Form.Item>
                </Form>
              </Card>

              <Card
                styles={{
                  body: {
                    padding: '16px'
                  }
                }}>
                <div className='text-xl font-bold mb-4'>Phòng Superior Giường Đôi</div>
                <div className='mb-4'>Các yêu cầu đặc biệt không đảm bảo sẽ được đáp ứng – tuy nhiên, chỗ nghỉ sẽ cố gắng hết sức để thực hiện. Bạn luôn có thể gửi yêu cầu đặc biệt sau khi hoàn tất đặt phòng của mình!</div>
                <Form layout='vertical'>
                  <Form.Item style={{marginBottom: 0}} label={<span className='font-medium'>Tên đầy đủ của khách</span>}>
                    <Input.TextArea rows={4}  placeholder="Basic usage" />
                  </Form.Item>
                </Form>
              </Card>

              <Card
                styles={{
                  body: {
                    padding: '16px'
                  }
                }}>
                <div className='text-xl font-bold mb-4'>Thời gian đến của bạn</div>
                <div className='mb-4'>
                  <div className='flex gap-x-4'>
                    <div><IoIosCheckmarkCircleOutline className='text-2xl text-green-600' /></div>
                    <div>Phòng của bạn sẽ sẵn sàng để nhận trong khoảng từ 14:00 đến 00:00</div>
                  </div>
                  <div className='flex gap-x-4'>
                    <div><IoRocketOutline className='text-2xl text-green-600' /></div>
                    <div>Lễ tân 24 giờ - Luôn có trợ giúp mỗi khi bạn cần!</div>
                  </div>
                </div>
                <Form layout='vertical'>
                  <Form.Item style={{marginBottom: 0}} label={<span className='font-medium'>Thêm thời gian đến dự kiến của bạn <span className='font-normal'>(không bắt buộc)</span></span>}>
                    <Select
                      defaultValue="lucy"
                      style={{ maxWidth: 350 }}
                      // disabled
                      options={[{ value: 'lucy', label: 'Lucy' }]}
                    />
                  </Form.Item>
                </Form>
              </Card>

              <div className='flex justify-end'>
                <Tooltip placement="topRight" color='white' overlayInnerStyle={{width: '130%'}} title={bookConfirm} >
                  <Button onClick={() => {setCurrentStep(2)}} type='primary' style={{padding: '12px 24px', boxSizing: 'initial', height: 'fit-content'}}>
                    <div className='text-md'>Tiếp theo: Chi tiết cuối cùng</div>
                    <div>
                      <IoChevronForwardOutline className='text-xl' />
                    </div>
                  </Button>
                </Tooltip>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className='flex flex-col gap-y-4'>
              <Card
                styles={{
                  body: {
                    padding: '16px'
                  }
                }}>
                <div className='text-xl font-bold mb-4'>Không yêu cầu thông tin thanh toán</div>
                <div>Thanh toán của bạn sẽ do BAMBOO HOTEL Vung Tau xử lý, nên bạn không cần nhập thông tin thanh toán cho đơn đặt này.</div>
              </Card>

              <PaymentIntent />

              <div className='flex flex-col gap-y-2 my-4'>
                <Checkbox defaultChecked={true}>Tôi đồng ý nhận email marketing từ Booking.com, bao gồm khuyến mãi, đề xuất được cá nhân hóa, tặng thưởng, trải nghiệm du lịch và cập nhật về các sản phẩm và dịch vụ của Booking.com.</Checkbox>
                <Checkbox defaultChecked={false}>Tôi đồng ý nhận email marketing từ Booking.com, bao gồm khuyến mãi, đề xuất được cá nhân hóa, tặng thưởng, trải nghiệm du lịch và cập nhật về các sản phẩm và dịch vụ của Booking.com Transport Limited.</Checkbox>
              </div>

              <div className='text-[12px]'>
                Với việc đăng kí nhận email marketing, bạn cho phép chúng tôi đề xuất các sản phẩm, dịch vụ, ưu đãi và nội dung theo sở thích của mình bằng việc theo dõi cách bạn sử dụng Booking.com thông qua công nghệ theo dõi. Hủy đăng kí bất cứ lúc nào. Tham khảo <span className='underline text-blue-500'>chính sách bảo mật</span> của chúng tôi.
              </div>

              <div className='text-sm mb-6'>
                Đặt phòng của bạn là đặt phòng trực tiếp với BAMBOO HOTEL Vung Tau và bằng việc hoàn tất đặt phòng này, bạn đồng ý với <span className='underline text-blue-500'>điều kiện đặt phòng</span>, <span className='underline text-blue-500'>điều khoản chung</span> và <span className='underline text-blue-500'>chính sách bảo mật</span>.
              </div>

              <div className='flex justify-end gap-x-2'>
                <Button type='default' style={{padding: '12px 24px', boxSizing: 'initial', height: 'fit-content'}}>
                  <div className='text-md'>Kiểm tra lại đặt phòng</div>
                </Button>
                  <Link href='/book/payment-intent'>
                  <Button type='primary' style={{padding: '12px 24px', boxSizing: 'initial', height: 'fit-content'}}>
                      <div>
                        <IoLockClosed className='text-xl' />
                      </div>
                      <div className='text-md'>Đặt với cam kết thanh toán sau</div>
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default BookingPage;
