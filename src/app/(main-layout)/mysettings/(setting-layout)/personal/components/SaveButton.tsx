import React from 'react';
import {Button} from "antd";
import {SaveButtonProps} from "@/app/(main-layout)/mysettings/(setting-layout)/personal/components/interfaces";

const SaveButton = (props: SaveButtonProps) => {
  const {target, currentKey, onClickSave, ...rest} = props

  const isActive = currentKey === target

  return (
    <div>
      {isActive && <Button onClick={onClickSave} color="primary" variant='filled' style={{marginLeft: 16}} {...rest}>lưu</Button>}
    </div>
  );
};

export default SaveButton;