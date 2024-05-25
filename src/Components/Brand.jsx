import React from 'react'

import shopify from '../assets/shopify.png'
import google from '../assets/google.png'
import slack from '../assets/slack.png'
import dropbox from '../assets/dropbox.png'

const Brand = () => {
  return (
    <div className='p-10 flex flex-col gap-8 lg:flex-row lg:justify-center lg:gap-20 lg:py-[5rem]'>
        <div className='flex justify-center gap-10'>
            <img src={shopify} alt="shopify logo" className='lg:h-[1.7rem]' />
            <img src={google} alt="google logo" className='lg:h-[1.7rem]' />
        </div>
        <div className='flex justify-center gap-10'>
            <img src={slack} alt="slack logo" className='lg:h-[1.7rem]' />
            <img src={dropbox} alt="dropbox logo" className='lg:h-[1.7rem]' />
        </div>
    </div>
  )
}

export default Brand
