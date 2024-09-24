import React from 'react';
import "../style.css";

function Navbar(){
return (
    <div className="navbar">
      <img src={`${process.env.PUBLIC_URL}/image/Globe.png`} alt="" className="logo-img"/>
      <h5 className="title">Deli's travel journal</h5>
    </div>
)
}

export default Navbar;
