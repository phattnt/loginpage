"use client";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Login() {
  const [inputType, setInputType] = useState("password");
  const setShowHide = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInputType(inputType === "password" ? "text" : "password");
  };
  const [isActive, setIsActive] = useState(false);
  const activeAnimaiton = () => {
    setIsActive(!isActive);
  };
  const [showpopup, setPopup] = useState(false);
  const activePopup = () => {
    setPopup(!showpopup);
  };
  return (
    <div className="h-screen w-screen fixed ">
      <div className="h-full flex items-center justify-center relative">
        <div
          className={`absolute w-screen h-screen z-50 opacity-0 transition-all duration-300 ease-in-out ${
            showpopup ? "flex bg-black bg-opacity-25 opacity-100 " : "-z-30"
          }`}
        >
          <div className="flex-col justify-center items-center h-full w-full relative flex ">
            <button
              className="items-start justify-end flex w-full max-w-96 absolute h-full max-h-56 p-4"
              type="button"
              onClick={activePopup}
            >
              <XMarkIcon className="h-5 w-5 dark:text-white" />
            </button>
            <div className="flex flex-col w-full max-w-96 bg-white dark:bg-[#31363F] h-full max-h-56 px-[3rem] rounded-lg justify-center items-center">
              <p className="dark:text-white">
                Enter your email to get new password
              </p>
              <div className="relative z-0 w-full mt-4 ">
                <input
                  type="email"
                  className="w-full flex py-2.5 text-base text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 peer focus:border-blue-600 dark:text-white"
                  placeholder=" "
                />
                <label className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Your Email
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center h-1/2 -mt-28 w-full">
          <div className="relative md:w-[48rem] h-full w-96 mx-4 bg-white dark:bg-[#31363F] rounded-3xl overflow-hidden ">
            <div
              className={`p-8 w-full max-w-96 bg-white dark:bg-[#31363F] h-full absolute z-20 
              ${
                isActive
                  ? "transition-all duration-700 ease-in-out md:translate-x-full"
                  : "transition-all duration-700 ease-in-out"
              }`}
            >
              <form
                action=""
                className="w-full flex flex-col justify-center items-center"
              >
                <span className="text-center text-3xl uppercase dark:text-white">
                  Sign in
                </span>
                <div className="relative z-0 w-full mt-4">
                  <input
                    type="text"
                    className="dark:text-white w-full flex py-2.5 text-base text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 peer focus:border-blue-600 "
                    placeholder=" "
                  />
                  <label className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Email
                  </label>
                </div>
                <div className="w-full h-fit relative">
                  <div className="relative">
                    <div className="relative z-0 w-full mt-4">
                      <input
                        type={inputType}
                        className="dark:text-white w-full flex py-2.5 text-base text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 peer focus:border-blue-600 "
                        placeholder=" "
                      />
                      <label className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Password
                      </label>
                    </div>
                    <button
                      onClick={setShowHide}
                      className="absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                      {inputType === "text" ? (
                        <EyeSlashIcon className="h-5 w-5 dark:text-white" />
                      ) : (
                        <EyeIcon className="h-5 w-5 dark:text-white" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="mt-8 flex flex-col">
                  <button
                    className="text-blue-500 pt-4"
                    type="button"
                    onClick={activePopup}
                  >
                    Forget your password?
                  </button>
                  <button
                    className="text-blue-500 pt-4"
                    onClick={activeAnimaiton}
                    type="button"
                  >
                    Don&apos;t have a account?
                  </button>
                </div>
                <button className="py-2 bg-[#556c83] mt-8 uppercase text-white hover:bg-[#273344] px-16 transition-all duration-500 ">
                  Submit
                </button>
              </form>
            </div>
            <div
              className={`p-8 w-full max-w-96 bg-white dark:bg-[#31363F] h-full absolute z-10 opacity-0 ${
                isActive
                  ? "transition-all duration-500 ease-in-out md:translate-x-full opacity-100 z-30"
                  : "transition-all duration-500 ease-in-out "
              }`}
            >
              <form
                action=""
                className="w-full flex-col justify-center items-center flex"
              >
                <span className="text-center text-3xl mb-4 dark:text-white">
                  Let&apos;s get started!
                </span>
                <div className="relative z-0 w-full mt-4">
                  <input
                    type="text"
                    className="dark:text-white w-full flex py-2.5 text-base text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 peer focus:border-blue-600 "
                    placeholder=" "
                  />
                  <label className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Email
                  </label>
                </div>
                <div className="w-full h-fit relative">
                  <div className="relative">
                    <div className="relative z-0 w-full mt-4">
                      <input
                        type={inputType}
                        className="dark:text-white w-full flex py-2.5 text-base text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 peer focus:border-blue-600 "
                        placeholder=" "
                      />
                      <label className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Password
                      </label>
                    </div>
                    <button
                      onClick={setShowHide}
                      className="absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                      {inputType === "text" ? (
                        <EyeSlashIcon className="h-5 w-5 dark:text-white" />
                      ) : (
                        <EyeIcon className="h-5 w-5 dark:text-white" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="w-full h-fit relative">
                  <div className="relative">
                    <div className="relative z-0 w-full mt-4">
                      <input
                        type={inputType}
                        className="dark:text-white w-full flex py-2.5 text-base text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 peer focus:border-blue-600 "
                        placeholder=" "
                      />
                      <label className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Confirmed
                      </label>
                    </div>
                    <button
                      onClick={setShowHide}
                      className="absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                      {inputType === "text" ? (
                        <EyeSlashIcon className="h-5 w-5 dark:text-white" />
                      ) : (
                        <EyeIcon className="h-5 w-5 dark:text-white" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="mt-8 text-blue-500"
                    onClick={activeAnimaiton}
                  >
                    Already have a account?
                  </button>
                </div>
                <button className="py-2 bg-[#556c83] mt-4 uppercase text-white hover:bg-[#273344] px-16 transition-all duration-500">
                  Create
                </button>
              </form>
            </div>
            <div
              className={`w-1/2 h-full absolute ml-full hidden md:block overflow-hidden z-30  ${
                isActive
                  ? "transition-all duration-700 ease-in-out translate-x-0 "
                  : "transition-all duration-700 ease-in-out translate-x-full"
              }`}
            >
              <div
                className={`w-[200%] h-full relative bg-gradient-to-tr from-[#FF2525] to-[#FFE53B] -translate-x-1/2 
              ${
                isActive
                  ? "translate-x-0 transition-all duration-700 ease-in-out"
                  : "transition-all duration-700 ease-in-out"
              }`}
              >
                <div
                  className={`flex w-1/2 h-full absolute flex-col items-center justify-center -translate-x-[20%] ${
                    isActive
                      ? "transition-all translate-x-[0%] duration-700 ease-in-out"
                      : "transition-all duration-700 ease-in-out"
                  }`}
                >
                  <h1 className="text-white text-4xl font-bold">Hello man!!</h1>
                  <p className="mt-4 text-white">
                    Will you join us to build a new empire?
                  </p>
                </div>
                <div
                  className={`flex w-1/2 h-full absolute flex-col items-center justify-center  ${
                    isActive
                      ? "transition-all translate-x-[120%] duration-700 ease-in-out"
                      : "transition-all duration-700 ease-in-out translate-x-full"
                  }`}
                >
                  <h1 className="text-white text-4xl font-bold">
                    Welcomeback !
                  </h1>
                  <p className="mt-4 text-white">
                    Your maiden is waiting for you in castle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
