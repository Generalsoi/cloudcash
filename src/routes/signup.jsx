import React, { useState } from "react";
import Illustration from "../assets/illustrations/finance.png";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Logo from "../assets/images/logo.png";
import { SpinLoaderIcon } from "../assets/svgs/spinloader";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      await createUser(email, password);
      setIsLoading(false);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      setIsLoading(true);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center ">
      <div className="h-[20%] md:h-[screen] md:w-[60%]">
        <img
          src={Illustration}
          alt="illustration-vector"
          className="w-full h-[20%] md:h-screen"
        />
      </div>
      <div className="w-full md:w-[50%] h-[80%] md:h-screen flex items-center justify-center font-quickSand relative">
        <div className="absolute top-5 right-5 flex items-end gap-1">
          <img src={Logo} alt="cloudcashlogo" />
          <h1 className="text-[#0F4264] font-extrabold">cloudcash</h1>
        </div>
        <div className="w-[80%] md:w-[50%] h-fit p-5 bg-white ">
          <h1 className="font-bold text-2xl my-8">Welcome to Cloud cash</h1>
          <form onSubmit={handleSignUp}>
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
                onChange={(e) => setPassword(e.target.value)}
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
            {error && (
              <div className="w-full p-3">
                <p className="text-red-500 font-bold text-xs">{error}</p>
              </div>
            )}
            <div className="w-full h-12 my-4">
              <button
                type="submit"
                className="w-full h-10 flex items-center justify-center text-sm bg-[#2C73EB] text-white font-bold border rounded-lg shadow-sm"
              >
                {error ? !isLoading : isLoading && <SpinLoaderIcon />}
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
