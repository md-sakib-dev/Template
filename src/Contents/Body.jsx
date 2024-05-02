import React, { useEffect, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "../CSS/All.css";

const Body = () => {
  const Images = [
    "images/bg.jpg",
    "images/bg1.jpg",
    "images/bg2.jpg",
  ];

  const ZoomInProperties = {
    scale: 1,
    duration: 4000,
    transitionDuration: 300,
    autoplay: true,
    infinity: true,

    prevArrow: (
      <div className='ml-5 top-40 md:top-72'>
        <ArrowLeftIcon className='h-8 w-8 cursor-pointer text-gray-500' />
      </div>
    ),
    nextArrow: (
      <div className='mr-5 top-40 md:top-72'>
        <ArrowRightIcon className='h-8 w-8 cursor-pointer text-gray-500' />
      </div>
    ),
  };

  const solutionText = 'IT Solution for Your Organization';
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setAnimatedText((prevText) => {
        const nextIndex = (index + 1) % (solutionText.length + 1);
        const nextText = solutionText.slice(0, nextIndex);
        index = nextIndex;
        return nextText;
      });
    }, 300);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='w-screen h-screen'>
      <Zoom {...ZoomInProperties}>
        {Images.map((each, index) => (
          <div key={index} className='flex justify-center md:items-center items-start w-screen h-screen relative' id='home'>
            <img className='inset-0 w-full h-full object-cover brightness-50' src={each} />
            <div className='absolute md:top-16 top-0 inset-0 flex flex-col justify-center items-center text-white'>
              <div className='grid md:grid-cols-2 justify-center items-center'>
                <div className='flex flex-col justify-center gap-1 md:gap-5 ml-24'>
                  <h1 className='text-xl md:text-5xl font-normal'>
                    <span className='inline-block'>Best {animatedText}</span>
                  </h1>
                  <p className='text-md md:text-lg font-normal mt-5'>We are leading technology solutions providing company all over the world doing over 40 years.</p>
                  <div className='flex flex-col md:flex-row justify-start gap-5'>
                    <button className="text-white bg-orange-500 hover:text-black hover:bg-white hover:border-gray-400 font-semibold py-4 px-4 rounded w-[250px]">
                      All Services
                    </button>
                    <button className="text-white bg-orange-500 hover:text-black hover:bg-white w-[250px] hover:border-gray-400 font-semibold py-4 px-4 rounded">
                      All Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Body;
