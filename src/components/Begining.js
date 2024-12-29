import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Begining() {
    return (
        <div className='Begin'>
            <div className='left-div'>
                <div style={{ width: '80%', marginTop: '30%' }}>
                    <p className="begining-p">
                        <h1><strong>Merhaba! </strong></h1>

                        Ben Tunahan. Öğrenmeyi tutkuyla seven bir öğrenci ve geleceğin yazılım dünyasında iz bırakmayı hedefleyen bir full-stack developer.
                        Boş vakitlerimde kitapların büyülü dünyasında kaybolur, yeni hikayelere yelken açarım.
                        Her satır kodda, her sayfada yeni bir serüven bulurum.

                    </p>
                    <div className='contact-begining'>
                        <FaGithub className='icons' />
                        <FaLinkedin className='icons' />
                        <FaInstagram className='icons' />

                    </div>
                </div>
            </div>
            <div className='middle-div'>
                <img src='../photos/photo3.jpg' style={{ border: '3px solid #0e3865', background: 'black', height: '400px', width: '400px', borderRadius: '400px' }}></img>

            </div>
            <div className='right-div'>
                <h1 className='name-p'>Mahmut <br />Tunahan <br />Aktaş</h1>
                <p style={{color:'gray',fontSize:'2rem'}}>Full-stack Developer</p>


            </div>
        </div>
    )
} export default Begining;
