import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { UserAuth } from "../context/AuthContext";
import { BsListUl } from "react-icons/bs";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { TfiMedall } from "react-icons/tfi";
import { AiTwotoneFileImage } from "react-icons/ai";

export const Sidebar = ({ open }) => {
  const { logOut } = UserAuth();
  const [active, setActive] = useState(false);

  const handleLogout = () => {
    logOut();
  };

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className="h-screen p-6 flex flex-col ">
      <div className="h-1/9 flex gap-2 items-end p-4">
        <img src={Logo} alt="cloudcashlogo" />
        <h1 className="text-[#0F4264] font-extrabold">cloudcash</h1>
      </div>

      <ul className="h-7/9 mt-8 px-4 font-quickSand">
        <li
          className={`flex items-center h-8 my-2 gap-4 text-[#C7C7C7] text-lg cursor-pointer hover:text-[#197BBD] hover:bg-[#F0F7FF] border border-none rounded-lg p-5`}
          onClick={handleActive}
        >
          <BsGraphUp />
          Overview
        </li>
        <li
          className={`flex items-center h-8 my-2 gap-4 text-[#C7C7C7] text-lg cursor-pointer hover:text-[#197BBD] hover:bg-[#F0F7FF] border border-none rounded-lg p-5`}
        >
          <BsListUl /> Transactions
        </li>
        <li
          className={`flex items-center h-8 my-2 gap-4 text-[#C7C7C7] text-lg cursor-pointer hover:text-[#197BBD] hover:bg-[#F0F7FF] border border-none rounded-lg p-5`}
        >
          <BsFillCreditCardFill />
          Cards
        </li>
        <li
          className={`flex items-center h-8 my-2 gap-4 text-[#C7C7C7] text-lg cursor-pointer hover:text-[#197BBD] hover:bg-[#F0F7FF] border border-none rounded-lg p-5`}
        >
          <AiTwotoneFileImage />
          Invoices
        </li>
        <li
          className={`flex items-center h-8 my-2 gap-4 text-[#C7C7C7] text-lg cursor-pointer hover:text-[#197BBD] hover:bg-[#F0F7FF] border border-none rounded-lg p-5`}
        >
          <TfiMedall />
          Goals
        </li>
        <li
          className={`flex items-center h-8 my-2 gap-4 text-[#C7C7C7] text-lg cursor-pointer hover:text-[#197BBD] hover:bg-[#F0F7FF] border border-none rounded-lg p-5`}
        >
          <FiSettings />
          Settings
        </li>
      </ul>

      <div className="h-1/9 absolute bottom-4">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};
