import React from 'react';
import Header from "@/app/components/layouts/Header";
import Footer from "@/app/components/layouts/Footer";
import BannerHeader from "@/app/components/layouts/BannerHeader";
import SearchBar from "@/app/components/SearchBar";

const HomeLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Header isSearchTool={false} isShowMenu={true} />
      <BannerHeader />
      <div className='container w-3/4 mx-auto relative -mt-10'>
        <SearchBar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;