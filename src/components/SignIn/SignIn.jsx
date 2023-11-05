import React from "react";
import "./SignIn.css";
import signInImg from "../../assests/img/1588.jpg";
import benzBlackImg from "../../assests/img/benz black.jpg";
import porscheRedCar1 from "../../assests/img/jaguar-ftype-s-cabriolet-red (1).png";
import porscheRedCar from "../../assests/img/jaguar-ftype-s-cabriolet-red.png";
import porscheConCar from "../../assests/img/porche-convertiable.png";
import porscheSuvCar from "../../assests/img/porsche-macan.png";
// import jaguarGreyCar from '../../assests/img/jaguar-xe-grey.png'
import jaguarGreyCar from "../../assests/img/jaguar-xf-s.png";
import tyre from "../../assests/img/tyre.jpg";
// import { Formik, Form, Field, } from 'formik'
// import * as Yup from 'Yup'
// import { FormikControl } from './FormikControl'
// background-color: #e5e5f7;
// opacity: 0.7;
// background-image: radial-gradient(#444cf7 0.2px, #e5e5f7 0.2px);
// background-size: 4px 4px;

const SignIn = () => {
  return (
    <>
      <div className="sign-in-wrapper min-h-screen flex flex-wrap w-full">
        <div className="sign-in-left-wrapper sm:flex hidden w-1/2  flex-col justify-center items-center">
          {/* <img src={jaguarGreyCar}/>
          <img src={porscheRedCar}/>
          <img src={porscheRedCar1}/> */}
          <p style={{fontFamily:"Righteous"}} className="text-gray-500 pl-20 text-6xl"> Luxury Rentals: Drive Like Royalty</p>
          <img className="flex justify-center pl-10" src={porscheConCar} />
          {/* <img src={porscheSuvCar}/> */}
        </div>
        <div
          style={{ fontFamily: "Lexend Deca" }}
          className="sign-in-right-wrapper flex flex-col items-center w-full sm:w-1/2 z-3  "
        >
          <div className="flex flex-col sign-in-right-inner-wrapper p-16   justify-center gap-2  mt-32">
            <button
              className=" bg-blue-600 text-white py-1 px-10 rounded"
              type="button"
            >
              {" "}
              Sign in with Google{" "}
            </button>
            <span className="flex justify-center"> or </span>
            <span className="border border-b-10 border-grey flex justify-center">
              {" "}
            </span>
            {/* <img style={{}} src={tyre } className="w-60 h-90 absolute opacity-4"/> */}
            <label className=" text-slate-800"> Username</label>
            <input
              className="border border-1 px-3 py-1 rounded mb-3"
              type="text"
            />
            <label className=" text-slate-800"> Password</label>
            <input className="border border-1 px-3 py-1 rounded" type="text" />
            <button className=" bg-blue-600 text-white py-2 px-3 rounded mt-3">
              {" "}
              Sign in{" "}
            </button>
            <div className="flex justify-center google-signin"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
