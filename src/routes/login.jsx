import React, { useState } from "react";
import Illustration from "../assets/illustrations/finance.png";
import GoogleIcon from "../assets/images/googleicon.png";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-[50%]">
        <img
          src={Illustration}
          alt="illustration-vector"
          className="w-full h-screen"
        />
      </div>
      <div className="w-[50%] flex items-center justify-center font-quickSand">
        <div className="w-[50%] h-fit p-5 bg-white border rounded-lg">
          <h1 className="font-bold text-xl text-center">
            Welcome to Cloud cash
          </h1>
          <form action="">
            <div className="w-full h-12 my-4">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full h-10 p-3 border shadow-sm border-slate-400 rounded-lg text-sm focus:outline-none focus: border-slate-800"
              />
            </div>
            <div className="w-full h-10 my-4 p-3 flex justify-between border shadow-sm border-slate-400 rounded-lg text-sm focus:outline-none focus: border-slate-800">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full outline-none"
              />
              {showPassword ? (
                <BsFillEyeSlashFill
                  className="place-self-center"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <BsFillEyeFill
                  className="place-self-center"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            <div className="w-full h-12 my-4">
              <button className="w-full h-10 flex items-center justify-center text-sm bg-[#2C73EB] text-white font-bold border rounded-lg shadow-sm">
                Sign up
              </button>
            </div>
            <div className="w-full h-12 my-4">
              <button className="w-full h-10 flex items-center justify-center gap-4 text-sm font-bold bg-[#3977e3] text-white border rounded-lg shadow-sm">
                <img src={GoogleIcon} alt="google-icon" className="w-6 h-6" />
                <p>Sign in with Google</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
