import React from "react";
import image from '../accesst/images (1).jpeg'

function Card(props) {
	console.log("Hello propse Value : ", props.userName )
  return (
    <>
      <div className="relative h-[400px] w-[300px] rounded-md bg-indigo-700 ml-5">
        <img
          src={image}
          alt="AirMax Pro"
          className="z-0 h-full w-full  rounded-md object-cover"
        />
        <div className="absolute insert-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{props.userName ? props.userName :  " Hello Mathankar"  } </h1>
          <p className="nt-2 text-sm text-gray-300">
		  {props.description} ,{" "}
          </p>
          <button className="nt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Profile <span aria-hidden="true">&rarr;</span>{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
