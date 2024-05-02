import React, { useState, useEffect } from 'react';
import pic from '../assets/pic2.png'

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Set visibility to true after a delay to trigger the animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='md:w-screen md:h-screen w-screen h-fit flex flex-col justify-center items-center gap-10  bg-gray-300' id='about'>
   <h1
        className={`md:text-5xl text-2xl  text-black font-normal text-center ${isVisible ? 'transition-transform translate-x-0 opacity-100 duration-1000 ease-out' : 'opacity-0 translate-x-[-100%]'} mt-10 md:mt-16`}
      >
        Why Choose US ?..
      </h1>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5 md:gap-20 items-center text-white">
        {/* Image Section */}
        <div>
          <img
            src={pic} // Replace with the path to your image
            alt="About Us"
            className="w-full h-auto rounded-lg "
          />
        </div>
        {/* Text Section */}
        <div className="text-lg text-black text-center">
          <h2 className="text-3xl font-bold mb-4">About Our IT Firm</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet magna eu ipsum
            scelerisque tempus. Nunc posuere nisi sit amet lorem tempus, vitae suscipit purus
            finibus. Vivamus euismod euismod dui at placerat. Donec consequat sagittis elit,
            euismod consectetur ante lacinia sit amet.
          </p>
          <p className="mt-4">
            In hac habitasse platea dictumst. Morbi non urna massa. Nulla vitae malesuada est.
            Aliquam erat volutpat. Curabitur ut nisl dui. Nulla facilisi. Nullam laoreet
            hendrerit magna, ut fringilla enim fermentum nec.
          </p>
        </div>
      </div>
  </div>
  )
}

export default About