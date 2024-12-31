import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Begining() {


    return (
        <div className='flex justify-center h-screen'>
            <div className='w-1/4 flex flex-col items-center justify-center'>
                <p className="m-5">
                    <h1><strong>Merhaba! </strong></h1>

                    Ben Tunahan. Öğrenmeyi tutkuyla seven bir öğrenci ve geleceğin yazılım dünyasında iz bırakmayı hedefleyen bir full-stack developer.
                    Boş vakitlerimde kitapların büyülü dünyasında kaybolur, yeni hikayelere yelken açarım.
                    Her satır kodda, her sayfada yeni bir serüven bulurum.

                </p>
                <div className='flex justify-center w-96 border-t-4 border-dotted border-black'>
                    <FaGithub className='icons' />
                    <FaLinkedin className='icons' />
                    <FaInstagram className='icons' />
                </div>

            </div>
            <div className='bg-sky-300 w-1/4 flex justify-center items-center mb-5'>
                <img src='../photos/photo3.jpg' style={{ border: '3px solid #0e3865', background: 'black', height: '400px', width: '400px', borderRadius: '400px' }}></img>

            </div>
            <div className='bg-sky-400 w-1/4 flex items-center'>
                <h1 className='name-p'>Mahmut <br />Tunahan <br />Aktaş</h1>
                <p style={{ color: 'gray', fontSize: '2rem' }}>- Full-stack Developer - </p>
            </div>
        </div>

    )
} export default Begining;
