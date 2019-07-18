import React from "react";


function NasaCard(props) {
  const
  {nasaTitle, nasaDate,
    nasaExp, nasaUrl,
    nasaType } = props;


  return (
    <div className="nasa-card">
      <h2 className="App-header">{nasaTitle}</h2>
      <h>{nasaDate}</h>
      <p>{nasaExp}</p>
   { nasaType === 'video' ? <iframe
        src={nasaUrl}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
       />: <img src = {nasaUrl}/>}
    </div>
  );



}

export default NasaCard;
