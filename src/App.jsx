import React, { useState } from "react";
import Keyboard from "./Keyboard";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import KeyboardBeta from "./KeyboardBeta";

const App = () => {
  const [typedText, setTypedText] = useState("");
  const [typedNumber, settypedNumber] = useState("");
  const handleKeyClick = (key) => {
    setTypedText((prevText) => prevText + key);
  };
  const handleNumberClick = (index, num) => {
    settypedNumber((prevNumber) => prevNumber + index + num);
  };
  const handleCopyClip = (e) => {
    navigator.clipboard.writeText(e);
    if (e) {
      toast.success("text copied");
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      reset();
    }
  };
  return (
    <div>
      <Toaster />
      <div className="mt-20 pb-10">
        <h4 className="text-center text-gray-600 text-4xl font-bold">
          keyboard virtual
        </h4>
      </div>
      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="px-10 max-w-[800px] mx-auto">
            <input
              type="text"
              placeholder="Type & Copy"
              value={typedText}
              className="px-4 my-3 p-4 text-center border border-emerald-200 rounded drop-shadow w-full focus:outline-emerald-200  "
              readOnly
            />
          </div>
          <div className="text-center pb-2">
            <button
              className="border border-emerald-500 text-white py-0 bg-emerald-500 hover:bg-emerald-400 rounded shadow-sm hover:shadow-emerald-400 px-1 m-1 drop-shadow text-sm"
              // onClick={() => {
              //   navigator.clipboard.writeText(typedText);
              // }}
              onClick={() => handleCopyClip(typedText)}
            >
              Copy
            </button>
          </div>
          <div className="px-10 max-w-[800px] mx-auto">
            <input
              type="number"
              placeholder="Number formate"
              value={typedNumber}
              className="px-4 my-3 p-4 text-center border border-emerald-200 rounded drop-shadow w-full focus:outline-emerald-200  "
              readOnly
            />
          </div>
          <div className="text-center pb-2">
            <button
              className="border border-emerald-500 text-white py-0 bg-emerald-500 hover:bg-emerald-400 rounded shadow-sm hover:shadow-emerald-400 px-1 m-1 drop-shadow text-sm"
              // onClick={() => {
              //   navigator.clipboard.writeText(typedText);
              // }}
              onClick={() => handleCopyClip(typedNumber)}
            >
              Copy
            </button>
          </div>
        </form>

        {/* <Keyboard
          handleKeyClick={handleKeyClick}
          handleNumberClick={handleNumberClick}
        ></Keyboard> */}
        <div className="max-w-[800px] mx-auto my-12">
          <KeyboardBeta
            handleKeyClick={handleKeyClick}
            handleNumberClick={handleNumberClick}
          ></KeyboardBeta>
        </div>
      </div>
    </div>
  );
};

export default App;
