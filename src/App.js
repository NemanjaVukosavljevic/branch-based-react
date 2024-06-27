import './App.css';

import React, { useState } from 'react'

function App() {

      const imagesArray = [
        { url: 'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759' },
        { url: 'https://images.unsplash.com/photo-1532009324734-20a7a5813719' },
        { url: 'https://images.unsplash.com/photo-1524429656589-6633a470097c' },
        { url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308' },
        { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f' },
        { url: 'https://images.unsplash.com/photo-1516972810927-80185027ca84' },
        { url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
        { url: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7' },
        { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d' },
        { url: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c' }
      ];

      const [currentIndex, setCurrentIndex] = useState(0);

      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? imagesArray.length - 1 : currentIndex - 1;

        setCurrentIndex(newIndex);
      }

      const nextSlide = () => {
        const isLastSlide = currentIndex === imagesArray.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;

        setCurrentIndex(newIndex);
      }
    
      
  return (
    <div className="h-screen flex justify-center items-center">
        <div className="h-[70vh] w-[40%] border relative border-red-400">
            <button onClick={prevSlide} className="absolute left-5 top-[40%] h-[5rem] text-5xl">◀</button>
            <button onClick={nextSlide} className="absolute right-5 top-[40%] h-[5rem] text-5xl">▶</button>
            <div style={{backgroundImage: `url(${imagesArray[currentIndex].url})`}} className="h-full w-full bg-center bg-cover duration-500" ></div>
        </div>
    </div>
  );
}

export default App;
