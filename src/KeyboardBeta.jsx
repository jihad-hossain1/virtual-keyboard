import React from "react";
const letters = [
  {
    alph: "a",
    numeric: 1,
    str: ",",
  },
  {
    alph: "b",
    numeric: 2,
    str: ",",
  },
  {
    alph: "c",
    numeric: 3,
    str: ",",
  },
  {
    alph: "d",
    numeric: 4,
    str: ",",
  },
  {
    alph: "e",
    numeric: 5,
    str: ",",
  },
  {
    alph: "f",
    numeric: 6,
    str: ",",
  },
  {
    alph: "g",
    numeric: 7,
    str: ",",
  },
  {
    alph: "h",
    numeric: 8,
    str: ",",
  },
  {
    alph: "i",
    numeric: 9,
    str: ",",
  },
  {
    alph: "j",
    numeric: 10,
    str: ",",
  },
  {
    alph: "k",
    numeric: 11,
    str: ",",
  },
  {
    alph: "l",
    numeric: 12,
    str: ",",
  },
  {
    alph: "m",
    numeric: 13,
    str: ",",
  },
  {
    alph: "n",
    numeric: 14,
    str: ",",
  },
  {
    alph: "o",
    numeric: 15,
    str: ",",
  },
  {
    alph: "p",
    numeric: 16,
    str: ",",
  },
  {
    alph: "q",
    numeric: 17,
    str: ",",
  },
  {
    alph: "r",
    numeric: 18,
    str: ",",
  },
  {
    alph: "s",
    numeric: 19,
    str: ",",
  },
  {
    alph: "t",
    numeric: 20,
    str: ",",
  },
  {
    alph: "u",
    numeric: 21,
    str: ",",
  },
  {
    alph: "v",
    numeric: 22,
    str: ",",
  },
  {
    alph: "w",
    numeric: 23,
    str: ",",
  },
  {
    alph: "x",
    numeric: 24,
    str: ",",
  },
  {
    alph: "y",
    numeric: 25,
    str: ",",
  },
  {
    alph: "z",
    numeric: 26,
    str: ",",
  },
  {
    alph: "_",
    numeric: 27,
    str: ",",
  },
];

const KeyboardBeta = ({ handleKeyClick, handleNumberClick }) => {
  const handleKeyClic = (l) => {
    handleKeyClick(l);
  };
  const handleNumberClic = (l, n) => {
    handleNumberClick(l, n);
  };
  return (
    <div>
      <div>
        <div className="my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"></div>
        {letters.map(({ alph, numeric, str }) => (
          <div
            key={alph}
            className="inline-block"
            onClick={() => handleNumberClic(str, numeric)}
          >
            <button
              className="border border-cyan-400 rounded shadow-sm hover:shadow-cyan-400 py-1 px-2 md:p-4 m-1 drop-shadow uppercase "
              onClick={() => handleKeyClic(alph)}
            >
              <span className="">{alph}</span>{" "}
              <span className="text-xs">{numeric}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyboardBeta;
