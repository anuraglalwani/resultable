import React from 'react'

export function handleClick(e, setIsCheck, isCheck)  {
    console.log(isCheck)
    console.log(e.target)
   const { id, checked } = e.target;
    console.log(id, checked);
    setIsCheck([...isCheck, id]);

    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
}
