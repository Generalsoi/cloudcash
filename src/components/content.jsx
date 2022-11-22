import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { UserAuth } from "../context/AuthContext";
import Creditcard from "../assets/images/creditcard.png";

export const Content = () => {
  const { user } = UserAuth();

  // console.log (user)

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

      <section className="p-6 flex items-start justify-between">
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
              <img src={Creditcard} alt="user-credit-card" />
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
          <div></div>
        </div>
        <div></div>
      </section>
    </div>
  );
};
