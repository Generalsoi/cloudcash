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
          <div className="w-full h-fit p-4 bg-white border rounded-2xl ">
            <h3>Cards</h3>
            <div className="flex items-center">
              <img src={Creditcard} alt="user-credit-card" />
              <div>
                <span>
                  <h2>$2850.34</h2>
                  <p>Current balance</p>
                </span>
                <span>
                  <h4>$1600.00</h4>
                  <p>Income</p>
                </span>
                <span>
                  <h5>$1250.34</h5>
                  <p>Outcome</p>
                </span>
              </div>

              <div>
                <span>
                  <p>Weekly payment limit</p>
                  <span>$350/$4000</span>
                </span>
                <span>Deactivate card</span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
      </section>
    </div>
  );
};
