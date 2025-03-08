import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Begining() {
    const navigate = useNavigate();

    return (
        <Fade in={true} timeout={500}>
            <div className="Begin h-screen w-full flex">
                <div className='w-[60%] h-auto' style={{ marginTop: '7%' }}>
                    <p className="m-5 mb-3 text-3xl">
                        <h1 className='text-6xl'><strong>Merhaba!</strong></h1> <br></br>
                        Öğrenmeyi tutkuyla seven bir öğrenci ve geleceğin yazılım dünyasında iz bırakmayı hedefleyen bir full-stack developer.
                        Boş vakitlerimde kitapların büyülü dünyasında kaybolur, yeni hikayelere yelken açarım.
                        Her satır kodda, her sayfada yeni bir serüven bulurum.
                    </p>
                    <button onClick={(e) => navigate("/Blog")} className="bg-transparent float-right text-black border-1 border-current rounded-3xl flex items-center text-2xl gap-1 px-4 py-2 transition mr-9">
                        <p className='m-0 p-0'>Hakkımda</p>
                        <GoArrowRight className='text-2xl' />
                    </button>
                </div>
                <div className='w-[40%] h-auto  gap-2 p-5'>
                    <img src='../photos/photo3.jpg' className='border-1 border-black w-full h-auto cursor-pointer rounded-2xl' style={{marginTop:'16%'}}></img>
                    <div className='order-3 w-full flex flex-col items-center justify-center'>
                        <h1 className='text-5xl text-center'>Mahmut Tunahan <br />Aktaş</h1>
                        <p className='text-gray-500 text-xl'>Full-stack Developer </p>
                    </div>
                </div>
            </div>
        </Fade>
    )
} export default Begining;
