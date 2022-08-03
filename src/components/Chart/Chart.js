import React from "react";
import DonutChart from "../DonutChart/DonutChart";

const data = [
   {
      type: "Some missing",
      value: 50,
   },
   {
      type: "Category 2",
      value: 30,
   },
   {
      type: "Category 3",
      value: 20,
   },
];
const colors = ["#3bc171", "#ffab00", "#d4361b"];
const Chart = () => (
   <>
      <DonutChart
         data={data}
         colors={colors}
         title="Pie Chart of JioMart_ExcelSheet"
      />
   </>
);

export default Chart;
