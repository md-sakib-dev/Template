import React from 'react'
import {
    FaInstagram,
    FaFacebookF,
    FaDribbbleSquare,
    FaGithubSquare,
    FaTwitterSquare,
  } from "react-icons/fa";
  import { Link } from "react-scroll";
  

const Footer = () => {
  return (
    <div className='w-screen h-fit bg-customBlue mx-auto'>
  
    <div className=" py-5 px-4 flex flex-col md:flex-row justify-around gap-5 text-gray-300" id='contact'>
      <div className='flex flex-col justify-between items-center gap-2'>
        <h1 className="w-full font-bold text-3xl text-white text-center">Our Location</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7505659308113!2d90.37026257410058!3d23.756272688553143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf661044cb85%3A0x74e269fa0e45d81d!2sWhite%20Services%20Technology!5e0!3m2!1sen!2sbd!4v1714029275293!5m2!1sen!2sbd" width="400" height="200" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="flex justify-center gap-4 md:w-[75%] my-6">
          <FaFacebookF size={25} />
          <FaDribbbleSquare size={25} />
          <FaInstagram size={25} />
          <FaTwitterSquare size={25} />
          <FaGithubSquare size={25} />
        </div>
      </div>
      <div className="  mt-6">
        <div>
          <h6 className="font-medium text-white">Quick Links</h6>
          <ul className='flex flex-col'>
            <Link to='home' className="py-1 text-sm text-orange-500 border-b border-b-zinc-950 cursor-pointer">Home</Link>
            <Link to='blog' className="py-2 text-sm text-orange-500 border-b border-b-zinc-950 cursor-pointer">Blog</Link>
            <Link to='about' className="py-2 text-sm text-orange-500 border-b border-b-zinc-950 cursor-pointer">About</Link>
            <Link to='services' className="py-2 text-sm text-orange-500 border-b border-b-zinc-950 cursor-pointer">Services</Link>
          </ul>
        </div>   
      </div>
        <div className="mt-4">
          <h6 className="font-medium text-white">Send Us Email</h6>
          <form className="flex flex-col gap-2 mt-2">
            <input type="email" placeholder="Enter your email" className="py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500" />
            <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Send</button>
          </form>
        </div>
        <div className="">
          <p className='font-bold'> +88015-37506184</p>

        </div>
    </div>
    <p className='text-center text-white'>Copyright © 2024  - Powered by White Services</p>
    </div>
  )
}

export default Footer