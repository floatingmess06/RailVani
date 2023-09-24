import React, { useState, useEffect, useRef } from "react";
import './Dropdown.css';

const StationPanel = ({ title, allStations, check, setStation }) => {
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
    setStation(event.target.value);
  };

  const handleSelectFocus = () => {
    setIsOpen(true);
  };

  const handleSelectBlur = () => {
    setIsOpen(false);
  };

  return (
    <div className="station-panel ">
      {check && (
        <div className="dropdown-container" ref={selectRef}>
          <select
            name={title}
            className="chosen-value"
            value={selectedOption}
            onChange={handleSelectChange}
            onFocus={handleSelectFocus}
            onBlur={handleSelectBlur}
            data-te-select-init
            data-te-select-filter="true"
          >
          <option >Search station</option>
            {allStations &&
              allStations.map((station) => {
                return (
                  <option key={station.code} value={station.code}>
                    {station.name}
                  </option>
                );
              })}
          </select>
          {isOpen && (
            <ul className="value-list">
              {allStations.map((station) => (
                <li
                  key={station.code}
                  onClick={() => {
                    setSelectedOption(station.code);
                    setStation(station.code);
                  }}
                >
                  {station.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default StationPanel;