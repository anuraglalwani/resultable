import React from 'react'
import "./ColorDetail.scss"
function ColorDetail({color,title}) {
  return (
    <div className='color-detail'>
     <div className='box' style={{backgroundColor:`${color}`}}></div>
     <p>{title}</p> 
    </div>
  )
}

export default ColorDetail