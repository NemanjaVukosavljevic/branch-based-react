import React from 'react'

const Article = ({ image, date, title }) => {
  return (
    <div className='flex flex-col justify-between p-5 bg-blue-950 rounded-md hover:bg-gray-800 transition-colors duration-150 cursor-pointer'>
        <div className='flex flex-col'>
            <img className='object-cover w-full h-[40%]' src={image} alt={title} />
            <div className='flex flex-col gap-5 my-5 text-white'>
                <p>{date}</p>
                <h1>{title}</h1>
            </div>
        </div>
        <div>
            <p className='text-white'>
                Read Full Article
            </p>
        </div>
    </div>
  )
}

export default Article
