import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
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
  const logo = "<Tuna/>";
  return (
    <nav className='fixed top-0 left-0 w-full shadow-md flex justify-between items-center z-50 rounded-bottom-3 p-2' style={{ background: '#0d2e57', borderBottom: '1px solid white' }}>
      {/*
        <img src='../photos/photo4.png'  onClick={() => mainpage()} className='cursor-pointer ml-4 w-24 h-auto'></img> 
      */
      }
      <div className='flex items-center m-2'>
        <h1 onClick={() => mainpage()} className='asd cursor-pointer ml-4 text-2xl text-white'>Mahmut Tunahan Aktaş</h1>
      </div>
      <div className='flex items-center justify-center m-4 gap-x-8 text-white' >
        <p onClick={() => mainpage()} className='text-xl  hover:underline font-semibold cursor-pointer hover:text-underline'>AnaSayfa</p>
        <p onClick={() => aboutpage()} className='text-xl font-semibold hover:underline  cursor-pointer'>Hakkımda</p>
        <p onClick={() => projectpage()} className='text-xl font-semibold  hover:underline cursor-pointer'>Projelerim</p>
        <p onClick={() => basarilarpage()} className='text-xl font-semibold hover:underline  cursor-pointer'>Başarılar</p>
        <p onClick={() => iletisimpage()} className='text-xl font-semibold  hover:underline cursor-pointer'>İletişim</p>
      </div>
    </nav>
  )
} export default Navbar;
