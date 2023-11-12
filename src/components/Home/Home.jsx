import React from "react";
import "./Home.css";
import RentalCarSearch from "../RentalCarSearch/RentalCarSearch";
import { Navbar } from "../Navbar/Navbar";
import SignIn from "../SignIn/SignIn";

const Home = () => {
  return (
    <div className="home-wrapper h-screen ">
      <div className="component-wrapper flex justify-center">
        <Navbar />
      </div>
      {/* <SignIn /> */}
      <div className="mt-5 px-10">
        <RentalCarSearch />
      </div>
    </div>
  );
};

export default Home;
