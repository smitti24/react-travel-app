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
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex justify-between items-center w-screen h-20 z-10 fixed px-4 rounded text-slate-200">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          BEACHES.
        </h1>
      </div>
      <ul className="hidden md:flex ">
        <li>
          <Link to="home" smooth={true} offset={100} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="destination" smooth={true} offset={100} duration={500}>
            Destination
          </Link>
        </li>
        <li>
          <Link to="travel" smooth={true} offset={500} duration={500}>
            Travel
          </Link>
        </li>
        <li>
          <Link to="view" smooth={true} offset={0} duration={500}>
            View
          </Link>
        </li>
        <li>
          <Link to="book" smooth={true} offset={100} duration={500}>
            Book
          </Link>
        </li>
      </ul>
      <div className="hidden md:flex mr-4">
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
          <li className="border-b" onClick={handleNav}>
            <Link to="home" smooth={true} offset={100} duration={500}>
              Home
            </Link>
          </li>
          <li className="border-b">
            <Link to="destination" smooth={true} offset={100} duration={500}>
              Destination
            </Link>
          </li>
          <li className="border-b">
            <Link to="travel" smooth={true} offset={500} duration={500}>
              Travel
            </Link>
          </li>
          <li className="border-b">
            <Link to="view" smooth={true} offset={0} duration={500}>
              View
            </Link>
          </li>
          <li className="border-b">
            <Link to="book" smooth={true} offset={100} duration={500}>
              Book
            </Link>
          </li>
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
