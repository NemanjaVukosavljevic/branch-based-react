import React from 'react'
import people from '../assets/people.png'
import ai from '../assets/ai.png'

const Header = () => {
  return (
    <div className='flex flex-col lg:flex-row p-8 lg:min-h-[92vh]'>
        <div className='flex flex-col gap-10 items-center justify-center text-center lg:w-[60%] lg:items-start lg:pl-[6rem]'>
            <h1 className='text-4xl text-gradient lg:w-[80%] lg:text-left lg:text-[4rem] lg:leading-[5rem] lg:font-bold '>Let’s Build Something Amazing with GPT-3 OpenAI</h1>
            <p className='text-blue-300 lg:w-[50%] lg:text-left text-justify'>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>
            <div className='flex lg:w-full'>
                <input type="text" placeholder='Your email address' className='pl-4 rounded-l-md outline-none text-white bg-blue-950 lg:w-[55%]' />
                <button type="button" className='p-5 bg-orange-600 rounded-r-md font-semibold text-white'>Get Started</button>
            </div>
            <div className='flex flex-col gap-5 items-center lg:flex-row'>
                <img src={people} alt="users images" className='w-[50%] lg:w-[30%]' />
                <p className='text-white'>
                1,600 people requested access a visit in last 24 hours
                </p>
            </div>
        </div>

        <div className='lg:w-[40%] lg:flex lg:items-center lg:justify-center'>
            <img src={ai} alt="ai image" className='lg:w-[80%]' />
        </div>
    </div>
  )
}

export default Header
