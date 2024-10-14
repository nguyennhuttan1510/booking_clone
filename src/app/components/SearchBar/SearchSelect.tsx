import React from 'react';
import {Select} from "antd";
import {SelectProps} from "antd/es/select";
import './SearchSelect.scss'

export type SearchSelect = {
  prefix?: React.ReactNode
} & SelectProps

const SearchSelect = (props: SearchSelect) => {
  const {
    style={width: '100%', height: '100%'}
  } = props
  return (
    <div id='search-select' className='relative w-full h-full'>
      {props.prefix && (
        <div className='absolute z-10 top-1/2 left-3 -translate-y-1/2'>
          {props.prefix}
        </div>
      )}
      <Select
        showSearch
        value={props.value}
        style={style}
        defaultActiveFirstOption={false}
        suffixIcon={null}
        filterOption={false}
        notFoundContent={null}
        {...props}
      />
    </div>
  );
};

export default SearchSelect;