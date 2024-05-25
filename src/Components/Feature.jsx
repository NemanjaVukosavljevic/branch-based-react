import React from 'react'

const Feature = ({ title, description }) => {
  return (
    <div className='flex flex-col gap-6 lg:flex-row '>
        <div className='flex flex-col gap-4'>
            <div className='h-1 w-10 bg-gradient-custom rounded-md'></div>
            <h1 className='text-3xl text-white font-bold lg:text-3xl lg:w-[30%]'>{title}</h1>
        </div>

        <div className='lg:w-[70%] lg:flex lg:items-center lg:justify-center'>
            <p className='text-blue-300 text-lg lg:text-xl lg:w-[25rem]'>
                {description}
            </p>
        </div>
    </div>
  )
}

export default Feature
