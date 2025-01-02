import React from 'react'

export default function Blog() {
  return (
    <div className='flex w-full h-screen' style={{ background: '#0d2e57' }}>


      <div className='w-[30%] mt-5 flex items-center'>
        <img src='../photos/photo4.jpg' className='blog-div-img shadow-xl rounded-tr-3xl rounded-br-3xl'></img>
      </div>


      <div className='w-[70%] mt-5 bg-sky-400 flex flex-col justify-normal'>
        <div className='bg-sky-500 flex justify-center'>
          <p className='bg-sky-800 text-9xl italic'>
            <strong>Ben Kimim?</strong>
          </p>
        </div>
        <div className='bg-violet-400 h-full w-full flex justify-center items-center'>
          <p className='m-5 text-2xl'>Consectetur nisi in reprehenderit in exercitation aliqua ut eiusmod laborum irure labore Lorem. Consequat officia consectetur aute non amet consectetur laborum est consequat veniam ea cupidatat voluptate. Minim enim ea laborum dolor mollit consequat eiusmod ut. Duis proident aute amet Lorem mollit. Deserunt sit proident exercitation in do ullamco excepteur ad consectetur ad eiusmod id.

            Veniam quis occaecat commodo nostrud id ullamco esse occaecat magna ipsum voluptate non nisi sunt. Est in quis laborum anim aute exercitation ea ad culpa ad. Culpa reprehenderit ipsum id ipsum fugiat eiusmod laboris. Dolore pariatur irure velit elit excepteur excepteur nisi nostrud. Id ex esse labore ad id dolor amet cillum incididunt.
          </p>
        </div>



      </div>


    </div>
  )
}
