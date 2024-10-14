import React from 'react';
import {settings} from "@/app/(main-layout)/mysettings/constants";
import Link from "next/link";

const SettingLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <div className='flex'>
        <div className='w-1/4'>
          <div className='border border-gray-200 rounded-lg'>
            {settings.map((setting, key) => (
              <Link key={key} href={setting.redirect}>
                <div className='cursor-pointer flex items-center gap-x-2 p-4 border-b border-gray-200 last:border-b-none hover:bg-gray-50'>
                  <div className='bg-gray-100 rounded-full p-2'>{<setting.Icon className='text-2xl' />}</div>
                  <div className='text-[14px]'>{setting.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className='ml-4 flex-1'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SettingLayout;