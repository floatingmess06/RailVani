import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.css";

const Dropdown = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setIsOpen(false);
  };

  const handleSelectFocus = () => {
    setIsOpen(true);
  };

  const handleSelectBlur = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container" ref={selectRef}>
      <select
        className="chosen-value"
        value={selectedOption}
        onChange={handleSelectChange}
        onFocus={handleSelectFocus}
        onBlur={handleSelectBlur}
      >
        <option value="" disabled>
          Select fruit
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {isOpen && (
        <ul className="value-list">
          {options.map((option, index) => (
            <li key={index} onClick={() => setSelectedOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
