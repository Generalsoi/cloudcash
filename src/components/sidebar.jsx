import React from "react";
import Logo from "../assets/images/logo.png";
import { UserAuth } from "../context/AuthContext";
import { BsListUl } from "react-icons/bs";

export const Sidebar = () => {
  const { logOut } = UserAuth();

  const handleLogout = () => {
    logOut();
  };

  return (
    <div className="h-screen p-4 flex flex-col ">
      <div className="h-1/9 flex gap-2 items-end">
        <img src={Logo} alt="cloudcashlogo" />
        <h1 className="text-[#0F4264] font-extrabold">cloudcash</h1>
      </div>

      <ul className="h-7/9 mt-8">
        <li>Overview</li>
        <li>
          <BsListUl /> Transactions
        </li>
        <li>Cards</li>
        <li>Invoices</li>
        <li>Goals</li>
        <li>Settings</li>
      </ul>

      <div className="h-1/9 absolute bottom-4">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};
