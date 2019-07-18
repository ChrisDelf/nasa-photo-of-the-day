import React from "react";
import {Iframe, Image, Header, Card} from "../StyledComp"




function NasaCard(props) {
  const
  {nasaTitle, nasaDate,
    nasaExp, nasaUrl,
    nasaType } = props;


  return (
    <Card>
      {nasaType === 'video' ? (
        <Iframe
          src={nasaUrl}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      ) : (
        <Image src={nasaUrl} />
      )}
      <div>
        <Header> {nasaTitle}</Header>
        <p className="card-text">{nasaExp} </p>
      </div>
      <ul>
        <li> Cras justo odio</li>
        <li>Dapibus ac facilisis in</li>
        <li>Vestibulum at eros</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </Card>
  );



}

export default NasaCard;
