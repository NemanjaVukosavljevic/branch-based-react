import React from 'react'

import possibilityPic from '../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='flex flex-col p-8 my-5 gap-8 lg:gap-[8rem] lg:flex-row lg:px-[8rem] lg:py-[4rem]' id='possibility'>
        <div className='lg:w-[40%] lg:flex lg:items-center lg:justify-center'>
            <img src={possibilityPic} alt="possibility woman"  className='lg:w-[80%]'/>
        </div>

        <div className='lg:w-[50%] lg:flex lg:items-center'>
            <div className='flex flex-col gap-6 lg:justify-center'>
                <p className='text-gradient text-lg font-semibold lg:text-2xl'>
                    Request Early Access to Get Started
                </p>
                <h1 className='text-gradient text-4xl font-bold lg:text-5xl'>
                    Endless potential awaits with ChatGPT's advanced capabilities.
                </h1>
                <div className='text-blue-300'>
                    <p className='text-lg font-semibold text-justify lg:text-2xl'>
                        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Possibility
