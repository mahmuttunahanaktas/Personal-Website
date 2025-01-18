import React, { useRef } from 'react'

export default function Blog() {
  return (
    <div style={{ marginTop: '4%' }}>
      <div className='flex w-full h-screen' style={{ background: '#0d2e57' }}>
        <div className='w-[35%] mt-24 flex items-center'>
          <img src='../photos/photo4.jpg' className='blog-div-img shadow-2xl rounded-tr-3xl rounded-br-3xl'></img>
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
      <div className='flex w-full h-screen bg-white'>
        <div className='w-[65%] mt-5 flex flex-col justify-normal' style={{ color: '#0d2e57' }}>
          <div className='flex justify-center items-center w-full h-full'>
            <p className='m-28 text-2xl'>Consectetur nisi in reprehenderit in exercitation aliqua ut eiusmod laborum irure labore Lorem. Consequat officia consectetur aute non amet consectetur laborum est consequat veniam ea cupidatat voluptate. Minim enim ea laborum dolor mollit consequat eiusmod ut. Duis proident aute amet Lorem mollit. Deserunt sit proident exercitation in do ullamco excepteur ad consectetur ad eiusmod id.
              Veniam quis occaecat commodo nostrud id ullamco esse occaecat magna ipsum voluptate non nisi sunt. Est in quis laborum anim aute exercitation ea ad culpa ad. Culpa reprehenderit ipsum id ipsum fugiat eiusmod laboris. Dolore pariatur irure velit elit excepteur excepteur nisi nostrud. Id ex esse labore ad id dolor amet cillum incididunt.
            </p>
          </div>
        </div>
        <div className='w-[35%] mt-24 flex items-center'>
          <img src='../photos/photo4.jpg' className='blog-div-img shadow-2xl rounded-tl-full rounded-bl-full'></img>
        </div>
      </div>

      <div className='bg-white w-full h-auto p-2 m-0 block justify-center items-center mt-3'>
        <p className='baslik font-medium text-2xl text-center m-[5%] mx-[20%]'>Yazılım geliştirmede, kararlılıkla öğrenmeye ve yeniliklere adapte olmaya odaklanıyorum. Yeni teknolojiler keşfetmek ve projelerimde uygulamak benim için bir tutku.<strong style={{ textDecoration: 'underline' }}>İşte bildiğim yazılım dilleri ve aşina olduğum teknolojiler</strong></p>
        <div className='flex justify-center gap-4 bg-white m-3 p-2 rounded-xl shadow-xl border-1'>


          <div className="flex flex-wrap gap-4 justify-center items-center group">
            {[
              { src: "../photos/pythonlogo.png", alt: "pythonlogo" },
              { src: "../photos/jslogo.png", alt: "jslogo" },
              { src: "../photos/javalogo.png", alt: "javalogo" },
              { src: "../photos/phplogo.png", alt: "phplogo" },
              { src: "../photos/csharp.png", alt: "csharp" },
              { src: "../photos/cpluspluslogo.png", alt: "cpluspluslogo" },
              { src: "../photos/reactlogo.png", alt: "reactlogo" },
              { src: "../photos/aspnetlogo.png", alt: "aspnetlogo" },
              { src: "../photos/firebaselogo.png", alt: "firebaselogo" },
              { src: "../photos/azurelogo.png", alt: "azurelogo" },
              { src: "../photos/tailwindlogo.png", alt: "tailwindlogo" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative cursor-pointer group-hover:blur-sm hover:!blur-none hover:scale-110 transition-all duration-300 bg-gray-100 p-2 block justify-center items-center shadow-md rounded-2xl px-4"
                onMouseEnter={(e) => {
                  const siblings = Array.from(
                    e.currentTarget.parentNode.children
                  ).filter((child) => child !== e.currentTarget);
                  siblings.forEach((sibling) =>
                    sibling.classList.add("blur-sm")
                  );
                }}
                onMouseLeave={(e) => {
                  const siblings = Array.from(
                    e.currentTarget.parentNode.children
                  ).filter((child) => child !== e.currentTarget);
                  siblings.forEach((sibling) =>
                    sibling.classList.remove("blur-sm")
                  );
                }}
              >
                <img src={item.src} className="w-24 h-auto" alt={item.alt} />
              </div>
            ))}
          </div>





        </div>
      </div>
    </div>
  )
}
