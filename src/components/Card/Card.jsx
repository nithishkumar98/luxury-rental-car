import React from "react";
import Homecar from "../../assests/img/1598.png";
import './Card.css'
import { Button } from "@mui/material";
const Card = ({carDetails, rentalDetails}) => {
  return (
    <>
      <div className="card-outer-wrapper w-52 h-62 pb-1 rounded ">
        <div style={{ fontFamily: "asap" }} className="p-2 card-wrapper">
          <div className="card-first h-2/3 ">
            <img className="flex justify-center " src={Homecar} />
          </div>
          <div className="card-second h-2/5">
            <div className="brand model flex flex-col">
              <span style={{fontSize:"10px"}} className="">{carDetails.brand}</span>
              <span className="text-sm">{carDetails.model}</span>
            </div>
            <div  style={{fontSize:"10px"}} className="mt-1 flex justify-between">
              <span>{carDetails.fuelType}</span>
              <span>{carDetails.transmission}</span>
              <span>{carDetails.seatingCapacity + " " + "Seats"} </span>
            </div>
            <div className="price-and-button mt-2 mb-2 flex justify-between">
              <div className="Price">
                <span className="text-bold text-xl">{ "$ " +rentalDetails.distance.value}</span>
              </div>
              <div className="">
                {/* <button className="btn">Book Car</button> */}
                <Button className="h-7" style={{textTransform: 'none'}} variant="contained">Book Car </Button>
              </div>
            </div>
            <div style={{fontSize:"10px"}} className="some-text ">
              <p>{rentalDetails.fuelCostExcluded ? "Fuel cost included" : "Fuel cost not included"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
