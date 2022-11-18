import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { UserAuth } from "../context/AuthContext";
import { BsListUl } from "react-icons/bs";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { TfiMedall } from "react-icons/tfi";
import { AiTwotoneFileImage } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";

export const Sidebar = ({ open }) => {
  const { logOut } = UserAuth();
  const [active, setActive] = useState(false);

  const handleLogout = () => {
    logOut();
  };

  // array of the sidebar menus
  const sidebarMenus = [
    { title: "Overview", src: <BsGraphUp /> },
    { title: "Transactions", src: <BsListUl /> },
    { title: "Cards", src: <BsFillCreditCardFill /> },
    { title: "Invoices", src: <AiTwotoneFileImage /> },
    { title: "Goals", src: <TfiMedall /> },
    { title: "Settings", src: <FiSettings /> },
  ];

  return (
    <div className="h-screen p-5 flex flex-col ">
      <div className={`flex gap-2 items-end ${open ? "p-4" : "p-1"}`}>
        <img src={Logo} alt="cloudcashlogo" />
        <h1
          className={`${
            !open && "scale-0"
          } text-[#0F4264] font-extrabold duration-200`}
        >
          Cloudcash
        </h1>
      </div>

      <ul className="h-7/9 mt-8 px-4 font-quickSand">
        {sidebarMenus.map((menu, index) => (
          <li
            key={index}
            className={`flex gap-3 items-center mt-6 cursor-pointer hover:bg-[#F0F7FF] hover:py-2 hover:px-3 hover:text-[#197BBD] hover:font-extrabold border border-none rounded-lg duration-200 ${
              !open &&
              "justify-center h-fit w-fit hover:px-0 hover:py-0 gap-0 hover:bg-white"
            }`}
          >
            <span
              className={`${!open && "h-10 w-10 m-0 hover:font-extrabold"}`}
            >
              {menu.src}
            </span>
            <span className={`${!open && "hidden"} duration-200 `}>
              {menu.title}
            </span>
          </li>
        ))}
      </ul>

      <div className={` absolute p-4 ${!open && "p-0"} bottom-4`}>
        <button
          onClick={handleLogout}
          className={`${
            open ? "w-48" : "w-fit duration-200"
          } h-8 border border-none rounded-lg flex items-center p-4 gap-x-4 bg-[#FFC145]`}
        >
          <BiLogOutCircle />{" "}
          <span className={`${!open && "hidden"}`}>Logout</span>
        </button>
      </div>
    </div>
  );
};
