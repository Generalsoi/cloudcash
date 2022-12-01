import React from "react";
import { AiOutlineMail, AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonCircle, BsTruck, BsPerson } from "react-icons/bs";
import { BiRestaurant } from "react-icons/bi";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import Creditcard from "../assets/images/creditcard.png";
import Holiday from "../assets/images/holidays.png";
import Innovation from "../assets/images/innovation.png";
import Xbox from "../assets/images/xbox.png";
import Ann from "../assets/images/ann.png";
import Monica from "../assets/images/monica.png";
import John from "../assets/images/john.png";
import Mike from "../assets/images/mike.png";
import Mia from "../assets/images/mia.png";
import Greatloan from "../assets/images/greatloan.png";

export const Content = () => {
  const { user } = UserAuth();

  const transactionHist = [
    {
      Receiver: "Tesco Market",
      Type: "Shopping",
      Date: "03 Dec 2020",
      Amount: "$75.62",
      icon: <AiOutlineShoppingCart />,
    },
    {
      Receiver: "ElectroMen Market",
      Type: "Shopping",
      Date: "14 Dec 2020",
      Amount: "$250.00",
      icon: <BsTruck />,
    },
    {
      Receiver: "Fiorgio Restaurant",
      Type: "Food",
      Date: "07 Dec 2020",
      Amount: "$18.42",
      icon: <BiRestaurant />,
    },
    {
      Receiver: "John Matthew Kane",
      Type: "Sport",
      Date: "06 Dec 2020",
      Amount: "$352",
      icon: <BsPerson />,
    },
    {
      Receiver: "Ann Malin",
      Type: "Shopping",
      Date: "25 Nov 2020",
      Amount: "$425",
      icon: <BsPerson />,
    },
  ];

  const newTransactionList = [
    {
      img: <img src={Ann} alt="ann" />,
      name: "Ann",
    },
    {
      img: <img src={Monica} alt="monica" />,
      name: "Monica",
    },
    {
      img: <img src={John} alt="john" />,
      name: "John",
    },
    {
      img: <img src={Mike} alt="mike" />,
      name: "Mike",
    },
    {
      img: <img src={Mia} alt="mia" />,
      name: "Mia",
    },
  ];

  const transactionHeadings = Object.keys(transactionHist[0]);
  transactionHeadings.splice(-1, 1);

  return (
    <div className="font-quickSand">
      <nav className="p-6 flex items-center justify-between ">
        <div>
          <h1 className="text-5xl font-extrabold text-[#404040]">
            Weekly sumup
          </h1>
          <p className="text-[#AEAEAE]">
            Get summary of your weekly online transactions here.
          </p>
        </div>

        <div className="flex items-center gap-x-3">
          <BsPersonCircle className="h-8 w-8 text-[#197BBD]" />
          <AiOutlineMail />
          <span className="text-[#AEAEAE]">{user.email}</span>
        </div>
      </nav>

      <section className="p-6 flex flex-col md:flex-row items-start justify-between gap-4 md:gap-0 ">
        <div className="md:w-[48%]">
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
              <img
                src={Creditcard}
                alt="user-credit-card"
                className="w-[60%]"
              />
              <div className="text-end">
                <span className="flex flex-col mb-4">
                  <h2 className="text-3xl text-[#197BBD] font-bold">
                    $2850.34
                  </h2>
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
            className="w-full h-fit mt-6 p-6 bg-white border rounded-2xl "
            style={{
              boxShadow:
                "0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
            }}
          >
            <h2 className="text-[#404040] text-xl font-bold mb-4 font-quickSand">
              Transaction history
            </h2>

            <table className="table-auto w-full">
              <thead>
                <tr>
                  {transactionHeadings.map((title) => (
                    <th className="py-2 px-4 text-left text-gray-500">
                      {title}
                    </th>
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
      </section>
    </div>
  );
};
