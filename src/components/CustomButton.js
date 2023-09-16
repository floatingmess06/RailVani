import React from "react";

const CustomButton = ({ title, handleClick ,val}) => {
  return (
    <button
      type="button"
      value={val}
      className={`bg-blue-500 hover:bg-blue-700 py-2 m-2font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] `}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
