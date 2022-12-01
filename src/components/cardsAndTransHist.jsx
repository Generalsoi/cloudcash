import React from "react";
import { transactionHist } from "../helpers/transactionHist";
import Creditcard from "../assets/images/creditcard.png";

export const CardsAndTransHist = () => {
  const transactionHeadings = Object.keys(transactionHist[0]);
  transactionHeadings.splice(-1, 1);

  return (
    <div className="w-full md:w-[48%]">
      <div
        className="w-full h-fit p-6 bg-white border rounded-2xl "
        style={{
          boxShadow:
            "0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
        }}
      >
        <h3 className="font-quickSand text-lg font-bold text-[#404040]">
          Cards
        </h3>
        <div className="flex items-center justify-between font-quickSand">
          <img src={Creditcard} alt="user-credit-card" className="w-[60%]" />
          <div className="text-end">
            <span className="flex flex-col mb-4">
              <h2 className="text-3xl text-[#197BBD] font-bold">$2850.34</h2>
              <p className="text-xs text-[#AEAEAE]">Current balance</p>
            </span>
            <span className="flex flex-col mb-4">
              <h4 className="text-xl text-[#439A86] font-bold">$1600.00</h4>
              <p className="text-xs text-[#AEAEAE]">Income</p>
            </span>
            <span className="flex flex-col">
              <h5 className="text-lg text-[#BB4430] font-bold">$1250.34</h5>
              <p className="text-xs text-[#AEAEAE]">Outcome</p>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="w-[60%] flex items-center text-sm justify-between">
            <p className="text-[#AEAEAE]">Weekly payment limit</p>
            <span className="text-[#404040] font-bold">$350/$4000</span>
          </span>
          <span className="text-[#AEAEAE]">Deactivate card</span>
        </div>
      </div>

      <div
        className="w-full h-fit mt-6 p-6 bg-white border rounded-2xl  "
        style={{
          boxShadow:
            "0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
        }}
      >
        <h2 className="text-[#404040] text-xl font-bold mb-4 font-quickSand">
          Transaction history
        </h2>

        <div className="overflow-x-scroll">
          <table className="table-auto md:w-full ">
            <thead>
              <tr>
                {transactionHeadings.map((title) => (
                  <th className="py-2 px-4 text-left text-gray-500">{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transactionHist.map((transaction) => (
                <tr className="border border-b-gray-400 border-collapse border-t-0 border-l-0 border-r-0">
                  <td className="px-4 py-1 flex gap-2 items-center text-sm font-bold">
                    {transaction.icon}
                    {transaction.Receiver}
                  </td>
                  <td className="px-4 py-1 text-sm text-[#C7C7C7]">
                    {transaction.Type}
                  </td>
                  <td className="px-4 py-1 text-sm text-[#C7C7C7]">
                    {transaction.Date}
                  </td>
                  <td className="px-4 py-1 text-right text-sm font-bold">
                    {transaction.Amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
