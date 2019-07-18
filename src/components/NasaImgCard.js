import React from "react";
import {Iframe, Image} from "../StyledComp"




function NasaCard(props) {
  const
  {nasaTitle, nasaDate,
    nasaExp, nasaUrl,
    nasaType } = props;


  return (
    <div className="nasa-card">
      <h2 className="App-header">{nasaTitle}</h2>
      <h1>{nasaDate}</h1>
      <p>{nasaExp}</p>
   { nasaType === 'video' ? <iframe
        src={nasaUrl}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
       />: <Image src = {nasaUrl}/>}
    </div>
  );



}

export default NasaCard;
