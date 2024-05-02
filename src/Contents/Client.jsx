import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from '../assets/clients/alwali.png'
import pic2 from '../assets/clients/carnesia.png'
import pic3 from '../assets/clients/rookies.png'
import pic4 from '../assets/clients/sbi.png'
import pic5 from '../assets/clients/text-mart.png'
import pic6 from '../assets/clients/artisan.png'
import pic7 from '../assets/clients/woori.png'
import pic8 from '../assets/clients/rise.png'


const Client = () => {
    const Data=[
        {
           img:pic1
            
        },
        {
            img:pic2
            
        },
        {
            img:pic3
            
        },
        {
            img:pic4
            
        },
        {
            img:pic5
            
        },
        {
            img:pic6
            
        },
        {
            img:pic7
            
        },
        {
            img:pic8
            
        },
    ]
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
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
    <div className='w-full h-fit mx-auto flex flex-col justify-center items-center px-4 py-10 lg:px-20 lg:py-20 bg-customBlue gap-8' id='services'>
        <p></p>
        <h1 className='text-6xl font-normal text-cyan-400 text-center'>Our Clients</h1>
        <p className='text-xl text-center text-cyan-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corporis.</p>
        <div className='w-full h-fit'>
        <Slider {...settings}>
            {
                Data?.map((item,index)=>{
                    return(
                        <div key={index} id='slider-boxes' className='bg-white rounded-xl  flex flex-col justify-center items-center   hover:text-white transition ease-in-out duration-500 hover:scale-105'>
                           {/* <div id='icon-boxes' className='bg-orange-500 rounded-full p-4 hover:bg-cyan-500 cursor-pointer'> */}
                          <img className='w-[100px] h-[80px]' src={item.img} alt="" />
                           

                           {/* </div> */}

                        </div>
                    )
                })
            }
            </Slider>

        </div>

        </div>
  )
}

export default Client