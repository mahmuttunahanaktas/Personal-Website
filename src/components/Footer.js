import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


export default function Footer() {
  return (
    <footer className="d-flex flex-column text-white p-3" style={{background:'#061426'}}>
      <div className="block justify-center item-center">
        <div className='flex justify-center w-auto border-white m-2'>
          <IoMdMail className='text-4xl m-1 hover:text-gray-500 cursor-pointer' />
          <FaGithub className='text-4xl m-1 hover:text-gray-500 cursor-pointer' />
          <FaLinkedin className='text-4xl m-1 cursor-pointer hover:text-gray-500' />
          <FaInstagram className='text-4xl m-1 cursor-pointer hover:text-gray-500' />
        </div>
      </div>
      <div className='flex justify-center gap-10 text-white m-9'>
        <p className='text-xl cursor-pointer hover:border-b-2'>AnaSayfa</p>
        <p className='text-xl cursor-pointer hover:border-b-2'>Hakkımda</p>
        <p className='text-xl cursor-pointer hover:border-b-2'>Projelerim</p>
        <p className='text-xl cursor-pointer hover:border-b-2'>Başarılar</p>
        <p className='text-xl cursor-pointer hover:border-b-2'>İletişim</p>
      </div>
      <div className="text-center">
        <p >Mahmut Tunahan Aktaş tarafından geliştirildi.</p>
        <p>&copy; 2024 Mahmut Tunahan Aktaş Development. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  )
}
