import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../../assets/Logo.png"


function Footer() {
  return (
    <section className="flex bg-gradient-to-t to-gray-300  from-black border-t-2 w-full rounded-t-xl z-50">
        <div className="z-10 mx-auto max-w-7xl">
            <div className="m-2 flex flex-wrap">
                <div className="w-full lg:w-8/12">
                    <div className="flex h-full sm:flex-col flex-row justify-start">
                        <div className=" mr-10 sm:mr-0 inline-flex ">
                        <img className="w-16 h-16 ml-2" src={Logo} alt="Logo" />
                        </div>
                        <div>
                            <p className=" text-sm text-gray-600">
                                &copy; Copyright 2024. All Rights Reserved by Netsa Lesan.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-4/12">
                    <div className="text-center ">
                        <h3 className="text-center tracking-px text-xs font-semibold uppercase text-gray-500">
                            Support
                        </h3>
                        <ul className='w-full flex justify-around  items-start text-left'>
                            <li className="">
                                <Link
                                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                    to="/"
                                >
                                    Contact Us<br /> Telegram:{"123456"}, Phone:{"123456"} Instagram: @558alex1
                                </Link>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer