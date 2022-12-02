import React, { useState } from "react";
import { Sidebar } from "./../components/sidebar";
import { Content } from "./../components/content";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";

export const Dashboard = () => {
  const [loader, setLoader] = useState(true);
  const [open, setOpen] = useState(true);
  const [show, setShow] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 4000);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div
      className="w-full h-screen flex items-start relative"
      style={{
        background:
          "linear-gradient(121.32deg, #FFFFFF 10.96%, #FFFFFF 72%, #FFFFFF 99.98%)",
      }}
    >
      <div
        className={`${open ? "lg:w-72" : "lg:w-20"} ${
          !show ? "w-0 " : "w-72 bg-[#197BBD] duration-200"
        } duration-200 min-h-screen lg:border lg:border-r-[#595656] lg:border-t-0 lg:border-l-0 lg:border-b-0 fixed`}
      >
        <Sidebar open={open} show={show} />
        <div className="hidden lg:block absolute -right-3 top-4 cursor-pointer ">
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
      <div
        className={`w-full ${
          open ? "lg:ml-72" : "lg:ml-20"
        } ml-0  duration-200`}
      >
        <Content />
      </div>

      {!show ? (
        <GiHamburgerMenu
          className="lg:hidden text-3xl absolute top-4 right-4 "
          onClick={handleShow}
        />
      ) : (
        <FaWindowClose
          className="lg:hidden text-3xl absolute top-4 right-4 "
          onClick={handleShow}
        />
      )}
    </div>
  );
};
