import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";

export const Content = () => {
  const { user } = UserAuth();

  // console.log (user)

  return (
    <div className="font-quickSand">
      <div className="p-6 flex items-center justify-between ">
        <div>
          <h1 className="text-5xl font-extrabold text-[#404040]">
            Weekly sumup
          </h1>
          <p>Get summary of your weekly online transactions here.</p>
        </div>

        <div>
          <AiOutlineMail />
          {user.email}
        </div>
      </div>
    </div>
  );
};
