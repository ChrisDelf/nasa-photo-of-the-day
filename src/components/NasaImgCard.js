import React from "react";


function NasaCard(props) {
  const {nasaTitle, nasaDate, nasaExp, youtube } = props;


  return(
    <div className ="nasa-card">

    <h2>{nasaTitle}</h2>
    <h>{nasaDate}</h>
    <p>{nasaExp}</p>
    <iframe src = {youtube} frameBorder = '0' allow='autoplay'/>

    </div>

  )



}

export default NasaCard;
