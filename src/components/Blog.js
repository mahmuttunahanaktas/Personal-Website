import React from 'react'

export default function Blog() {
  return (
    <div className='flex w-full h-screen' style={{ background: '#0d2e57' }}>


      <div className='w-[35%] mt-24 flex items-center'>
        <img src='../photos/photo4.jpg' className='blog-div-img shadow-xl rounded-tr-3xl rounded-br-3xl'></img>
      </div>


      <div className='w-[65%] mt-5 flex flex-col justify-normal text-white'>
        <div className='flex justify-center'>
          <p className='baslik text-9xl'>
            <strong>Ben Tunahan.</strong>
          </p>
        </div>
        <div className='h-full w-full flex justify-center items-start'>
          <p className='m-28 text-2xl'>Consectetur nisi in reprehenderit in exercitation aliqua ut eiusmod laborum irure labore Lorem. Consequat officia consectetur aute non amet consectetur laborum est consequat veniam ea cupidatat voluptate. Minim enim ea laborum dolor mollit consequat eiusmod ut. Duis proident aute amet Lorem mollit. Deserunt sit proident exercitation in do ullamco excepteur ad consectetur ad eiusmod id.
            Veniam quis occaecat commodo nostrud id ullamco esse occaecat magna ipsum voluptate non nisi sunt. Est in quis laborum anim aute exercitation ea ad culpa ad. Culpa reprehenderit ipsum id ipsum fugiat eiusmod laboris. Dolore pariatur irure velit elit excepteur excepteur nisi nostrud. Id ex esse labore ad id dolor amet cillum incididunt.
          </p>
        </div>



      </div>


    </div>
  )
}
