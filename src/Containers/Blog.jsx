import React, { useState } from 'react'
import Article from '../Components/Article'

import articleImageOne from '../assets/blog02.png'
import articleImageTwo from '../assets/blog03.png'
import articleImageThree from '../assets/blog04.png'
import articleImageFour from '../assets/blog05.png'

const Blog = () => {

    const [articleInfo, setArticleInfo] = useState([
        {
            image: articleImageOne,
            date: 'Jan 15, 2024',
            title: 'ChatGPT and OpenAI are transforming our world. Let`s dive deeper.'
        },
        {
            image: articleImageTwo,
            date: 'Apr 22, 2024',
            title: 'Exploring ChatGPT: How AI enhances our daily interactions.'
        },
        {
            image: articleImageThree,
            date: 'Jul 08, 2024',
            title: 'Discover the limitless potential of ChatGPT with OpenAI.'
        },
        {
            image: articleImageFour,
            date: 'Oct 19, 2024',
            title: 'ChatGPT by OpenAI: Changing the way we understand AI.'
        },
    ])

  return (
    <div className='flex flex-col p-8 my-5 gap-8 lg:gap-[8rem] lg:px-[8rem] lg:py-[4rem]' id='blog'>
        <h1 className='text-gradient text-5xl lg:text-[6rem] font-extrabold lg:max-w-[55%]'>
            A lot is happening, 
            We are blogging about it.
        </h1>

        <div className='flex flex-col gap-5 lg:gap-5 lg:flex-row'>
            <div className='flex flex-col justify-between bg-blue-950 p-5 hover:bg-gray-800 rounded-md transition-colors duration-150 cursor-pointer lg:w-[40%] lg:full'>
                <div className='flex flex-col text-white'>
                    <img className='object-cover' src="https://media.licdn.com/dms/image/D4D12AQHuoRmTXN0zWQ/article-cover_image-shrink_720_1280/0/1683983310815?e=2147483647&v=beta&t=gXK5jUKQk_gOcGPf4pNqU9s8V-Yk3SSnb9EDpT0i0IQ" />
                    <div className='flex flex-col gap-5 my-5'>
                        <p>Sep 26, 2021</p>
                        <h1>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                    </div>
                </div>
                <div>
                    <p className='text-white'>
                        Read Full Article
                    </p>
                </div>
            </div>
            <div className='flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:w-[60%]'>
                {
                    articleInfo.map((singleArticle, index) => (
                        <Article key={index} image={singleArticle.image} date={singleArticle.date} title={singleArticle.title} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Blog
