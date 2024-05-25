import React, { useState } from 'react'
import Feature from '../Components/Feature'


const Features = () => {

    const [featuresData, setFeaturesData] = useState([
        {
            title: 'ChatGPT Enhances Creative Minds',
            description: 'Unlock new potentials through creative applications of ChatGPT technology today. Expand ideas, innovate, and succeed in every task effortlessly.'
        },
        {
            title: 'Experience Unmatched AI Skills',
            description: 'Experience fluid, dynamic, and highly engaging conversations with advanced AI. Improve your communication skills and enjoy intellectual exchanges.'
        },
        {
            title: 'Revolutionize Your Learning Process',
            description: 'Revolutionize how you learn with tailored guidance from ChatGPT. Embrace personalized educational support for all subjects and levels.'
        },
        {
            title: 'Effortless Ideas with ChatGPT Magic',
            description: 'Effortlessly generate ideas and solutions using ChatGPT’s innovative capabilities. Make your projects stand out with unique insights and creativity.'
        },
    ])

  return (
    <div className='flex flex-col p-8 my-5 gap-8 lg:gap-[8rem] lg:flex-row lg:px-[8rem] lg:py-[4rem]' id='features'>
        <div className='flex flex-col gap-6 text-justify text-gradient lg:w-[40%]'>
            <h1 className='text-4xl font-bold lg:text-5xl'>
                The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
            </h1>
            <p className='text-lg font-semibold lg:text-2xl'>
                Request Early Access to Get Started
            </p>
        </div>

        <div className='flex flex-col gap-10 lg:w-[60%]'>
            {
                featuresData.map((singleFeature, index) => (
                    <Feature key={index} title={singleFeature.title} description={singleFeature.description}/>
                ))
            }
        </div>
    </div>
  )
}

export default Features
