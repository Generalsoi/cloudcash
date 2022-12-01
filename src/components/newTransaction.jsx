import React from "react";
import { newTransactionList } from "../helpers/newTransactionList";
import GreatLoan from "../assets/images/greatloan.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const NewTransaction = () => {
  return (
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

          <button className="w-[50%] h-10 text-xs lg:text-sm border border-none rounded-lg flex items-center justify-center font-bold gap-1 bg-[#FFC145]">
            Send the transfer
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
      <img src={GreatLoan} alt="greatloan" />
    </div>
  );
};
