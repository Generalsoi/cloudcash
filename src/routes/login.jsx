import React, { useState } from "react";
import Illustration from "../assets/illustrations/finance.png";
import GoogleIcon from "../assets/images/googleicon.png";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { UserAuth } from "../context/AuthContext";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { loginUser } = UserAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await loginUser(email, password);
      console.log("login successful");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center">
      <div className="w-full md:w-[40%] h-[80%] md:h-screen flex items-center justify-center font-quickSand relative">
        <div className="absolute top-5 left-5 flex items-end gap-1">
          <img src={Logo} alt="cloudcashlogo" />
          <h1 className="text-[#0F4264] font-extrabold">cloudcash</h1>
        </div>
        <div className="w-[80%] md:w-[60%] h-fit p-5 bg-white ">
          <h1 className="font-bold text-2xl my-8">Welcome back!</h1>
          <div className="w-full h-12 my-4">
            <button className="w-full h-10 flex items-center justify-center gap-4 text-sm font-bold  bg-white border border-[#3977e3] rounded-lg shadow-sm">
              <img src={GoogleIcon} alt="google-icon" className="w-6 h-6" />
              <p className="text-[#3977e3]">Log in with Google</p>
            </button>
          </div>
          <div className="my-8 flex items-center gap-1 justify-center w-full">
            <hr className="border-1 border-[#3977e3] w-[30%]" />
            <p>or</p>
            <hr className="border-1 border-[#3977e3] w-[30%]" />
          </div>
          <form onSubmit={handleLogin}>
            <div className="w-full h-12 my-4">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full h-10 p-3 border border-x-0 border-t-0 shadow-sm border-[#3977e3] text-sm focus:outline-none focus:border-[#3977e3]"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full h-10 my-5 p-3 flex justify-between border border-x-0 border-t-0 shadow-sm border-[#3977e3]  text-sm focus:outline-none focus: border-[#3977e3]">
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
              <button
                type="submit"
                className="w-full h-10 flex items-center justify-center text-sm bg-[#2C73EB] text-white font-bold border rounded-lg shadow-sm"
              >
                Log in
              </button>
            </div>

            <div className="w-full h-12 flex items-center justify-center">
              <p className="text-sm">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#3977e3]">
                  Signup here!
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="h-[20%] md:h-[screen] md:w-[60%]">
        <img
          src={Illustration}
          alt="illustration-vector"
          className="w-full h-[20%] md:h-screen"
        />
      </div>
    </div>
  );
};
