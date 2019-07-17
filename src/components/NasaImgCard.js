import React from "react";


function NasaCard(props) {
const {nasaUrl} = props;


  return(
    <div className ="nasa-card">
      <img src={nasaUrl}>

      </img>
    </div>

  )



}

export default NasaCard;
