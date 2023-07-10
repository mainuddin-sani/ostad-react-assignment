import { useState } from "react";

const Content = () => {
  const [inputValue, setInputValue] = useState("");
  const [valueShow, setValueShow] = useState("");
  const submitForm = () => {
    setValueShow(inputValue);
    setInputValue("");
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center mt-14 flex-col items-center">
        <div className="w-[600px]">
          <label className="font-semibold">Text Here</label>
          <div>
            <textarea
              name=""
              id=""
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border-double w-full p-3 h-60 border-4 border-yellow-400 rounded-lg"
            ></textarea>
          </div>
          <div></div>
        </div>
        <button
          onClick={submitForm}
          className="px-4 mt-4 py-2 font-semibold text-sm bg-white text-slate-700 dark:bg-slate-700 dark:text-white rounded-md shadow-sm ring-1 ring-slate-900/5 border-yellow-400 dark:border-sky-500 border-2 border-solid"
        >
          Submit
        </button>
        <div className="mt-8 text-left">
          <p className="font-semibold">Text Display : {valueShow}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
