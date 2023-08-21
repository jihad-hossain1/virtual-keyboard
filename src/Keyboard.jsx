import React from "react";

const Keyboard = ({ handleKeyClick }) => {
  const lettersWithNumbers = [
    { l: "a", n: 1 },
    { l: "b", n: 2 },
    { l: "c", n: 3 },
  ];
  const lett = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const handleKeyClic = (l) => {
    handleKeyClick(l);
  };

  return (
    <div className="max-w-[800px] px-4 mx-auto">
      {/* {lettersWithNumbers.map(({ l, n }) => {
        <button
          className="border border-neutral-400 rounded shadow-sm hover:shadow 
        "
          key={n}
          onClick={() => handleKeyClic(l)}
        >
          {l} ({n})
        </button>;
      })} */}
      <div>
        {lett.split("").map((key, index) => (
          <button
            className="border border-emerald-400 rounded shadow-sm hover:shadow-emerald-400 py-1 px-2 md:p-4 m-1 drop-shadow"
            key={key}
            onClick={() => handleKeyClic(key)}
          >
            {key} <span className="text-sm">{index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
