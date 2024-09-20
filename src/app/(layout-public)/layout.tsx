import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {FaRegBell} from "react-icons/fa6";
import NavBarHeader, {NavBarItemHeader} from "@/app/components/layouts/NavBarHeader";
import Header from "@/app/components/layouts/Header";
import Footer from "@/app/components/layouts/Footer";

const LayoutMain = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
      <Header isSearchTool={false} />
      {children}
    </div>
  );
};

export default LayoutMain;