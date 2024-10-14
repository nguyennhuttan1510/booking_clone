import React from 'react';
import Header from "@/app/components/layouts/Header";
import Footer from "@/app/components/layouts/Footer";

const MyTripLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Header isSearchTool={false} isShowMenu={false} />
      <div className='container w-3/4 mx-auto relative'>
        {children}
      </div>
      <Footer />
    </>  );
};

export default MyTripLayout;