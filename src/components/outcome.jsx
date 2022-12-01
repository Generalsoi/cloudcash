import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { GiCommercialAirplane } from "react-icons/gi";

export const Outcome = () => {
  return (
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
  );
};
