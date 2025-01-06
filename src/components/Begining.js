import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Begining() {
    return (
        <div className="Begin w-full bg-mainpagecolor flex flex-col sm:flex-row justify-center sm:h-screen" style={{background:'#fff6f3'}}>
            <div className='order-1 sm:order-3 w-full sm:w-1/4 flex flex-col items-center justify-center'>
                <p className="m-5 mb-3 text-2xl">
                    <h1><strong>Merhaba! </strong></h1>
                    Öğrenmeyi tutkuyla seven bir öğrenci ve geleceğin yazılım dünyasında iz bırakmayı hedefleyen bir full-stack developer.
                    Boş vakitlerimde kitapların büyülü dünyasında kaybolur, yeni hikayelere yelken açarım.
                    Her satır kodda, her sayfada yeni bir serüven bulurum.
                </p>
                <div className='flex justify-center w-96 border-t-2 border-black'>
                    <IoMdMail className='text-5xl m-1 hover:text-gray-500 cursor-pointer' />
                    <FaGithub className='text-5xl m-1 hover:text-gray-500 cursor-pointer' />
                    <FaLinkedin className='text-5xl m-1 cursor-pointer hover:text-gray-500' />
                    <FaInstagram className='text-5xl m-1 cursor-pointer hover:text-gray-500' />

                </div>
            </div>

            <div className='order-2 sm:order-1 w-full sm:w-1/4 flex justify-center items-center mb-5'>
                <img src='../photos/photo3.jpg' className='mb-6 rounded-full w-96 h-auto border-3 border-midnight'></img>
            </div>

            <div className='order-3 sm:order-2 w-full sm:w-1/4 flex flex-col items-center justify-center'>
                <h1 className='text-8xl'>Mahmut <br />Tunahan <br />Aktaş</h1>
                <p className='text-gray-500 text-xl'>- Full-stack Developer - </p>
            </div>
        </div>
    )
} export default Begining;
