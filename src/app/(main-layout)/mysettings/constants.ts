import {
  IoCardOutline,
  IoLockClosedOutline,
  IoNotificationsOutline,
  IoOptionsOutline, IoPeopleOutline,
  IoPersonOutline
} from "react-icons/io5";
import {BsPersonLock} from "react-icons/bs";
import React from "react";

export const settings = [
  {
    title: 'Thông tin cá nhân',
    Icon: IoPersonOutline,
    subTitle: 'Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng ra sao.',
    category: 'Quản lý thông tin cá nhân',
    redirect: '/mysettings/personal'
  },
  {
    title: 'Các tùy chọn',
    Icon: IoOptionsOutline,
    subTitle: 'Thay đổi ngôn ngữ, tiền tệ và các yêu cầu hỗ trợ khuyết tật.',
    category: 'Quản lý tùy chọn',
    redirect: '/mysettings/personal'
  },
  {
    title: 'An toàn và bảo mật',
    Icon: IoLockClosedOutline,
    subTitle: 'Thay đổi thiết lập bảo mật, cài đặt xác thực bổ sung hoặc xóa tài khoản của Quý vị.',
    category: 'Quản lý bảo mật tài khoản',
    redirect: '/mysettings/personal'
  },
  {
    title: 'Thông tin thanh toán',
    Icon: IoCardOutline,
    subTitle: 'Thêm hoặc bỏ các phương thức thanh toán một cách bảo mật để dễ đặt hơn.',
    category: 'Quản lý thông tin thanh toán',
    redirect: '/mysettings/personal'
  },
  {
    title: 'Quyền riêng tư',
    Icon: BsPersonLock,
    subTitle: 'Thực hiện quyền riêng tư và kiểm soát cách dữ liệu của bạn được sử dụng.',
    category: 'Quản lý quyền riêng tư',
    redirect: '/mysettings/personal'
  },
  {
    title: 'Thông báo email',
    Icon: IoNotificationsOutline,
    subTitle: 'Chọn những gì được thông báo đến bạn và tắt các thông báo không cần thiết.',
    category: 'Quản lý thông báo',
    redirect: '/mysettings/personal'
  },
  {
    title: 'Người đi cùng',
    Icon: IoPeopleOutline,
    subTitle: 'Thêm hoặc chỉnh sửa thông tin của những người mà bạn đi cùng.',
    category: 'Quản lý người đi cùng',
    redirect: '/mysettings/personal'
  },
]
