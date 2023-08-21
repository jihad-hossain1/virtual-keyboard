import React, { useState } from "react";
import Keyboard from "./Keyboard";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const [typedText, setTypedText] = useState("");
  const handleKeyClick = (key) => {
    setTypedText((prevText) => prevText + key);
  };
  const handleCopyClip = (e) => {
    navigator.clipboard.writeText(e);
    if (e) {
      toast.success("text copied");
    }
  };
  // const resetText = (e) => {
  //   const rest = e.target.value;
  //   e.reset();
  // };
  return (
    <div>
      <Toaster />
      <div className="mt-20 pb-10">
        <h4 className="text-center text-gray-600 text-4xl font-bold">
          keyboard virtual
        </h4>
      </div>
      <div>
        {/* <input type="text" value={typedText} readOnly /> */}
        <div className="px-4 my-3 p-4 text-center border border-emerald-200 rounded drop-shadow  max-w-4xl mx-auto ">
          <p className="lowercase">
            {typedText || <span className="">Type Your text</span>}
          </p>
        </div>
        <div className="text-center pb-6">
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

        <Keyboard handleKeyClick={handleKeyClick}></Keyboard>
      </div>
    </div>
  );
};

export default App;
