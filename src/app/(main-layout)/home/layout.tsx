import React from 'react';
import Header from "@/app/components/layouts/Header";
import Footer from "@/app/components/layouts/Footer";
import BannerHeader from "@/app/components/layouts/BannerHeader";

const HomeLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <BannerHeader />
      {children}
    </div>
  );
};

export default HomeLayout;