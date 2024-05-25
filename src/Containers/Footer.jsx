import React from 'react'

import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <div className='flex flex-col bg-gray-800 mt-5 gap-8 lg:gap-[8rem] lg:px-[8rem] lg:py-[4rem]'>
        <div className='flex flex-col gap-10 justify-center items-center h-[20rem]'>
            <h1 className='text-gradient px-3 text-3xl font-extrabold text-center lg:text-6xl lg:w-[60%]'>
                Do you want to step in to the future before others
            </h1>
            <button className='p-5 border border-white text-white hover:text-gray-300 hover:border-gray-300 transition-colors duration-150'>
                Request Early Access
            </button>
        </div>

        <div className='flex flex-col gap-12 lg:gap-0 lg:flex-row'>
            <div className='flex flex-col items-center justify-center gap-5 lg:w-[30%]'>
                <a href="#home"><img src={logo} alt="gpt logo" className='w-full' /></a>
                <p className='text-white w-[50%] text-center'>
                    Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                </p>
            </div>

            <div className='flex flex-row gap-6 lg:gap-0 justify-center text-center lg:w-full'>
                <div className='flex flex-col flex-1 lg:flex-row lg:justify-center'>
                    <div className='flex flex-col'>
                        <p className='text-white p-3'>
                            Links
                        </p>
                        <p className='text-gray-400 p-3 hover:text-white transition-colors duration-150'><a href="#">Overons</a></p>
                        <p className='text-gray-400 p-3 hover:text-white transition-colors duration-150'><a href="#">Social Media</a></p>
                        <p className='text-gray-400 p-3 hover:text-white transition-colors duration-150'><a href="#">Counters</a></p>
                    </div>
                </div>
                <div className='flex flex-col flex-1 lg:flex-row lg:justify-center'>
                    <div className='flex flex-col'>
                        <p className='text-white p-3'>
                            Company
                        </p>
                        <p className='text-gray-400 p-3 hover:text-white transition-colors duration-150'><a href="#">Terms & Conditions</a></p>
                        <p className='text-gray-400 p-3 hover:text-white transition-colors duration-150'><a href="#">Privacy Policy</a></p>
                        <p className='text-gray-400 p-3 hover:text-white transition-colors duration-150'><a href="#">Contact</a></p>
                    </div>
                </div>
                <div className='flex flex-col flex-1 lg:flex-row lg:justify-center'>
                    <div className='flex flex-col'>
                        <p className='text-white p-3'>
                            Get in touch
                        </p>
                        <p className='text-gray-400 p-3 hover:text-white transition-colors duration-150'><a href="#">Crechterwoord K12 182 DK Alknjkcb</a></p>
                        <p className='text-gray-400 p-3 hover:text-white transition-colors duration-150'><a href="#">085-132567</a></p>
                        <p className='text-gray-400 p-3 hover:text-white transition-colors duration-150'><a href="#">info@payme.net</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
