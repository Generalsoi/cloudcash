import React from "react";
import { newTransactionList } from "../helpers/newTransactionList";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineMail, AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonCircle, BsTruck, BsPerson } from "react-icons/bs";
import Holiday from "../assets/images/holidays.png";
import Innovation from "../assets/images/innovation.png";
import Xbox from "../assets/images/xbox.png";
import Greatloan from "../assets/images/greatloan.png";

export const GoalsAndOutcome = () => {
  return (
    <div className="md:w-[48%]">
      <div>
        <h2 className="flex items-center gap-3 font-bold text-lg mb-5">
          Goals
          <span className="w-5 h-5 border border-none rounded-full flex items-center justify-center bg-[#FFC145]">
            +
          </span>
        </h2>
        <div className="flex items-center gap-5 ">
          <span
            className="h-44 w-[33%] p-4 border rounded-2xl bg-white flex flex-col justify-between"
            style={{
              boxShadow:
                "0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
            }}
          >
            <span>
              <p className="text-[#696969] font-bold text-xl">$590</p>
              <p className="text-[#696969] text-xs">12/20/20</p>
            </span>
            <span>
              <img src={Holiday} alt="" />
              <p>Holidays</p>
            </span>
          </span>
          <span
            className="h-44 w-[33%] p-4 border rounded-2xl bg-white flex flex-col justify-between"
            style={{
              boxShadow:
                "0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
            }}
          >
            <span>
              <p className="text-[#696969] font-bold text-xl">$300</p>
              <p className="text-[#696969] text-xs">12/20/20</p>
            </span>
            <span>
              <img src={Innovation} alt="" />
              <p>Renovation</p>
            </span>
          </span>
          <span
            className="h-44 w-[33%] p-4 border rounded-2xl bg-white flex flex-col justify-between"
            style={{
              boxShadow:
                "0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
            }}
          >
            <span>
              <p className="text-[#696969] font-bold text-xl">$1200</p>
              <p className="text-[#696969] text-xs">12/20/20</p>
            </span>
            <span>
              <img src={Xbox} alt="" />
              <p>x box</p>
            </span>
          </span>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="font-bold text-lg mb-5">Outcome Statistics</h2>

        <div className="flex items-start justify-between mb-5 w-full">
          <span className="h-8 w-8 border border-none rounded-lg bg-[#FFEADA] flex items-center justify-center">
            <AiOutlineShoppingCart className="text-[#F8964C]" />
          </span>
          <div className="w-[80%] flex flex-col justify-start gap-2">
            <span className="relative h-2 w-full border border-none rounded-lg bg-[#AEAEAE]">
              <span className="absolute left-0 top-0 h-2 w-[51%] bg-[#F8964C] border border-none rounded-lg"></span>
            </span>
            <p className="text-[#AEAEAE] text-xs">Shopping</p>
          </div>
          <p className="text-[#696969] font-bold text-xl">51%</p>
        </div>
        <div className="flex items-start justify-between mb-5 w-full">
          <span className="h-8 w-8 border border-none rounded-lg bg-[#DDF9E4] flex items-center justify-center">
            <BsTruck className="text-[#22A447]" />
          </span>
          <div className="w-[80%] flex flex-col justify-start gap-2">
            <span className="relative h-2 w-full border border-none rounded-lg bg-[#AEAEAE]">
              <span className="absolute left-0 top-0 h-2 w-[25%] bg-[#22A447] border border-none rounded-lg"></span>
            </span>
            <p className="text-[#AEAEAE] text-xs">Electronics</p>
          </div>
          <p className="text-[#696969] font-bold text-xl">25%</p>
        </div>
        <div className="flex items-start justify-between mb-5 w-full">
          <span className="h-8 w-8 border border-none rounded-lg bg-[#E4F0FF] flex items-center justify-center">
            <GiCommercialAirplane className="text-[#70A6E8]" />
          </span>
          <div className="w-[80%] flex flex-col justify-start gap-2">
            <span className="relative h-2 w-full border border-none rounded-lg bg-[#AEAEAE]">
              <span className="absolute left-0 top-0 h-2 w-[79%] bg-[#70A6E8] border border-none rounded-lg"></span>
            </span>
            <p className="text-[#AEAEAE] text-xs">Travel</p>
          </div>
          <p className="text-[#696969] font-bold text-xl">79%</p>
        </div>
      </div>
      <div className="mt-8 flex items-start">
        <div
          className="w-[70%] p-4 border border-none rounded-lg h-fit  "
          style={{
            boxShadow:
              "0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
          }}
        >
          <h2 className="font-bold text-xl mb-4">New transaction</h2>
          <div className="flex w-full items-center justify-between">
            {newTransactionList.map((transaction) => (
              <span className="flex flex-col gap-1 justify-center items-center hover:bg-gray-200 hover:rounded-lg hover:padding-3 cursor-pointer">
                {transaction.img}
                <p>{transaction.name}</p>
              </span>
            ))}

            <span className="flex flex-col items-center">
              <span className="w-5 h-5 font-extrabold border border-none rounded-full flex items-center justify-center bg-[#FFC145]">
                +
              </span>
              <p>Add New</p>
            </span>
          </div>
          <div className="flex items-center w-full h-fit py-3 gap-4">
            <div className="w-[50%]">
              <input type="text" className="h-10 w-full border rounded" />
            </div>

            <button className="w-[50%] h-10 text-sm border border-none rounded-lg flex items-center justify-center font-bold gap-1 bg-[#FFC145]">
              Send the transfer
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
        <img src={Greatloan} alt="greatloan" />
      </div>
    </div>
  );
};
