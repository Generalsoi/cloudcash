import React from "react";
import Holiday from "../assets/images/holidays.png";
import Innovation from "../assets/images/innovation.png";
import Xbox from "../assets/images/xbox.png";

export const Goals = () => {
  return (
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
  );
};
