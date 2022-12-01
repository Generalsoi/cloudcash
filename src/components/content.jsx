import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

import { UserAuth } from "../context/AuthContext";

import { CardsAndTransHist } from "./cardsAndTransHist";
import { GoalsAndOutcome } from "./goalsAndOutcome";

export const Content = () => {
  const { user } = UserAuth();

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
        <CardsAndTransHist />

        <GoalsAndOutcome />
      </section>
    </div>
  );
};
