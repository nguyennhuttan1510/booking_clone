'use client';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {Button} from "antd";
import Dialog from "@/app/components/Dialog";
import UserAvatar from "@/app/components/UserAvatar";

import {FaRegBell} from "react-icons/fa6";
import {HiOutlineShoppingBag} from "react-icons/hi";
import {IoExitOutline, IoPerson} from "react-icons/io5";

import NavBarHeader, {NavBarItemHeader} from "@/app/components/layouts/NavBarHeader";
import SearchBar from "@/app/components/SearchBar";
import useMaskClosable from "@/hooks/useMaskClosable";
import useAuthentication from "@/hooks/useAuthentication";

import classNames from "classnames";

const Header = (props: {isSearchTool?: boolean, isShowMenu?: boolean}) => {
  const {isSearchTool=false, isShowMenu=false} = props
  const [open, setOpen, contentRef, triggerRef] = useMaskClosable()
  const {profile, isSignIn, onSignOut,} = useAuthentication()

  return (
    <div className={classNames('w-full bg-[#003b95] py-4', {'pb-12': isSearchTool})}>
      <div className='container mx-auto w-3/4'>
        <div className='relative'>
          <div className={classNames('px-4 flex items-center gap-4', {'mb-4': isSignIn && isShowMenu})}>
            <Link className='flex-1' href='/search'>
              <Image src={'/logo/header-logo.svg'} alt={'logo'} width={150} height={44} />
            </Link>

            <div className='flex justify-center items-center gap-8'>
              <div className='font-bold text-white'>VND</div>
              <div>VN</div>
              <div><FaRegBell className='text-lg text-white' /></div>
              {/*<Authentication isAuthentication={isAuthentication} />*/}
              {!isSignIn && (
                <div className='flex gap-2'>
                  <Button style={{borderRadius: '4px', backgroundColor: 'transparent', border: '1px solid white', color: 'white'}} type='default'>
                    <Link href={'/signup'}>
                      Đăng ký
                    </Link>
                  </Button>
                  <Button style={{borderRadius: '4px', color: '#006ce4'}} type='default'>
                    <Link href={'/signin'}>
                      Đăng nhập
                    </Link>
                  </Button>
                </div>
              )}

              {isSignIn && (
                <>
                  <Button style={{borderRadius: '4px', backgroundColor: 'transparent', border: '1px solid white', color: 'white'}} type='default'>Đăng chỗ nghỉ của Quý vị</Button>
                  <div className='relative cursor-pointer'>
                    <UserAvatar ref={triggerRef} name={<span className='text-white'>{profile?.email || profile?.display_name}</span>} sub={<span className='text-orange-300'>Genius Cấp 2</span>} />
                    <Dialog open={open} ref={contentRef} className='overflow-hidden flex w-[120%] flex-col p-0'>
                      <Link href='/mysettings'>
                        <div className='py-3 px-4 hover:bg-gray-100 text-[14px]'>
                          <div className='flex items-center'><IoPerson className='mr-2 text-lg cursor-pointer'/>Quản lý tài khoản</div>
                        </div>
                      </Link>
                      <Link href='/mytrip'>
                        <div className='py-3 px-4 hover:bg-gray-100 text-[14px]'>
                          <div className='flex items-center'><HiOutlineShoppingBag className='mr-2 text-lg cursor-pointer'/>Đặt chổ & Chuyến đi</div>
                        </div>
                      </Link>
                      <hr />
                      <div className='py-3 px-4 hover:bg-gray-100 text-[14px]'>
                        <div className='flex items-center text-red-500 cursor-pointer' onClick={() => onSignOut()}><IoExitOutline className='mr-2 text-lg cursor-pointer'/>Đăng xuất</div>
                      </div>
                    </Dialog>
                  </div>

                </>
              )}
            </div>
          </div>

          {isShowMenu && <MenuBar />}

          {isSearchTool && (
            <div className='absolute w-full z-10' style={{transform: 'translateY(10px)'}}>
              <SearchBar />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MenuBar = () => {
  return (
    <NavBarHeader>
      <Link href='/home'>
        <NavBarItemHeader className='font-bold' active={true} label={'Lưu trú'} />
      </Link>
      <NavBarItemHeader className='font-bold'>Chuyến bay</NavBarItemHeader>
    </NavBarHeader>
  )
}

export default Header;