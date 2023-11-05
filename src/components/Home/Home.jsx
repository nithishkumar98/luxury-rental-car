import React from "react";
import "./Home.css";
import RentalCarSearch from "../RentalCarSearch/RentalCarSearch";

const Home = () => {
  return (
    <div>
      <div className="home-wrapper min-h-screen flex flex-wrap w-full">
        <div className="mt-32 rental-car-search-wrappper-home  mx-20">
          <RentalCarSearch />
        </div>
      </div>
    </div>
  );
};

export default Home;
