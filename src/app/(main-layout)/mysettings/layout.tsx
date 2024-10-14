import React from 'react';
import Header from "@/app/components/layouts/Header";
import Footer from "@/app/components/layouts/Footer";

const MySettingLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Header isSearchTool={false} isShowMenu={true} />
      <div className='container w-3/4 mx-auto relative my-10'>
        {children}
      </div>
      <Footer />
    </>  );
};

export default MySettingLayout;