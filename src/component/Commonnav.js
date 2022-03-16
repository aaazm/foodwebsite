import React from "react";
import {NavLink} from "react-router-dom";

const Navss = () => {
  return(
    <>
         <div className="nav_inn">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/menu">menu</NavLink>
        <NavLink to="/contact">contact</NavLink>
        </div>
    </>
  )
}

export default Navss