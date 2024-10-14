import {ProfileType} from "@/lib/http/apis/users.d";
import React, {BaseSyntheticEvent} from "react";
import {FieldValues, SubmitHandler, UseFormReturn} from "react-hook-form";
import {ButtonProps} from "antd";

export type KeyField = 'fullName' | 'displayName' | 'email' | 'phoneNumber' | 'birthday' | 'nation' | 'sex' | 'address' | 'nationalID' | 'none'
export type OnClickEdit = (key: KeyField) => void
export type OnClickSave = (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>

export type EditButtonProps = {
  currentKey: KeyField
  target: KeyField
  onClickEdit: OnClickEdit
}

export type SaveButtonProps = Omit<EditButtonProps, 'onClickEdit'> & ButtonProps & {
  onClickSave: OnClickSave
}

export type EditFormProps = EditButtonProps & {
  title: string | React.ReactNode
  content: string | React.ReactNode
  loadingSave?: boolean
  formComponent: (form: UseFormReturn<Partial<ProfileType>>) => any
  onClickSave: SubmitHandler<Partial<ProfileType>>

}