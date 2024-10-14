import React from 'react';
import Header from "@/app/components/layouts/Header";
import Footer from "@/app/components/layouts/Footer";

const SearchLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Header isSearchTool={true} isShowMenu={true} />
      <div className='container w-3/4 mx-auto relative pt-14'>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default SearchLayout;