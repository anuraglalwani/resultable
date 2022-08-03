import React, { useEffect, useState } from "react";
import Row from "../Row/Row";
import "./Result.scss";
import ColorDetail from "../ColorDetail/ColorDetail";
import {handleClick} from "../../Functions/Function"

const values = [
  { id: "1", percent: "50", products: "90" },
  { id: "2", percent: "20", products: "50" },
  { id: "3", percent: "60", products: "180" },
];

const description = [
  {
    id: "1",
    color: "#ffab00",
    title:
      "Represents the missing attributes and completeness that is less than 60%",
  },
  {
    id: "2",
    color: "#d4361b",
    title:
      "Represents the missing attributes and completeness that is less than 20%",
  },
  {
    id: "3",
    color: "#3bc171",
    title:
      "Represents the missing attributes and completeness that is greater than 60%",
  },
];

function Result() {
  const [active, setActive] = useState(false);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(values);
  }, [data]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(data.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  // function handleClick(e) {
  //   const { id, checked } = e.target;
  //   console.log(id, checked);
  //   setIsCheck([...isCheck, id]);

  //   if (!checked) {
  //     setIsCheck(isCheck.filter((item) => item !== id));
  //   }
  // }
  function handleChange(e){
    handleClick(e,setIsCheck,isCheck)
  }

  function handleActive() {
    setActive(!active);
  }

  return (
    <div className="result">
      <div className="top">
        <input
          type="checkbox"
          id="myCheck"
          onChange={handleSelectAll}
          checked={isCheckAll}
        />
        <p>Import_Jio Mart_excelsheet_300SKU</p>

        {active ? (
          <span
            onClick={handleActive}
            className="material-symbols-sharp"
            data-testid="expand_less"
          >
            expand_less
          </span>
        ) : (
          <span
            onClick={handleActive}
            className="material-symbols-sharp"
            data-testid="expand_more"
          >
            expand_more
          </span>
        )}
      </div>

      {active && (
        <div className="rows" data-testid="rows">
          {data.map((value) => {
            return (
              <Row
                key={value.id}
                id={value.id}
                percent={value.percent}
                products={value.products}
                handleClick={handleClick}   
                isCheck={isCheck}
                setIsCheck={setIsCheck}             
                isChecked={isCheck.includes(value.id)}
              />
            );
          })}
        </div>
      )}

      <div className="description">
        {description.map(({ id, color, title }) => (
          <ColorDetail key={id} color={color} title={title} />
        ))}
      </div>
    </div>
  );
}

export default Result;
