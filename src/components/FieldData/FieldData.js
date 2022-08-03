import { Input } from "antd";

import "antd/dist/antd.min.css";
import React from "react";
import "./FieldData.scss";
function FieldData({ title, disable, head }) {
   
  return (
    <Input  style={  head && { paddingRight:"120px"}}  placeholder={title} disabled={disable} />
  );
}

export default FieldData;
