import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex justify-between items-center w-screen h-20 z-10 fixed px-4 rounded text-white">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          BEACHES.
        </h1>
      </div>
      <ul className="hidden md:flex ">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex ">
        <BiSearch className="mr-2" size={20} />
        <BsPerson size={20} />
      </div>
      <div className="md:hidden cursor-pointer z-10" onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 size={20} className="w-5" />
        ) : (
          <AiOutlineClose size={20} className="w-5 text-black"></AiOutlineClose>
        )}
      </div>
      <div
        onClick={handleNav}
        className={
          !nav
            ? "hidden"
            : "absolute flex flex-col w-full px-4 py-7 left-0 top-0 bg-gray-100/90 text-black"
        }
      >
        <h1>BEACHES.</h1>
        <ul>
          <li className="border-b">Home</li>
          <li className="border-b">Destination</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
