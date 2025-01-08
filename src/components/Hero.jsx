import React from 'react'
import hero1 from "../assets/photos/heroPhoto1.jpg"
import hero2 from "../assets/photos/heroPhoto2.jpg"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
function Hero() {
    useGSAP(() => {
        gsap.fromTo(".goright", { 
            x:"100%", opacity: 0 
         }, 
         { 
             x:"0%",opacity: 1, duration: 3 
         });
        gsap.fromTo(".goleft", { 
            x:"-150%", opacity: 0 
         }, 
         { 
             x:"0%",opacity: 1, duration: 3 
         });
        gsap.fromTo(".goup", { 
           y:"100%", opacity: 0 
        }, 
        { 
            y:"0%",opacity: 1, duration: 2 
        });
        gsap.fromTo(".godown", { 
            y:"-150%", opacity: 0 
         }, 
         { 
             y:"0%",opacity: 1, duration: 3 
         });
    })

  return (
    <div className=' h-dvh font-custom overflow-hidden'>
        <div className=' flex mt-8 w-full justify-center items-center'>
        <h1
                        style={{borderRadius: "54% 46% 37% 63% / 39% 60% 40% 61% "}} 
        className='godown -mb-12 w-1/3 p-2 font-bold border-white border-b-2 text-5xl text-white'>
            Crown You
        </h1>
        </div>
        <div className='flex h-full justify-center items-center'>
            <div className='flex flex-col w-1/4 h-full px-3'>
                <div className='goleft rounded-t-full h-2/5 overflow-hidden '>
                    <img className='h-full' src={hero1} alt="" />
                </div>
                <div className='goup mt-8 w-full text-white rounded-b-full h-2/5 overflow-hidden border-b-8 border-white pb-2 justify-center items-center text-center'>
                    <h1 className='text-sm text-center'>
                    We are conveniently located in the heart of Calgary, offering a serene and luxurious environment where you can experience our premium services.
                    </h1>
                    <button className='m-1 text-black p-1 bg-gray-600 hover:bg-gray-800 shadow-inner border-white border-2 hover:text-white rounded-2xl text-sm'>check address</button>
                </div>           
            </div>
            <div className='flex flex-col w-2/4 justify-center h-full items-center'>
                {/* <h1 className='-mt-24 text-4xl text-white mb-4'>
                    Crown You
                </h1> */}
                <p 
                style={{borderRadius: "54% 46% 37% 63% / 39% 60% 40% 61% "}}
                className='-mt-24 p-12 border-gray-500 border-t-2 border-r-2  text-white text-xl text-balance w-full'>Where Excellence Meets Elegance. Experience unmatched precision and style, tailored just for you. Your journey to sophistication begins with us.</p>
            </div>
            <div className='flex flex-col w-1/4 h-full px-3'>
                <div className='godown text-white mb-8 w-full rounded-t-full h-2/5 overflow-hidden border-t-8 border-white pt-2'>
                    <h1 className='mt-24 text-sm text-center' >
                    Call us at (403) 555-0123 to book an appointment or for any inquiries. Our friendly staff is ready to assist you.
                    </h1>
                    <button className='m-1 text-black p-1 bg-gray-600 hover:bg-gray-800 shadow-inner border-white border-2 hover:text-white rounded-2xl text-sm'>Call us</button>
                </div> 
                <div className='goright rounded-b-full h-2/5 overflow-hidden '>
                    <img src={hero2} alt="" className='h-full object-fill'/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero