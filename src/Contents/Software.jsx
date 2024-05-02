import React from 'react'
import pic1 from '../assets/software/acount1.jpg'
import pic2 from '../assets/software/card.jpg'
import pic3 from '../assets/software/chain.jpg'
import pic4 from '../assets/software/erp.jpg'
import pic5 from '../assets/software/new.jpg'

import pic6 from '../assets/software/hrm.jpg'
import pic7 from '../assets/software/hrm.jpg'

const Software = () => {
    const softwareList = [
        {
          name: 'Erp',
          description: 'Enterprise Resource Planning (ERP) is a comprehensive software solution designed to streamline and integrate business processes across various departments within an organization',
          image: pic1,
        },
        {
            name: 'Hrm',
            description: 'Human Resource Management (HRM) is a vital function within organizations that focuses on managing the human capital of an organization. ',
            image: pic2,
          }, {
            name: 'POS',
            description: 'Description of Software 1',
            image:pic3,
          }, {
            name: 'Gift Card',
            description: 'Description of Software 1',
            image: pic4,
          },
        {
          name: 'Inventory Management',
          description: 'Description of Software 2',
          image: pic5,
        },
        {
          name: 'Supply chain',
          description: 'Description of Software 3',
          image: pic6,
        },
        {
            name: 'Accounting Information',
            description: 'Description of Software 3',
            image: pic7,
          },
       
      ];    
      return (
        <div className='w-full h-fit mx-auto flex flex-col justify-center items-center px-4 py-10 lg:px-20 lg:py-20 bg-customBlue gap-8' id='blog'>
        <p></p>
        <h1 className='text-6xl font-normal text-white text-center'>Our Services</h1>
        <p className='text-xl text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corporis.</p>
        <div className='w-full h-fit grid md:grid-cols-3 gap-8'>
            {
                softwareList?.map((item,index)=>{
                    return(
                      <div>
                    
                        <div key={index}  className=' flex flex-col justify-center items-center  border-b-[6px] border-customBlue  hover:text-white transition ease-in-out duration-500 hover:scale-105'>
                           <div id='icon-boxes' className='cursor-pointer '>
                          <img src={item.image} className='w-full h-[250px] brightness-50 hover:brightness-100' alt="" />
                           </div>
                           </div>
                           <div className='flex flex-col  gap-0 mt-2'>
                            <h1 className='text-2xl text-white font-normal'>{item.name}</h1>
                            <p className='text-[17px] text-white '>{item.description}</p>
                           </div>

                        
                        </div>
                    )
                })
            }
           

        </div>

        </div>
      );
    };  

export default Software