import React from 'react'
import { FaCode } from "react-icons/fa";

export default function Navbar() {
  const logo= "<Tuna/>";

  return (
    <nav className='fixed top-0 left-0 w-full shadow-md flex justify-between items-center rounded-bottom-5 bg-white z-50'>

      <div className='flex items-center m-2'>
        
       <h1 className='asd'>{logo}</h1>
      </div>
      <div className='flex items-center justify-center m-4 gap-x-8'>
        <p className='text-xl '>AnaSayfa</p>
        <p className='text-xl '>Hakkımda</p>
        <p className='text-xl '>Projelerim</p>
        <p className='text-xl '>Başarılar</p>
        <p className='text-xl '>İletişim</p>
        
      </div>

    </nav>
  )
};
