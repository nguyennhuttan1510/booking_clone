import React from 'react';
import {Form, Input} from "antd";
import EditButton from "@/app/(main-layout)/mysettings/(setting-layout)/personal/components/EditButton";
import {EditFormProps} from "@/app/(main-layout)/mysettings/(setting-layout)/personal/components/interfaces";
import SaveButton from "@/app/(main-layout)/mysettings/(setting-layout)/personal/components/SaveButton";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {ProfileType} from "@/lib/http/apis/users.d";

function EditForm(props: EditFormProps) {
  const {target, title, content = '__', loadingSave,  currentKey, onClickEdit, onClickSave, formComponent} = props

  const form = useForm<Partial<ProfileType>>()
  const onSubmit: SubmitHandler<Partial<ProfileType>> = (data) => {
    onClickSave(data)
  }

  const contentField = typeof content === 'string' ? (
    <div className='text-[14px] pl-4 text-[#595959]'>{content}</div>
  ) : content

  return (

    <div className='border-b border-gray-200'>
      <div className='flex flex-row-reverse p-4'>
        <div className='text-sm text-blue-500 font-medium flex flex-col justify-between min-w-[100px]'>
          <div className='flex flex-col justify-between items-end gap-y-2 h-full'>
            <EditButton currentKey={currentKey} target={target} onClickEdit={onClickEdit} />
            <SaveButton loading={loadingSave} disabled={loadingSave} currentKey={currentKey} target={target} onClickSave={form.handleSubmit(onSubmit)} />
          </div>
        </div>
        <div className='flex-1 flex'>
          <div className='min-w-[150px]'>{title}</div>
          {currentKey === target ? (
            <div className='flex flex-col w-full'>
              {formComponent(form)}
              <div className='h-[68px]'></div>
            </div>
          ) : contentField}
        </div>
      </div>
    </div>
  );
};

export default EditForm;