//using api

// import React, {  useState ,useEffect, useContext } from "react";
// import { mockHistoricalData } from "../Constant/mock";
// import {
//   Area,
//   AreaChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
// import Cards from "./Cards";
// import { convertDateToUnixTimestamp, convertUnixtimestamptoDate , createDate } from "../Helper/data-helper";
// import { chartConfig } from "../Constant/config";
// import ChartFilter from "./ChartFilter";
// import ThemeContext from "../Context/ThemeContext";
// // import { fetchHistoricalData } from "../api/stock-api";
// import StockContext from "../Context/StockContext";


// const Chart = () => {
//   const [data, setData] = useState(mockHistoricalData);
//   const [filter, setFilter] = useState("1W");

//   const { darkMode } = useContext(ThemeContext);
//   const { stockSymbol } = useContext(StockContext);

//   const formatData = (data) => {
//     return data.c.map((item, index) => {
//       return {
//         value: item.toFixed(2),
//         date: convertUnixtimestamptoDate(data.t[index]),
//       };
//     });
//   };
  
//   // useEffect(() => {
//   //   const getDateRange = () => {
//   //     const {days , weeks , months, years} = chartConfig[filter];
//   //     const endDate = new Date();
//   //     const startDate = createDate(endDate , -days , -weeks , -months , -years);

//   //     const startTimestampsUnix = convertDateToUnixTimestamp(startDate);
//   //     const endTimestampsUnix = convertDateToUnixTimestamp(endDate);
//   //     return {startTimestampsUnix , endTimestampsUnix};
//   //   };

//   //   const updateChartData = async() => {
//   //     try {
//   //       const {startTimestampsUnix , endTimestampsUnix} = getDateRange();
//   //       const resolution = chartConfig[filter].resolution;
//   //       const results =await fetchHistoricalData(stockSymbol, resolution, startTimestampsUnix , endTimestampsUnix);
//   //       setData(formatData(results));

//   //     } catch (error) {
//   //       setData([]);
//   //       console.log(error);
//   //     }
//   //   };
//   // updateChartData();
//   // }, [stockSymbol , filter])
  
  
//   return (
//     <Cards>
//       {/* <ul className="flex absolute top-2 right-2 z-40">
//         {Object.keys(chartConfig).map((item) => (
//             <li key={item}>
//               <ChartFilter
//                 text={item}
//                 active={filter === item}
//                 onClick={() => {
//                   setFilter(item);
//                 }}
//               />
//             </li>   
//         ))}
//       </ul> */}
//       <ResponsiveContainer>
//         <AreaChart data={formatData(data)}>
//           <defs>
//             <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
//               <stop
//                 offset="5%"
//                 stopColor="rgb(199 210 254)"
//                 // stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
//                 stopOpacity={0.8}
//               />
//               <stop offset="95%" 
//                stopColor="rgb(199 210 254)"
//               // stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
//                stopOpacity={0} />
//             </linearGradient>
//           </defs>
//           <Tooltip contentStyle={darkMode? {backgroundColor: '#111827'} :null}
//           itemStyle={darkMode ? {color:"#818cf8"} : null} />
//           <Area
//             type="monotone"
//             dataKey="value"
//             stoke="#312e81"
//             fillOpacity={1}
//             strokewidth={0.5}
//             full="url(#chartColor)"
//           />

//           <XAxis dataKey={"date"} />
//           <YAxis domain={["dataMin", "dataMax"]} />
//         </AreaChart>
//       </ResponsiveContainer>
//     </Cards>
//   );
// };

// export default Chart;

//using mockdata

import React, {  useState , useContext } from "react";
import { mockHistoricalData } from "../Constant/mock";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Cards from "./Cards";
import {  convertUnixtimestamptoDate  } from "../Helper/data-helper";
import { chartConfig } from "../Constant/config";
import ChartFilter from "./ChartFilter";
import ThemeContext from "../Context/ThemeContext";



const Chart = () => {
  const [data, setData] = useState(mockHistoricalData);
  const [filter, setFilter] = useState("1W");
  const { darkMode } = useContext(ThemeContext);

  const formatData = () => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixtimestamptoDate(data.t[index]),
      };
    });
  };
  
  // useEffect(() => {
  //   const getDateRange = () => {
  //     const {days , weeks , months, years} = chartConfig[filter];
  //     const endDate = new Date();
  //     const startDate = createDate(endDate , -days , -weeks , -months , -years);

  //     const startTimestampsUnix = convertDateToUnixTimestamp(startDate);
  //     const endTimestampsUnix = convertDateToUnixTimestamp(endDate);
  //     return {startTimestampsUnix , endTimestampsUnix};
  //   };

  //   const updateChartData = async() => {
  //     try {
  //       const {startTimestampsUnix , endTimestampsUnix} = getDateRange();
  //       const resolution = chartConfig[filter].resolution;
  //       const results =await fetchHistoricalData(stockSymbol, resolution, startTimestampsUnix , endTimestampsUnix);
  //       setData(formatData(results));

  //     } catch (error) {
  //       setData([]);
  //       console.log(error);
  //     }
  //   };
  // updateChartData();
  // }, [stockSymbol , filter])
  
  
  return (
 
      <Cards >
        <ul className="flex absolute top-2 right-2  z-40">
          {Object.keys(chartConfig).map((item) => (
              <li key={item}>
                <ChartFilter
                  text={item}
                  active={filter === item}
                  onClick={() => {
                    setFilter(item);
                  }}
                />
              </li>   
          ))}
        </ul>
        <ResponsiveContainer className='mt-10 py-3'>
          <AreaChart data={formatData(data)}>
          <defs>
              <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
  
            <Area
              type="monotone"
              dataKey="value"
              stroke="#312e81"
              fillOpacity={1}
              strokeWidth={0.5}
              fill="url(#chartColor)"
            />
            <Tooltip
              contentStyle={darkMode ? { backgroundColor: "#111827" } : null}
              itemStyle={darkMode ? { color: "#818cf8" } : null}
            />
  
            <XAxis dataKey={"date"} />
            <YAxis domain={["dataMin", "dataMax"]} />
          </AreaChart>
        </ResponsiveContainer>
      </Cards>
  
  );
};

export default Chart;


