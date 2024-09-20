'use client';
import React, {useRef} from 'react';
import Link from "next/link";
import Image from "next/image";
import {FaRegBell} from "react-icons/fa6";
import NavBarHeader, {NavBarItemHeader} from "@/app/components/layouts/NavBarHeader";
import {Button, Divider} from "antd";
import SearchBar from "@/app/components/SearchBar";
import classNames from "classnames";
import {SignedIn, SignedOut, SignInButton, useAuth, UserButton, useUser} from "@clerk/nextjs";
import {IoExitOutline} from "react-icons/io5";
import useMaskClosable from "@/hooks/useMaskClosable";
import Dialog from "@/app/components/Dialog";
import UserAvatar from "@/app/components/UserAvatar";

const Header = (props: {isSearchTool?: boolean, isShowMenu?: boolean}) => {
  const {isSearchTool=true, isShowMenu=true} = props
  const {isSignedIn, user} = useUser()
  const avatarRef = useRef<HTMLDivElement>(null)
  const boxDropDownRef = useRef<HTMLDivElement>(null)
  const [open, setOpen, contentRef, triggerRef] = useMaskClosable()
  const {signOut} = useAuth()
  console.log('user', user)
  return (
    <div className={classNames('w-full bg-[#003b95] py-4', {'pb-12': isSearchTool})}>
      <div className='container mx-auto w-3/4'>
        <div className='relative'>
          <div className={classNames('px-4 flex items-center gap-4', {'mb-4': isSignedIn && isShowMenu})}>
            <Link className='flex-1' href='/home'>
              <Image src={'/logo/header-logo.svg'} alt={'logo'} width={150} height={44} />
            </Link>

            <div className='flex justify-center items-center gap-8'>
              <div className='font-bold text-white'>VND</div>
              <div>VN</div>
              <div><FaRegBell className='text-lg text-white' /></div>
              {/*<Authentication isAuthentication={isAuthentication} />*/}
              {!isSignedIn && (
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

              {isSignedIn && user && (
                <>
                  <Button style={{borderRadius: '4px', backgroundColor: 'transparent', border: '1px solid white', color: 'white'}} type='default'>Đăng chỗ nghỉ của Quý vị</Button>
                  <div className='relative cursor-pointer'>
                    <UserAvatar ref={triggerRef} name={<span className='text-white'>{user.fullName || user.emailAddresses[0].emailAddress}</span>} sub={<span className='text-orange-300'>Genius Cấp 2</span>} />
                    <Dialog open={open} ref={contentRef} className='flex w-[130%] flex-col p-0'>
                      <div className='p-2'>
                        <div className='flex items-center' onClick={() => signOut({redirectUrl: '/signin'})}><IoExitOutline className='mr-2 text-lg cursor-pointer'/>Quản lý tài khoản</div>
                      </div>
                      <hr />
                      <div className='p-2'>
                        <div className='flex items-center text-red-500 cursor-pointer' onClick={() => signOut({redirectUrl: '/signin'})}><IoExitOutline className='mr-2 text-lg cursor-pointer'/>Đăng xuất</div>
                      </div>
                    </Dialog>
                  </div>

                </>
              )}
            </div>
          </div>

          {isSignedIn && isShowMenu && <MenuBar />}

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

// const Authentication = (props: {isAuthentication: boolean}) => {
//   const {isAuthentication= false} = props
//
//   if(isAuthentication) {
//     return (
//       <>
//         <Button style={{borderRadius: '4px', backgroundColor: 'transparent', border: '1px solid white', color: 'white'}} type='default'>Đăng chỗ nghỉ của Quý vị</Button>
//         <div className='flex gap-1.5 justify-center items-center'>
//           <div className='rounded-full w-8 h-8 bg-orange-300 flex justify-center items-center text-sm'>T</div>
//           <div className='text-sm'>
//             <div className='text-white text-sm font-medium'>Tân Nguyễn</div>
//             <div className='text-orange-300 text-[12px]'>Genius Cấp 2</div>
//           </div>
//         </div>
//       </>
//     )
//   }
//   return(
//     <div className='flex gap-2'>
//       <Button style={{borderRadius: '4px', backgroundColor: 'transparent', border: '1px solid white', color: 'white'}} type='default'>
//         <Link href={'/signup'}>
//           Đăng ký
//         </Link>
//       </Button>
//       <Button style={{borderRadius: '4px', color: '#006ce4'}} type='default'>
//         <Link href={'/signin'}>
//           Đăng nhập
//         </Link>
//       </Button>
//     </div>
//   )
// }

const MenuBar = () => {
  return (
    <NavBarHeader>
      <NavBarItemHeader label={'Lưu trú'} onClick={() => {console.log('Lưu trú')}} />
      <NavBarItemHeader onClick={() => {console.log('Lưu trú')}}>Chuyến bay</NavBarItemHeader>
      <NavBarItemHeader label={'Lưu trú'} onClick={() => {console.log('Lưu trú')}} />
      <NavBarItemHeader label={'Lưu trú'} onClick={() => {console.log('Lưu trú')}} />
    </NavBarHeader>
  )
}

export default Header;