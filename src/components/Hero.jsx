import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import beachVid from "../assets/beachVid.mp4";

function Hero() {
  return (
    <div className="w-full h-screen relative">
      <video
        src={beachVid}
        className="w-full h-full object-cover"
        autoPlay
        loop
      ></video>
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="flex flex-col top-0 absolute w-full h-full justify-center text-center text-white p-4">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top 1% locations worldwide</h2>
        <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90">
          <div>
            <input
              className="bg-transparent w-300px sm:w-[400px] font-[Poppins] focus:outline-none pl-4"
              type="text"
              placeholder="Search Destination"
            ></input>
          </div>
          <div>
            <button>
              <AiOutlineSearch size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;
