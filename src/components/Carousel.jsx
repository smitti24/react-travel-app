import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1658834951917-101ba5b8f65c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1658728942259-fca77c5b5231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1658843941585-dd447ae263c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
  },
];

function Carousel() {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-6 bg-slate-400 rounded-md"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-6 bg-slate-400 rounded-md"
      />
      {sliderData.map((item, index) => (
        <div
          key={index}
          className={index === slide ? "opacity-100" : "opacity-0"}
        >
          {index === slide && (
            <img
              className="w-[1240px] h-[800px] object-cover rounded-md"
              src={item.url}
              alt="/"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Carousel;
