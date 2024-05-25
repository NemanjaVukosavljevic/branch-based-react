import React from 'react'

const CallToAction = () => {
  return (
    <div className='flex flex-col p-8 my-5 lg:flex-row lg:px-[8rem] lg:py-[4rem]'>
        <div className='bg-gradient-custom gap-10 lg:w-full  flex flex-col p-5 lg:py-[4rem] lg:gap-0 lg:p-0 lg:flex-row rounded-md'>
            <div className='flex flex-col gap-6 lg:justify-center lg:pl-[6rem] lg:w-[70%]'>
                <p className=' text-lg font-semibold lg:text-2xl'>
                    Request Early Access to Get Started
                </p>
                <h1 className=' text-4xl font-bold lg:text-5xl lg:max-w-[30rem]'>
                    Register today & start exploring the endless possiblities.
                </h1>
            </div>

            <div className='flex justify-center items-center lg:w-[30%]'>
                <button className='text-white p-5 bg-black rounded-lg lg:w-[15rem] hover:bg-white hover:text-black transition-colors duration-150'>Get Started</button>    
            </div>    
        </div>  
    </div>
  )
}

export default CallToAction
