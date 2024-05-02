import React from 'react'
import { FaCodeBranch } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
    const Data=[
        {
            icon:FaCodeBranch,
            title:'Uixdesign',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Read More',
        },
        {
            icon:FaCodeBranch,
            title:'Uixdesign',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Read More',
        },
        {
            icon:FaCodeBranch,
            title:'Uixdesign',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Read More',
        },
        {
            icon:FaCodeBranch,
            title:'Uixdesign',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Read More',
        },
        {
            icon:FaCodeBranch,
            title:'Uixdesign',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Read More',
        },
        {
            icon:FaCodeBranch,
            title:'Uixdesign',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Read More',
        },
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow:2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='w-full h-fit mx-auto flex flex-col justify-center items-center px-4 py-10 lg:px-20 lg:py-20 bg-gray-300 gap-8' id='services'>
        <p></p>
        <h1 className='text-6xl font-normal text-black text-center'>Our Services</h1>
        <p className='text-xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corporis.</p>
        <div className='w-full h-fit'>
        <Slider {...settings}>
            {
                Data?.map((item,index)=>{
                    return(
                        <div key={index} id='slider-boxes' className='bg-white rounded-xl p-10 flex flex-col justify-center items-center  border-b-[6px] border-orange-500 hover:bg-customBlue hover:text-white transition ease-in-out duration-500 hover:scale-105'>
                           <div id='icon-boxes' className='bg-orange-500 rounded-full p-4 hover:bg-cyan-500 cursor-pointer'>
                           {item.icon && <item.icon className='w-[40px] h-[40px]'/>}
                           </div>
                           <div className='flex flex-col justify-center items-center gap-2 mt-2'>
                            <h1 className='text-2xl  font-normal'>{item.title}</h1>
                            <p className='text-[17px] text-center'>{item.para}</p>
                            <button className='bg-orange-500 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-500 hover:text-white'>{item.label}</button>

                           </div>

                        </div>
                    )
                })
            }
            </Slider>

        </div>

        </div>
  )
}

export default Services