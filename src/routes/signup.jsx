import React, { useState } from "react";
import Illustration from "../assets/illustrations/finance.png";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center ">
      <div className="h-[20%] md:h-[screen] md:w-[50%]">
        <img
          src={Illustration}
          alt="illustration-vector"
          className="w-full h-[20%] md:h-screen"
        />
      </div>
      <div className="w-full md:w-[50%] h-[80%] md:h-screen flex items-center justify-center font-quickSand ">
        <div className="w-[80%] md:w-[50%] h-fit p-5 bg-white border rounded-lg shadow-sm shadow-black">
          <h1 className="font-bold text-xl text-center my-8">
            Welcome to Cloud cash
          </h1>
          <form action="">
            <div className="w-full h-12 my-4">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full h-10 p-3 border shadow-sm border-slate-400 rounded-lg text-sm focus:outline-none focus: border-slate-800"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full h-10 my-5 p-3 flex justify-between border shadow-sm border-slate-400 rounded-lg text-sm focus:outline-none focus: border-slate-800">
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

            <div className="w-full h-12 flex items-center justify-center">
              <p className="text-sm">
                Already have an account?
                <Link to="/" className="text-[#3977e3]">
                  Login here!
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
