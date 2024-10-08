import React, { useContext } from "react";
import Cards from "./Cards";
import ThemeContext from "../Context/ThemeContext";

const Details = ({ details }) => {
  const { darkMode } = useContext(ThemeContext);

  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCaptization: "Market Caplitalization",
    finnhubIndustry: "Industry",
  };

  const convertMilliontoBillion = (number) => {
    return (number / 1000).toFixed(2);
  };
  return (
    <Cards>
      <ul
        className={`w-full h-full flex flex-col justify-between divide-y-1 overflow-y-auto ${
          darkMode ? "divide-gray-800" : null
        }`}
      >
        {Object.keys(detailsList).map((item) => {
          return (
            <li key={item} className="flex-1 flex justify-between items-center">
              <span>{detailsList[item]}</span>
              <span className="text-sm xl:text-md 2xl:text-md flex">
                {item === "marketCapitalization"
                  ? ` ${convertMilliontoBillion(details[item])}B`
                  : details[item]}
              </span>
            </li>
          );
        })}
      </ul>
    </Cards>
  );
};

export default Details;
