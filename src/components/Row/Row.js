import React, { useEffect, useState } from "react";
import "./Row.scss";
import {handleClick} from "../../Functions/Function"

function Row({ id, percent, products, isChecked, isCheck, setIsCheck}) {
  const [color, setColor] = useState();
  const [bgColor, setBgcolor] = useState();
  
  useEffect(() => {
    if (percent >= 60) {
      setColor("green-color");
      setBgcolor("bg-green");
    } else if (percent <= 20) {
      setColor("red-color");
      setBgcolor("bg-red");
    } else {
      setColor("orange-color");
      setBgcolor("bg-orange");
    }
  }, [percent]);

  return (
    <div className={"row " + color + " " + (isChecked ? bgColor : "")}>
      <input
        data-testid= {"row-checkbox"}
        type="checkbox"
        id={id}
        className="row-input"
        onChange={(e)=>handleClick(e,isCheck, setIsCheck)}
        checked={isChecked}
      />

      <h3>{percent}%</h3>
      <p>{products} Products</p>
      <span className="material-symbols-sharp">edit</span>
    </div>
  );
}

export default Row;
