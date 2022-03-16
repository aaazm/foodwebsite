import React from "react";


const Common = (props) => {
  return(
    <section className="comn_banner">
          <img src={props.imgsrc} />
          <h1>{props.title}</h1>
    </section>
  )
}



export default Common;