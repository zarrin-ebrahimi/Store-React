import React from "react";
// import { Link } from 'react-router-dom';
import { IoCloseSharp } from "react-icons/io5";
export default function ({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <>
      {/* Overlay */}
      
        <div
          className="fixed inset-0 z-30 bg-black/30"
          onClick={onClose}
        >
        </div>
      
      <div className="fixed inset-0 w-74 bg-amber-200 z-50">
        <div className="h-12 bg-black flex items-center justify-end p-2">
          <IoCloseSharp size={25} color="#ffff" className="" onClick={onClose}/>
        </div>
        <nav className="flex flex-col gap-y-3 pr-5 my-10">
          <a href="">صفحه اصلی</a>
          <a href="">مانتو اداری</a>
  
          <a href="">مانتو مجلسی</a>
        </nav>
      </div>
    </>
  );
}
