import React from "react";

function SelectsCard(props) {
  return (
    <div className="relative">
      <img className="w-full h-full object-cover" src={props.bg} alt="/" />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30">
        <p className="left-4 bottom-4 text-xl text-white font-bold absolute">
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default SelectsCard;
