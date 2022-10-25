import React from "react";
import Illustration from "../assets/illustrations/finance.png";
import GoogleIcon from "../assets/images/googleicon.png";

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
      <div className="w-[50%] flex items-center justify-center font-quickSand">
        <div className="w-[60%] h-fit p-5 bg-white border rounded-lg">
          <h1 className="font-bold text-xl place-self-center">
            Welcome to Cloud cash
          </h1>
          <form action="">
            <div>
              <input type="email" placeholder="Enter email" />
            </div>
            <div>
              <input type="password" />
            </div>
            <div>
              <button>
                <img src={GoogleIcon} alt="google-icon" />
                <p>Sign in with Google</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
