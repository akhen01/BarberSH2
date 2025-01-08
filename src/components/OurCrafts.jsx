import React, { useEffect } from 'react'
import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function OurCrafts({state}) {
    const Lisnumbers = [1, 4, 5, 8, 9, 12]
    useEffect(()=>{
        if(state==="divref3"){
            gsap.fromTo(".goright", { 
               x:"100%" 
            }, 
            { 
                x:"0%", duration: 3, stagger: 0.1 
            });
            gsap.fromTo(".opac", { 
                opacity: 0 
            }, 
            { 
                opacity: 1, duration: 3, delay: 3 
            });
            gsap.fromTo(".goleft", { 
               x:"-150%" 
            }, 
            { 
                x:"0%" ,duration: 3 , stagger: 0.2
            });
            gsap.fromTo(".godown", { 
               y:"-100%",opacity:0,
            }, 
            { 
                y:"0%",opacity:1, duration: 3, delay:3 
            });
        }
    }, [state]
)
    
    const cutList = [
        {
            service : "Wash and Cut",
            detail : "Shampooing your hair to clean and prepare it for a precise haircut. This ensures your hair is free from oils and dirt, providing a fresh start for a neat and professional cut.",
            price: "20.00"
        },
        {
            service : "Head Shave with Razer",
            detail : "Applying shaving cream or gel to soften the hair and protect the skin, followed by a soothing aftershave balm to prevent irritation.",
            price: "10.00"
        },
        {
            service : "Children Wash and Cut",
            detail : "Children under 10 shampooing the child's hair to clean and prepare it before the haircut",
            price: "20.00"
        },
        {
            service : "Wash and style",
            detail : "Shampooing your hair to clean and prepare it for styling. After the wash, your hair is blow-dried and styled according to your preferences, ensuring a polished and finished look",
            price: "50.00"
        },
        {
            service : "Short Beard tidy",
            detail : "Trimming and shaping the beard to give it a neat and well-groomed appearance. The barber will also clean up the neck and cheek lines for a polished and defined look.",
            price: "40.00"
        },
        {
            service : "Large Beard Trim",
            detail : "Carefully trimming and shaping a long beard to maintain its style and manageability.",
            price: "30.00"
        },
        {
            service : "Luxery full service",
            detail : "Comprehensive grooming experience, starting with a shampoo, haircut, and beard trim, followed by a relaxing hot towel treatment. This premium service ensures you leave looking and feeling your best",
            price: "40.00"
        },
        {
            service : "Hair coloring",
            detail : "Applying dye to your hair to change its color, either partially or fully, based on your desired look.",
            price: "30.00"
        },
    ]
  return (
    <div className='h-dvh text-white w-full'>
        <div>

            <h1 className='godown text-4xl mb-4 w-full'>
                View our Barber pricing List
            </h1>
        </div>
        <div>
            <ul className='flex flex-wrap justify-start items-start w-full overflow-hidden'>
                {
                    
                    cutList.map((cut, index) => (
                        <li
                        className={` flex justify-start items-start w-1/2 px-4 ${Lisnumbers.includes(index+1) ? "bg-gradient-to-l from-gray-600  to-white": "bg-black"}
                        ${index % 2 === 0 ? "goleft rounded-r-full": "goright rounded-l-full"}`} 
                        key={index}>
                            <div className={`opac flex-col p-2 w-4/5 border-b-2 border-b-gray-300 flex justify-start items-start text-start
                                ${index % 2 === 0 ? "ml-0": "ml-8"}`}>

                                <p className={` my-2 ${Lisnumbers.includes(index+1) ? "text-black": "text-white"}`}>{cut.service}</p>
                                <p className='text-xs text-gray-700'>
                                    {cut.detail}
                                </p>
                            </div>
                            <p className='opac text-sm text-end mt-6 -ml-6 w-1/5'>
                                {
                                    cut.price
                                }
                            </p>
                </li>
                    ))
                }
                
            </ul>
        </div>
    </div>
  )
}

export default OurCrafts