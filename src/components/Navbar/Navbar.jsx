import React from "react";
import "./Navbar.css";
export const Navbar = () => {
  // this component is should accept props to find the route and based on that we will show the navbar
  return (
    <>
  
      <div
        style={{ fontFamily: "Lexend Deca" }}
        className="nav-bar text-xs sm:text-sm  hidden sm:flex items-center justify-between h-16 p-5 w-11/12 rounded"
      >
        <div className="nav-left flex items-center nav-logo">Luxury Rentals </div>
        <div className="nav-middle flex gap-5 items-center">
          <div>Luxury Cars</div>
          <div>About us</div>
          <div>Book Now</div>
        </div>
        <div className="nav-right flex justify-center"> Login </div>
      </div>



      {/* // down mobile */}

      {/* <div className="w-full h-16 bg-indigo-300 sm:hidden flex flex-col z-10">
        <div className="h-10 flex items-center">Rental car</div>
        <div className="bg-blue-400 min-h-screen z-10 w-1/2 mt-10">
          <div className="py-3 px-2 border-b border-solid border-white">Luxury Cars</div>
          <div className="py-3 px-2 border-b border-solid border-white">About us</div>
          <div className="py-3 px-2 border-b border-solid border-white" >Book Now</div>
        </div>
      </div> */}

      <div className="mob-nav-wrapper sm:hidden block">
        <div className="w-full  bg-blue-500 h-12"> </div>
        <div className="">
          <span>Luxury car</span>
          <span>About us</span>
          <span>Book now</span>
        </div>
      </div>
    </>
  );
};
