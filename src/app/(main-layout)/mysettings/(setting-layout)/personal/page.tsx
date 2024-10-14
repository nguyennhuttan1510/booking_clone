'use client'
import React, {useEffect, useState} from 'react';
import {Button, Form, Input, message} from "antd";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import UserAPI from "@/lib/http/apis/users";
import {ProfileType} from "@/lib/http/apis/users.d";
import {useParams} from "next/navigation";
import useAuthentication from "@/hooks/useAuthentication";
import Loading from "@/app/components/Loading";
import MetadataAPI from "@/lib/http/apis/metadata";
import {FormatHelper} from "@/utils/formatString";
import {
  EditFormProps,
  KeyField,
  OnClickEdit,
  OnClickSave
} from "@/app/(main-layout)/mysettings/(setting-layout)/personal/components/interfaces";
import EditForm from "@/app/(main-layout)/mysettings/(setting-layout)/personal/components/EditForm";
import {Controller} from "react-hook-form";


const PersonalSettingPage = ({params}:{params: {id: string}}) => {
  const {tokenParsed, onChangeProfile} = useAuthentication()
  const [fieldKeyEdited, setFieldKeyEdited] = useState<KeyField>('none')
  const queryClient = useQueryClient();
  const [messageApi, contextHolder] = message.useMessage();
  //QUERIES

  const sexOptionQuery = useQuery({
    retry: false,
    queryKey: ['sex'],
    queryFn: async () => {
      return await MetadataAPI.getMetadata('SEX').then(res => res.data?.data)
    }
  })

  const {isLoading, data} = useQuery({
    retry: false,
    queryKey: ['profileID', tokenParsed?.profile_id],
    queryFn: async () => {
      if(!tokenParsed?.profile_id) {
        console.error('Not found profile ID')
        return
      }
      const profile = await UserAPI.getProfile(tokenParsed?.profile_id).then(res => res.data?.data)
      onChangeProfile(profile)
      return profile
    }
  })

  const mutation = useMutation({
    mutationFn: (payload: {id: string, body: Partial<ProfileType>}) => {
      return UserAPI.updateProfile(payload.id, payload.body).then(res => res.data?.data)
    },
    onSuccess: async (data, variables) => {
      messageApi.success('Cập nhật thành công');
      await queryClient.refetchQueries({queryKey: ['profileID']});
      setFieldKeyEdited('none')
    },
    onError: async () => {
      await messageApi.error('Cập nhật thất bại');
    },
  })

  //FUNCTIONS

  const onClickEdit: OnClickEdit = (key) => {
    if(fieldKeyEdited === key) {
      setFieldKeyEdited("none")
      return
    }
    setFieldKeyEdited(key)
  }
  const onClickSave: EditFormProps['onClickSave'] = async (data) => {
    if(!tokenParsed?.id) return
    try {
      let payload = data
      mutation.mutate({id: tokenParsed.profile_id, body: payload})
    } catch (e) {
      console.error(e)
    }
  }

  //VARIABLE

  const isLoadingQuery = isLoading || sexOptionQuery.isLoading

  if(isLoadingQuery) return <Loading />

  const sex = Array.isArray(sexOptionQuery?.data) ? sexOptionQuery.data.find(item => item.code === data?.sex)?.name  : '__'
  const fullName =  `${data?.first_name ?? ''} ${data?.middle_name ?? ''} ${data?.last_name ?? ''}`

  return (
    <div>
      {contextHolder}
      <div className='pb-4 border-b border-gray-200'>
        <div className='text-3xl font-bold mb-3'>Thông tin cá nhân</div>
        <p className='text-[#595959]'>Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng ra sao.</p>
      </div>

      <EditForm
        title={'Tên'}
        content={fullName}
        currentKey={fieldKeyEdited}
        loadingSave={mutation.isPending}
        target={'fullName'}
        onClickEdit={onClickEdit}
        onClickSave={onClickSave}
        formComponent={
          (form) => <Form layout='vertical' style={{display: 'flex', columnGap: '16px', width: '100%'}}>
            <Controller
              name={'last_name'}
              control={form.control}
              render={({field}) => (
                <Form.Item className='flex-1' label='Tên'>
                  <Input defaultValue={data?.last_name} {...field}/>
                </Form.Item>
              )}
            />
            <Controller
              name={'first_name'}
              control={form.control}
              render={({field}) => (
                <Form.Item className='flex-1' label='Họ'>
                  <Input defaultValue={data?.first_name} {...field}/>
                </Form.Item>
              )}
            />
          </Form>
        }
      />

      <EditForm
        title={'Tên hiển thị'}
        content={data?.display_name}
        currentKey={fieldKeyEdited}
        target={'displayName'}
        onClickEdit={onClickEdit}
        onClickSave={onClickSave}
        formComponent={
          (form) => <Form layout='vertical' style={{display: 'flex', columnGap: '16px', width: '100%'}}>
            <Controller
              name='display_name'
              control={form.control}
              render={({field}) => (
                <Form.Item className='flex-1' label='Tên hiển thị'>
                  <Input defaultValue={data?.display_name} {...field}/>
                </Form.Item>
              )}
            />
          </Form>
        }
      />

      <EditForm
        title={'Địa chỉ email'}
        content={
          <div className='text-[14px] pl-4 text-[#595959]'>
            <div className='mb-3'>{data?.email}</div>
            <p>Đây là địa chỉ email bạn dùng để đăng nhập. Chúng tôi cũng sẽ gửi các xác nhận đặt chỗ tới địa chỉ này.</p>
          </div>
        }
        currentKey={fieldKeyEdited}
        target={'email'}
        onClickEdit={onClickEdit}
        onClickSave={onClickSave}
        formComponent={
          (form) => <Form layout='vertical' style={{display: 'flex', columnGap: '16px', width: '100%'}}>
            <Controller
              name='email'
              control={form.control}
              render={({field}) => (
                <Form.Item className='flex-1' label='email'>
                  <Input defaultValue={data?.email} {...field}/>
                </Form.Item>
              )}
            />
          </Form>
        }
      />

      <EditForm
        title={'Số điện thoại'}
        content={
          <div className='text-[14px] pl-4 text-[#595959]'>
            <div className='mb-3'>{data?.phone_number || 'Thêm số điện thoại của bạn'}</div>
            <p>Chỗ nghỉ hoặc địa điểm tham quan bạn đặt sẽ liên lạc với bạn qua số này nếu cần.</p>
          </div>
        }
        currentKey={fieldKeyEdited}
        target={'phoneNumber'}
        onClickEdit={onClickEdit}
        onClickSave={onClickSave}
        formComponent={
          (form) => <Form layout='vertical' style={{display: 'flex', columnGap: '16px', width: '100%'}}>
            <Controller
              name='phone_number'
              control={form.control}
              render={({field}) => (
                <Form.Item className='flex-1' label='Số điện thoại di dộng'>
                  <Input defaultValue={data?.phone_number} {...field}/>
                </Form.Item>
              )}
            />
          </Form>
        }
      />

      <EditForm
        title={'Ngày sinh'}
        content={FormatHelper.datetime(data?.birthday) || 'Nhập ngày sinh của bạn'}
        currentKey={fieldKeyEdited}
        target={'birthday'}
        onClickEdit={onClickEdit}
        onClickSave={onClickSave}
        formComponent={
          (form) => <Form layout='vertical' style={{display: 'flex', columnGap: '16px', width: '100%'}}>
            <Controller
              name='birthday'
              control={form.control}
              render={({field}) => (
                <Form.Item className='flex-1' label='Ngày sinh'>
                  <Input defaultValue={data?.birthday} {...field}/>
                </Form.Item>
              )}
            />
          </Form>
        }
      />

      <EditForm
        title={'Quốc tịch'}
        content={data?.nation}
        currentKey={fieldKeyEdited}
        target={'nation'}
        onClickEdit={onClickEdit}
        onClickSave={onClickSave}
        formComponent={
          (form) => <Form layout='vertical' style={{display: 'flex', columnGap: '16px', width: '100%'}}>
            <Controller
              name='nation'
              control={form.control}
              render={({field}) => (
                <Form.Item className='flex-1' label='Chọn quốc gia'>
                  <Input defaultValue={data?.nation} {...field}/>
                </Form.Item>
              )}
            />
          </Form>
        }
      />

      <EditForm
        title={'Giới tính'}
        content={sex}
        currentKey={fieldKeyEdited}
        target={'sex'}
        onClickEdit={onClickEdit}
        onClickSave={onClickSave}
        formComponent={
          (form) => <Form layout='vertical' style={{display: 'flex', columnGap: '16px', width: '100%'}}>
            <Controller
              name='sex'
              control={form.control}
              render={({field}) => (
                <Form.Item className='flex-1' label='Chọn giới tính'>
                  <Input defaultValue={sex} {...field}/>
                </Form.Item>
              )}
            />
          </Form>
        }
      />

      <EditForm
        title={'Địa chỉ'}
        content={data?.address}
        currentKey={fieldKeyEdited}
        target={'address'}
        onClickEdit={onClickEdit}
        onClickSave={onClickSave}
        formComponent={
          (form) => <Form layout='vertical' style={{display: 'flex', columnGap: '16px', width: '100%'}}>
            <Controller
              name='address'
              control={form.control}
              render={({field}) => (
                <Form.Item className='flex-1' label='Nhập địa chỉ'>
                  <Input defaultValue={data?.address} {...field}/>
                </Form.Item>
              )}
            />
          </Form>
        }
      />

      <EditForm
        title={'Thông tin hộ chiếu'}
        content={data?.national_id}
        currentKey={fieldKeyEdited}
        target={'nationalID'}
        onClickEdit={onClickEdit}
        onClickSave={onClickSave}
        formComponent={
          (form) => <Form layout='vertical' style={{display: 'flex', columnGap: '16px', width: '100%'}}>
            <Controller
              name={'national_id'}
              control={form.control}
              render={({field}) => (
                <Form.Item className='flex-1' label='Nhập thông tin hộ chiếu'>
                  <Input defaultValue={data?.national_id} {...field}/>
                </Form.Item>
              )}
            />
          </Form>
        }
      />

    </div>
  );
};

export default PersonalSettingPage;