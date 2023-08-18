import React from "react";
import { FiPhone, FiMail } from "react-icons/fi"; 
import Logo from "../assets/nobg.png";
import UniversityLogo from "../assets/nobgit.png"; 

const Footer = () => {
  return (
    <div className="transition ease-in-out w-full text-black dark:text-white bg-gray-100 dark:bg-black p-6 flex flex-col gap-2 text-sm">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex items-center gap-2 text-center"> 
          <a href="https://www.facebook.com/phinmaupang"> 
            <img
              src={Logo}
              alt="/"
              className="w-20 h-20" 
            />
          </a>
          <a href="https://www.facebook.com/phinma.upang.citesc"> 
            <img
              src={UniversityLogo}
              alt="University of Pangasinan Logo"
              className="w-20 h-20" 
            />
          </a>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-xs font-semibold">Phinma - University of Pangasinan</p>
          <p className="text-xs font-semibold">College of Information Technology</p>
          <p className="text-xs">Contact us: </p>
          <a
            href="tel:09173911931"
            className="text-xs flex items-center hover:underline"
          >
            <FiPhone className="mr-1" /> Phone: 09173911931
          </a>
          <a
            href="mailto:joeytorio162002@gmail.com"
            className="text-xs flex items-center hover:underline"
          >
            <FiMail className="mr-1" /> Email: joeytorio162002@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
