import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo1.png";
import { Link } from "react-scroll";


const Header = () => {
  function scrollToFooter() {
    document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
}
  const [nav, setNav] = useState(false);
  const Links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "blog",
    },
    {
      id: 4,
      link: "services",
    },
    {
      id: 5,
      link: "features",
    },
    {
      id: 6,
      link: "testimonial",
    },
   
  ];
  return (
    <div className="max-w-screen h-20 mx-auto bg-customBlue text-white fixed top-0 left-0 right-0 z-50">
    <div className="flex justify-around items-center">
      <div className="md:w-[180px] w-[120px]">
        <img src={logo} alt="" />
      </div>
      <div>
      <ul className="hidden md:flex relative">
  {Links?.map(({ id, link }) => {
    return (
      <li
        key={id}
        className="relative px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-500 text-white hover:text-orange-500 "
      >
        <Link to={link} smooth duration={500}> 
           {link}
           </Link>
        {/* Dots for hover effect */}
        <div className="flex justify-center">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </li>
    );
  })}
</ul>
      </div>

      <div>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70} // Adjust this offset if needed
        duration={500}
        className="text-white bg-orange-400 hover:text-black hover:bg-white hover:border-gray-400 cursor-pointer font-normal py-4 px-4 rounded"
      >
        Contact Us
      </Link>
      </div>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-start gap-2 items-center fixed top-20 left-0 w-[70%] h-screen bg-gradient-to-b from-blue-300 via-blue-500 to-pink-400 text-white ease-in-out duration-1000"
        >
          {Links?.map((i) => {
            return (
              <li
                key={i.id}
                className="px-4 cursor-pointer capitalize py-4 text-4xl border-b border-b-gray-700 "
              >
                <Link
                  onClick={() => {
                    setNav(!nav);
                  }}
                  to={i.link}
                  smooth
                  duration={500}
                >
                  {i.link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  </div>
  );
};

export default Header;
