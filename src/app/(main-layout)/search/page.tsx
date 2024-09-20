'use client'
import React, {useEffect, useRef, useState} from 'react';
import Filter from "@/app/(main-layout)/search/components/Filter";
import SearchResultItem, {SearchResultItemType} from "@/app/(main-layout)/search/components/SearchResultItem";
import SearchResult from "@/app/(main-layout)/search/components/SearchResult";
import {Button, DatePicker, Input, Select, Switch} from "antd";
import SearchBar from "@/app/components/SearchBar";
import {useRouter} from "next/navigation";

const SearchProduct = () => {
  const router = useRouter()
  const onRedirectDetail: SearchResultItemType['onRedirectDetail'] = (data) => {
    router.push(`/product/${data.productID}`)
  }

  return (
    <div className='container mx-auto w-3/4 mt-12'>
      <div className='flex'>
        <div className='w-[24%] flex-auto flex-grow-0'>
          <Filter />
        </div>
        <div className='flex-1 pl-4'>
          <div className='-my-4'>
            <SearchResultItem onRedirectDetail={onRedirectDetail} product={{productID: 1}} />
            <SearchResultItem onRedirectDetail={onRedirectDetail} product={{productID: 2}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;