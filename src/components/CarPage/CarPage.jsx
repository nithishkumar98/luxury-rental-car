import React, { useState } from "react";
import RentalCarSearch from "../RentalCarSearch/RentalCarSearch";
import "./CarPage.css";
import Card from "../Card/Card";
import CheckboxLabels from "../CarFilterCheckbox/CarFilterCheckbox";

const carFullData = [
  {
    response: {
      filters: {
        brandFilter: {
          Mahindra: false,
          Toyota: false,
          Honda: false,
          Ford: false,
          Volkswagen: false,
          Hyundai: false,
        },
        fuelTypeFilter: {
          Petrol: false,
          Diesel: false,
          Hybrid: false,
        },
        transmissionFilter: {
          Manual: false,
          Automatic: false,
        },
        seatingCapacityFilter: {
          5: false,
          7: false,
        },
        fuelCostFilter: {
          Excluded: false,
          Included: false,
        },
      },
      carData: [
        {
          carDetails: {
            brand: "Mahindra",
            model: "XUV",
            fuelType: "Diesel",
            transmission: "Manual",
            seatingCapacity: 7,
          },
          rentalDetails: {
            rentalCompany: "Revv",
            distance: {
              unit: "kms",
              value: 5736,
            },
            fuelCostExcluded: true,
          },
        },
        {
          carDetails: {
            brand: "Mahindra",
            model: "XUV",
            fuelType: "Diesel",
            transmission: "Manual",
            seatingCapacity: 7,
          },
          rentalDetails: {
            rentalCompany: "Revv",
            distance: {
              unit: "kms",
              value: 5736,
            },
            fuelCostExcluded: true,
          },
        },
        {
          carDetails: {
            brand: "Toyota",
            model: "Corolla",
            fuelType: "Petrol",
            transmission: "Automatic",
            seatingCapacity: 5,
          },
          rentalDetails: {
            rentalCompany: "Zoomcar",
            distance: {
              unit: "kms",
              value: 4500,
            },
            fuelCostExcluded: false,
          },
        },
        {
          carDetails: {
            brand: "Honda",
            model: "CR-V",
            fuelType: "Hybrid",
            transmission: "Automatic",
            seatingCapacity: 5,
          },
          rentalDetails: {
            rentalCompany: "Drivezy",
            distance: {
              unit: "kms",
              value: 6200,
            },
            fuelCostExcluded: true,
          },
        },
        {
          carDetails: {
            brand: "Ford",
            model: "EcoSport",
            fuelType: "Petrol",
            transmission: "Manual",
            seatingCapacity: 5,
          },
          rentalDetails: {
            rentalCompany: "Myles",
            distance: {
              unit: "kms",
              value: 5100,
            },
            fuelCostExcluded: true,
          },
        },
        {
          carDetails: {
            brand: "Volkswagen",
            model: "Polo",
            fuelType: "Diesel",
            transmission: "Manual",
            seatingCapacity: 5,
          },
          rentalDetails: {
            rentalCompany: "Avis",
            distance: {
              unit: "kms",
              value: 4000,
            },
            fuelCostExcluded: false,
          },
        },
        {
          carDetails: {
            brand: "Hyundai",
            model: "Tucson",
            fuelType: "Petrol",
            transmission: "Automatic",
            seatingCapacity: 5,
          },
          rentalDetails: {
            rentalCompany: "MyChoize",
            distance: {
              unit: "kms",
              value: 5800,
            },
            fuelCostExcluded: true,
          },
        },
      ],
    },
  },
];

const filterData = carFullData[0]["response"]["filters"];
console.log(filterData);
const {
  brandFilter,
  fuelTypeFilter,
  transmissionFilter,
  seatingCapacityFilter,
  fuelCostFilter,
} = filterData;
console.log("brandFilter");
console.log(brandFilter);

const CarPage = () => {
  const initialFilter = { ...filterData };
  const [carDataCard, setCarDataCard] = useState(carFullData[0]["response"]["carData"])





  console.log(initialFilter, "initial filter");
  const [selectedFilter, setSelectedFilter] = useState(initialFilter);
  function handleCheckbox(brand, value, filter_type) {
    console.log(filter_type, " filter_type");
    console.log(brand, " brand");
    console.log(value, " value");
    setSelectedFilter((prevSelectedFilter) => ({
      ...prevSelectedFilter,
      [filter_type]: {
        ...prevSelectedFilter[filter_type],
        [brand]: value,
      },
    }));

  }
  console.log(selectedFilter, " selectedFilter");
  return (
    <div>
      <div className="car-page-wrapper min-h-screen w-full flex justify-center">
        <div style={{ width: "1250px" }} className="main-wrapper flex   ">
          <div className="left-wrapper-filter hidden sm:block  sm:w-1/4  ">
            <div className="filter-wrapper   p-5">
              <div className="filter-content  w-64  px-10 fixed overflow-y-scroll ">
                <div className="brand-filter mt-3">
                  <div className="font-bold mb-2 ">Filters</div>
                  <h2>Brand Filter</h2>
                  {Object.entries(selectedFilter.brandFilter).map(
                    ([brand, value], i) => (
                      <CheckboxLabels
                        callBackFun={handleCheckbox}
                        key={brand}
                        brand={brand}
                        filter_type={"brandFilter"}
                        value={value}
                      />
                    )
                  )}
                </div>

                <div className="fuel-type-filter mt-3">
                  <h2>Fuel Type </h2>
                  {Object.entries(fuelTypeFilter).map(([brand, value]) => (
                    <CheckboxLabels
                      callBackFun={handleCheckbox}
                      key={brand}
                      brand={brand}
                      filter_type={"fuelTypeFilter"}
                      value={value}
                    />
                  ))}
                </div>

                <div className="seating-capacity-filter mt-3">
                  <h2>Seating capacity </h2>
                  {Object.entries(seatingCapacityFilter).map(
                    ([brand, value]) => (
                      <CheckboxLabels
                        callBackFun={handleCheckbox}
                        key={brand}
                        brand={brand + " Seats"}
                        value={value}
                        filter_type={"seatingCapacityFilter"}
                      />
                    )
                  )}
                </div>

                <div className="seating-capacity-filter mt-3">
                  <h2>Transmission </h2>
                  {Object.entries(transmissionFilter).map(([brand, value]) => (
                    <CheckboxLabels
                      callBackFun={handleCheckbox}
                      key={brand}
                      brand={brand}
                      filter_type={"transmissionFilter"}
                      value={value}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="right-wrapper-cards w-full sm:w-9/12 ">
            <div className="px-5 mt-5 sticky">
              <div className="h-12 bg-blue-300 flex rounded">
                sorting
              </div>
            </div>
            <div className="car-card-wrapper p-5 flex flex-wrap gap-5">
              {carDataCard.map((c_data) => (
                <Card
                  key={Math.random() - 0.7}
                  carDetails={c_data.carDetails}
                  rentalDetails={c_data.rentalDetails}
                />
              ))}

              {carDataCard.map((c_data) => (
                <Card
                  key={Math.random() - 0.7}
                  carDetails={c_data.carDetails}
                  rentalDetails={c_data.rentalDetails}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPage;
