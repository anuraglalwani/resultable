import React from 'react';
import "./SourceCard.scss";
function SourceCard({logo}) {
  return (
    <div className="source-card"><img src={logo} alt="" height="100px" width='200px' /></div>
  )
}

export default SourceCard