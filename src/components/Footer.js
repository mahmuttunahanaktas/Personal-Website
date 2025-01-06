import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="d-flex flex-column bg-primary text-white p-3 bg-dark">
    <div className="container">
      <div className="text-center mt-3">
        <button className='footerIconButton'> <FaGithub onClick={(e) => window.location.href = "https://github.com/Fastbackk"} className='g_icon fs-1' /></button>
        <button className='footerIconButton'> <FaLinkedin onClick={(e) => window.location.href = "https://www.linkedin.com/in/mahmut-tunahan-akta%C5%9F-942699267/"} className='l_icon fs-1' /></button>
      </div>
    </div>
    <div className="text-center mt-3">
      <p>Mahmut Tunahan Aktaş tarafından geliştirildi.</p>
      <p>&copy; 2024 My Pomodoro Timer. Tüm hakları saklıdır.</p>
    </div>
  </footer>
  )
}
