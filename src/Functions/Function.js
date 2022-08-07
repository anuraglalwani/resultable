import React from 'react'

export function handleClick(e, isCheck, setIsCheck) {
  // console.log(isCheck)
  // console.log(e.target)
  const { id, checked } = e.target;
  // console.log(id, checked);
  setIsCheck([...isCheck, id]);

  if (!checked) {
    setIsCheck(isCheck.filter((item) => item !== id));
  }
}

export function handleSelectAll (setIsCheckAll,isCheckAll,setIsCheck,data)  {
  
  setIsCheckAll(!isCheckAll);
  setIsCheck(data.map((li) => li.id));
  if (isCheckAll) {
    setIsCheck([]);
  }
};

export function handleActive(active,setActive) {
  setActive(!active);
}

export function setRowData(setData,data){
  setData(data);
}
