import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  function mainpage() {
    navigate("/");
  };
  function aboutpage() {
    navigate("/Blog");
  };

  function projectpage() {
    navigate("/MyProjects");
  };
  function basarilarpage() {
    navigate("/Basarilar");
  };

  function iletisimpage() {
    navigate("/Iletisim");
  };
  return (
    <footer className="d-flex flex-column text-white p-3" style={{ background: '#061426' }}>
      <div className="block justify-center item-center">
        <div className='flex justify-center w-auto border-white m-2'>
          <IoMdMail className='text-4xl m-1 hover:text-gray-500 cursor-pointer' />
          <FaGithub className='text-4xl m-1 hover:text-gray-500 cursor-pointer' />
          <FaLinkedin className='text-4xl m-1 cursor-pointer hover:text-gray-500' />
          <FaInstagram className='text-4xl m-1 cursor-pointer hover:text-gray-500' />
        </div>
      </div>
      <div className='flex justify-center gap-10 text-white m-9'>
        <p onClick={(e)=> mainpage()} className='text-xl cursor-pointer hover:text-gray-400 '>AnaSayfa</p>
        <p onClick={(e)=> aboutpage()} className='text-xl cursor-pointer hover:text-gray-400 '>Hakkımda</p>
        <p onClick={(e)=> projectpage()} className='text-xl cursor-pointer hover:text-gray-400 '>Projelerim</p>
        <p onClick={(e)=> basarilarpage()} className='text-xl cursor-pointer hover:text-gray-400 '>Başarılar</p>
        <p onClick={(e)=> iletisimpage()} className='text-xl cursor-pointer hover:text-gray-400 '>İletişim</p>
      </div>
      <div className="text-center">
        <p >Mahmut Tunahan Aktaş tarafından geliştirildi.</p>
        <p>&copy; 2024 Mahmut Tunahan Aktaş Development. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  )
}
