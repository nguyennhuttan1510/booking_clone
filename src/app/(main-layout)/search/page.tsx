'use client'
import React from 'react';
import Filter from "@/app/(main-layout)/search/components/Filter";
import SearchResultItem, {SearchResultItemType} from "@/app/(main-layout)/search/components/SearchResultItem";
import {useRouter} from "next/navigation";

const SearchProduct = () => {
  const router = useRouter()

  const onRedirectDetail: SearchResultItemType['onRedirectDetail'] = (data) => {
    router.push(`/product/${data.productID}`)
  }

  return (
    <div>
      <div className='flex'>
        <div className='w-[24%] flex-auto flex-grow-0'>
          <Filter />
        </div>
        <div className='flex-1 pl-4'>
          <div className='-my-4'>
            <SearchResultItem onRedirectDetail={onRedirectDetail} product={{productID: 3}} />
            <SearchResultItem onRedirectDetail={onRedirectDetail} product={{productID: 4}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;