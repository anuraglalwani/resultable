import React from "react";

import { Pie } from "@ant-design/plots";

// import "antd/dist/antd.min.css";

function DonutChart({
   colors = [],
   data = {},
   title = "",
   width = "300px",
   height = "300px",
}) {
   const config = {
      appendPadding: 10,
      data,
      angleField: "value",
      colorField: "type",
      color: colors.length !== 0 ? colors : null,
      innerRadius: 0.6,
      label: {
         offset: "-50%",
         style: {
            textAlign: "center",
            fontSize: 14,
         },
         autoRotate: false,
         content: (e) => e.value + "%",
      },
      legend: false,
      tooltip: false,
      statistic: false,
   };

   return (
      <div style={{ width, height, textAlign: "center" }}>
         <Pie {...config} />
         <p style={{ marginTop: "20px" }}>{title}</p>
      </div>
   );
}

export default DonutChart;
