import React from "react";

import { Sidebar } from "./../components/sidebar";
import { Content } from "./../components/content";

export const Dashboard = () => {
  return (
    <div className="w-full h-screen flex items-start ">
      <div className="w-1/6 min-h-screen border border-r-[#595656] border-t-0 border-l-0 border-b-0">
        <Sidebar />
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
};
