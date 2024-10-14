'use client'
import React, {useState} from 'react';
import {Button, Divider, Form, Input, message} from "antd";
import Image from "next/image";
import {Controller, SubmitHandler, useForm} from 'react-hook-form'
import {useRouter, useSearchParams} from "next/navigation";
import useAuthentication from "@/hooks/useAuthentication";

export type User = {
  email: string
  password: string
}

const LoginPage = () => {
  const [isLoadingSignIn, setIsLoadingSignIn] = useState<boolean>(false)
  const {handleSubmit, control} = useForm<User>()
  const router = useRouter()
  const [messageApi, contextHolder] = message.useMessage();
  const {onSignIn} = useAuthentication()

  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const pathnameReturn = params.get('return')

  const onSignInPress = React.useCallback(async (account: User) => {
    setIsLoadingSignIn(true)
    try {
      const signInResource = await onSignIn(account)
      if(!signInResource.status) {
        messageApi.error('Đăng nhập thất bại')
        throw new Error('Sign in internal service failed')
      }
      router.push(pathnameReturn ||'/search')
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
    } finally {
      setIsLoadingSignIn(false)
    }
  }, [])

  const onSubmit: SubmitHandler<User> = async (values) => {
    await onSignInPress(values)
  }

  return (
    <>
      {contextHolder}
      <div className='container mx-auto max-w-sm mt-12 p-4'>
        <div className='text-[#1a1a1a] font-bold text-xl mb-8'>Đăng nhập hoặc tạo tài khoản</div>
        <Form
          layout={'vertical'}
          onFinish={handleSubmit(onSubmit)}
        >
          <Controller
            name='email'
            control={control}
            render={({field}) => (
              <Form.Item label='Địa chỉ email' style={{marginBottom: '16px'}}>
                <Input style={{height: '36px'}} {...field}/>
              </Form.Item>
            )}/>

          <Controller
            name='password'
            control={control}
            render={({field}) => (
              <Form.Item label='password' style={{marginBottom: '16px'}}>
                <Input style={{height: '36px'}} {...field}/>
              </Form.Item>
            )}/>
          <Button loading={isLoadingSignIn} htmlType='submit' style={{width: '100%', minHeight: '48px'}} type='primary'><span style={{lineHeight: '24px', fontSize: '16px', fontWeight: 'bold'}}>Tiếp tục với email</span></Button>
        </Form>

        <Divider style={{marginBottom: 0}} plain>hoặc sử dụng một trong các lựa chọn này</Divider>

        <div className='flex justify-center'>
          <div className='p-6 m-4 border border-gray-300 rounded w-fit'>
            <Image src='logo/facebook.svg' alt='facebook' width={24} height={24}/>
          </div>
          <div className='p-6 m-4 border border-gray-300 rounded w-fit'>
            <Image src='logo/google.svg' alt='google' width={24} height={24}/>
          </div>
        </div>

        <Divider style={{marginTop: 0}} />

        <div className='text-[12px]'>
          <p className='text-center mb-2'>
            Qua việc đăng nhập hoặc tạo tài khoản, bạn đồng ý với các <span className='text-blue-500'>Điều khoản và Điều kiện</span> cũng như <span className='text-blue-500'>Chính sách An toàn và Bảo mật</span> của chúng tôi
          </p>
          <p className='text-center'>Bảo lưu mọi quyền.<br/>Bản quyền (2006 - 2024) - Booking.com™</p>
        </div>

      </div>
    </>
  );
};

export default LoginPage;