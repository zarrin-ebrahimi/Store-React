import React,{useState} from 'react'
import { BsBag } from "react-icons/bs";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import Sidebar from './Sidebar';
export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='flex flex-row p-4 my-5 h-12 bg-white justify-between items-center'>
      <HiOutlineBars3BottomRight size={30} onClick={()=>setIsSidebarOpen(true)}/>
      <img src="./2222.png" alt=""  className='w-15 '/>
      <button  type='button'  onClick={()=> setIsSidebarOpen(true)}>
        <BsBag size={24}  />

      </button>
      <Sidebar  isOpen={isSidebarOpen} onClose={()=>setIsSidebarOpen(false)}/>
    </div>

  )
}
