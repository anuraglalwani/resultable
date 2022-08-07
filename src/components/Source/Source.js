import React from 'react'
import { useState } from 'react';
import SourceCard from './SourceCard/SourceCard';
import Amazon from "./svg/Amazon.svg"
import Fipkart from "./svg/Flipkart.svg";
import Meesho from "./svg/Meesho.svg";
import Myntra from "./svg/Myntra.svg"
import "./Source.scss";
function Source() { 
    
    const [sources,setSources]= useState([Amazon,Fipkart,Myntra,Meesho]);
    
  return (
    <div className='source'>
    {sources.map((source,i)=> ( <SourceCard logo={source} key={i}/>)
     )}            
    </div>
  )
}

export default Source