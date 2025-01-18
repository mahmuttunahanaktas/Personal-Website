import React from 'react'
import { GoArrowRight } from "react-icons/go";

function NelerYaptik() {
  return (
    <div className='w-full h-auto flex justify-center items-center' style={{ background: '#fcdcfb' }}>
      <h1 className='baslik text-9xl m-5'>Neler <br></br>Yaptım?</h1>
      <div className='w-[40%]'>
        <p className='font-medium text-2xl '>Gerek lise boyunca proje arkadaşlarımla gerekse staj sürecim boyunca birçok dilde ve teknolojide çeşitli projeler geliştirme fırsatım oldu.</p>
        <button className="bg-transparent hover:bg-black text-black hover:text-transparent border-1 border-current rounded-3xl flex items-center text-2xl gap-1 px-4 py-2 transition">
          <p className='m-0 p-0'>Projelerim</p>
          <GoArrowRight className='text-2xl' />
        </button>
      

      </div>

    </div>
  )
};
 export default NelerYaptik;
