import React, { useEffect } from 'react'
import barber1 from "../assets/barbers/barber1.jpg"
import barber2 from "../assets/barbers/barber2.jpg"
import barber3 from "../assets/barbers/barber3.jpg"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function TheTeam({state}) {
    useEffect(() => {
        if(state === "divref2"){
            gsap.fromTo(".goup", { 
               y:"100%" 
            }, 
            { 
                y:"0%", duration: 2 
            });
            gsap.fromTo(".downgo", { 
               y:"-50%",
            }, 
            { 
                y:"0%", duration: 3 
            });
        }
    })
  return (
    <div className=' h-dvh bg-gradient-to-b w-full from-gray-300 via-white pt-10 to-white'>
        <div className='flex flex-col h-full justify-center items-center'>
            <div className='w-1/3 border-b-2 border-black'
            style={{borderRadius: "54% 46% 37% 63% / 39% 60% 40% 61% "}}>
            <h1 className='text-5xl font-extrabold '>
                MEET OUR TEAM
            </h1>
            </div>
            <div className='h-full flex justify-center items-center w-full '>
                <div className='goup bg-gradient-to-b from-gray-200  to-white w-1/3 h-full justify-center items-center flex flex-col rounded-t-full border-t-8 border-t-black -mt-20'>
                    <div
                    className='h-2/3 w-2/3 overflow-hidden rounded-full items-center justify-center flex' >

                        <img className="h-full w-full"src={barber1} alt="" />
                    </div>
                        <div>
                            <h1 className='font-bold'>The Maestro</h1>
                            <p className='text-sm'>Known for his exceptional attention to detail and mastery in precision cuts, Marcus ensures every client leaves looking their best.</p>
                        </div>
                </div>
                <div className='downgo w-1/3 h-full justify-center items-center flex flex-col rounded-b-full border-b-8 border-b-black -mt-16 pt-12'>
                    <div
                    className='w-2/3 h-1/2 overflow-hidden rounded-full items-center justify-center flex' >

                        <img
                        className='h-full' 
                        src={barber2} alt="" />
                        
                    </div>
                    <div className='text-black h-1/2'>
                            <h1 className='font-bold'>The Blade</h1>
                            <p className='text-sm'>Renowned for his innovative styling techniques and ability to create modern, trendsetting looks that keep clients ahead of the fashion curve.</p>
                    </div>
                </div>
                <div className='goup bg-gradient-to-b from-gray-200  to-white w-1/3 h-full justify-center items-center flex flex-col rounded-t-full border-t-8 border-t-black -mt-20'>
                    <div
                        className='w-2/3 h-2/3 overflow-hidden rounded-full items-center justify-center flex' >
                            <img 
                            className='h-full w-full'
                            src={barber3} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold'>The Artisan</h1>
                        <p className='text-sm'>Celebrated for his warm customer service and his artistic flair in designing personalized haircuts that reflect each client's unique personality.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TheTeam

