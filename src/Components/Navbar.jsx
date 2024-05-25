import React from 'react'
import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../assets/logo.svg'


const Menu = () => {
    return <>
        <p className='hover:text-orange-500 transition-colors duration-150'><a href="#home">Home</a></p>
        <p className='hover:text-orange-500 transition-colors duration-150'><a href="#wgpt3">What is GPT3</a></p>
        <p className='hover:text-orange-500 transition-colors duration-150'><a href="#possibility">Open AI</a></p>
        <p className='hover:text-orange-500 transition-colors duration-150'><a href="#features">Case Studies</a></p>
        <p className='hover:text-orange-500 transition-colors duration-150'><a href="#blog">Library</a></p>
    </>
}

const SignButtons = () => {
    return <>
        <p className='mx-[1rem] py-[0.7rem] px-[1.3rem] rounded-md border border-white text-white hover:bg-white hover:text-orange-500 transition-colors duration-150'>Sign in</p>
        <button type="button" className='mx-[1rem] py-[0.7rem] px-[1.3rem] bg-orange-600 rounded-md hover:bg-white hover:text-orange-500 transition-colors duration-150'>Sign up</button>
    </>
    
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
    
    <div className='hidden lg:flex items-center justify-between py-5 px-[8rem]' id='home'>
        <div className='flex gap-5'>
            <div className='flex items-center mr-10'>
                <a href="#home"><img src={logo} alt="logo" className='h-[20.02px] cursor-pointer' /></a>
            </div>
            <div className='flex gap-10 text-white text-xl'>
                <Menu />
            </div>
        </div>

        <div className='flex items-center'>
            <SignButtons />
        </div>
    </div>

    {/* mobile */}

    <div className='lg:hidden flex flex-col'>
        <div className='flex flex-col'>
            <div className='flex flex-row justify-between py-10 px-[3rem] relative'>
                <img src={logo} alt="logo" />
                {
                    toggleMenu ? <RiCloseLine size={27} className='text-white cursor-pointer' onClick={() => setToggleMenu(false)} /> : <RiMenu3Line size={27} className='text-white cursor-pointer' onClick={() => setToggleMenu(true)} />
                }
            </div>
            {
                toggleMenu && (
                    <div className='scale-up-top gradient__bg absolute top-[105px] left-0 right-0 flex flex-col py-5 gap-3 text-lg text-center text-white'>
                        <Menu />
                        <div className='flex py-5 justify-center items-center'>
                            <SignButtons />
                        </div>
                    </div>
                )
            }

        </div>
    </div>
    </>


    

  )
}

export default Navbar
