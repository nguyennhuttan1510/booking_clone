import React from 'react';
import {Button} from "antd";
import {EditButtonProps} from "@/app/(main-layout)/mysettings/(setting-layout)/personal/components/interfaces";

const EditButton = (props: EditButtonProps) => {
  const {target, currentKey, onClickEdit} = props

  const isActive = currentKey === target
  const disabled = currentKey === 'none' ? false : !isActive

  return (
    <Button disabled={disabled} onClick={() => {onClickEdit(target)}} color="primary" variant="text" style={{marginLeft: 16}}>{isActive ? 'Hủy' : 'Chỉnh sửa'}</Button>
  )
};

export default EditButton;