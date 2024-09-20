import React from 'react';
import Header from "@/app/components/layouts/Header";
import Footer from "@/app/components/layouts/Footer";

const SearchLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      {children}
    </>
  );
};

export default SearchLayout;