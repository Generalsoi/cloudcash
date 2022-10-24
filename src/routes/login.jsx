import React from "react";
import Illustration from "../assets/illustrations/finance.png";

export const Login = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-[50%]">
        <img
          src={Illustration}
          alt="illustration-vector"
          className="w-full h-screen"
        />
      </div>
      <div className="w-[50%] flex items-center justify-center">
        <div>
          <form action="">
            <div>
              <input type="email" placeholder="Enter email" />
            </div>
            <div>
              <input type="password" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
