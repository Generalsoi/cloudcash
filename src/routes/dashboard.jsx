import React, { useState } from "react";
import { Sidebar } from "./../components/sidebar";
import { Content } from "./../components/content";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export const Dashboard = () => {
  const [loader, setLoader] = useState(true);
  const [open, setOpen] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 4000);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className="w-full h-screen flex items-start "
      style={{
        background:
          "linear-gradient(121.32deg, #FFFFFF 10.96%, #FFFFFF 72%, #FFFFFF 99.98%)",
      }}
    >
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-200 min-h-screen border border-r-[#595656] border-t-0 border-l-0 border-b-0 relative`}
      >
        <Sidebar open={open} />
        <div className="absolute -right-3 top-4 cursor-pointer">
          {open ? (
            <BsFillArrowLeftCircleFill
              onClick={handleOpen}
              className="w-7 h-7 rounded-lg border"
            />
          ) : (
            <BsFillArrowRightCircleFill
              onClick={handleOpen}
              className="w-7 h-7 rounded-lg border"
            />
          )}
        </div>
      </div>
      <div className={`w-full`}>
        <Content />
      </div>
    </div>
  );
};
