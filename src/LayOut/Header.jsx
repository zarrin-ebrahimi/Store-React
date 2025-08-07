import React, { useState } from "react";
import { BsBag } from "react-icons/bs";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import Sidebar from "./Sidebar";
export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-row p-4 my-5 h-12 bg-white justify-between items-center">
      <div  className="flex">
        <HiOutlineBars3BottomRight
          size={30}
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden"
        />
        <div className="flex-row gap-x-2 hidden md:flex">
          <FaPinterestSquare  size={20}/>
          <IoLogoInstagram  size={20}/>
          <IoLogoWhatsapp  size={20}/>
          <FaTelegramPlane   size={20}/>
        </div>
      </div>

      <img src="./2222.png" alt="" className="w-15 " />
      <div className="flex gap-x-2 ">
        <div className=" flex-row gap-x-2 hidden md:flex items-center ">
          <button type="button"  className="relative">
            <CiUser size={24} />
            <div className="absolute flex items-center gap-x-1 w-36 py-1 -left-12  bg-amber-200 px-5">
              <span>ورود</span>
              /
              <span>ثبت نام</span>
            </div>
          </button>
          <button type="button">
            <IoIosHeartEmpty size={24} />
          </button>
          <button type="button">
            <IoIosSearch size={26} />
          </button>
        </div>
        <button type="button" onClick={() => setIsSidebarOpen(true)}>
          <BsBag size={24} />
        </button>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
}
