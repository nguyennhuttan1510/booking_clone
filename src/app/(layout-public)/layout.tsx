import React from 'react';
import Header from "@/app/components/layouts/Header";

const LayoutMain = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
      <Header isSearchTool={false} />
      {children}
    </div>
  );
};

export default LayoutMain;