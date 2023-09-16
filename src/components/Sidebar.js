import React,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { navlinks } from "../constants";
import { logo } from '../assets';

const Sidebar = () => {
   const navigate = useNavigate();
   const [isActive, setIsActive] = useState("dashboard");

   const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
     <div
       className={`w-[68px] h-[68px] rounded-[20px] ${
         isActive && isActive === name && `bg-[#48a974]`
       } flex justify-center items-center ${
         !disabled && "cursor-pointer"
       } ${styles}`}
       onClick={handleClick}
     >
       {!isActive ? (
         <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
       ) : (
         <img
           src={imgUrl}
           alt="fund_logo"
           className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
         />
       )}
     </div>
   );

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to="/">
        <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
      </Link>
      <div className="flex-1 flex flex-col justify-between items-center bg-[#757575] rounded-[20px] w-[78px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar
