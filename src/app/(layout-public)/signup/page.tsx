'use client'
import React from 'react';
import {Button, Divider, Form, Input} from "antd";
import Image from "next/image";
import {Controller, SubmitHandler, useForm} from 'react-hook-form'
import {useSignIn, useSignUp} from "@clerk/nextjs";
import {useRouter} from "next/navigation";

type User = {
  email: string
  password: string
  confirm: string
  code: string
}

const SignUpPage = () => {
  const {handleSubmit, control} = useForm<User>()
  const {signUp, isLoaded, setActive} = useSignUp()
  const [pendingVerification, setPendingVerification] = React.useState(false)
  const router = useRouter()

  const onPressVerify = async (code: User['code']) => {
    if (!isLoaded) {
      return
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      })

      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId })
        router.replace('/search')
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2))
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }

  const onSignUpPress = async (account: User) => {
    if (!isLoaded) {
      return
    }

    try {
      await signUp.create({
        emailAddress: account.email,
        password: account.password,
      })

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      setPendingVerification(true)
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }


  const onSubmit: SubmitHandler<User> = async (values) => {
    if(pendingVerification) {
      await onPressVerify(values.code)
    } else {
      await onSignUpPress(values)
    }
  }

  return (
    <div className='container mx-auto max-w-sm mt-12 p-4'>
      <div className='text-[#1a1a1a] font-bold text-xl mb-8'>Tạo tài khoản</div>
      <Form
        layout={'vertical'}
        onFinish={handleSubmit(onSubmit)}
      >
        {!pendingVerification && (
          <>
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

            <Controller
              name='confirm'
              control={control}
              render={({field}) => (
                <Form.Item label='Confirm password' style={{marginBottom: '16px'}}>
                  <Input style={{height: '36px'}} {...field}/>
                </Form.Item>
              )}/>
            <Button htmlType='submit' style={{width: '100%', minHeight: '48px'}} type='primary'><span style={{lineHeight: '24px', fontSize: '16px', fontWeight: 'bold'}}>Đăng ký</span></Button>
          </>
        )}

        {pendingVerification && (
          <>
            <Controller
              name='code'
              control={control}
              render={({field}) => (
                <Form.Item label='code' style={{marginBottom: '16px'}}>
                  <Input style={{height: '36px'}} {...field}/>
                </Form.Item>
              )}/>
            <Button htmlType='submit' style={{width: '100%', minHeight: '48px'}} type='primary'><span style={{lineHeight: '24px', fontSize: '16px', fontWeight: 'bold'}}>Xác thực</span></Button>
          </>
        )}
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
  );
};

export default SignUpPage;