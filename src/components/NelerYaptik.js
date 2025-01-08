import React from 'react'
import { GoArrowRight } from "react-icons/go";


export default function NelerYaptik() {
  return (
    <div className='w-full h-auto flex justify-center items-center' style={{ background: '#fcdcfb' }}>
      <h1 className='baslik text-9xl m-5'>Neler <br></br>Yaptım?</h1>
      <div className='w-[40%]'>
        <p className='font-medium text-2xl '>Lorem iisicing elit. tibus! boriosam iste aspernatur nulla praesicia, vel ad ipsa obcaecati quas corporis sapiente dicta ullam quae, omnis excepturi animi voluptates hic cum exercitationem quidem, officiis natus inventore.
        </p>
        <button className="bg-transparent hover:bg-black text-black hover:text-transparent border-1 border-current rounded-3xl flex items-center text-2xl gap-1 px-4 py-2 transition">
          <p className='m-0 p-0'>Projelerim</p>
          <GoArrowRight className='text-2xl' />
        </button>

      </div>

    </div>
  )
}
