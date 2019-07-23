import React from "react";
import {Iframe, Image, Header, Card, List, ListItem, Link, LinkCon} from "../StyledComp"




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
      <List>
        <ListItem> Cras justo odio</ListItem>
        <ListItem>Dapibus ac facilisis in</ListItem>
        <ListItem>Vestibulum at eros</ListItem>
      </List>
      <LinkCon>
        <Link href="https://www.nasa.gov/">
          Nasa's Website
        </Link>
        < Link href="https://rationalwiki.org/wiki/Moon_landing_hoax" >
          We didn't land on the Moon's people wiki
        </Link>
      </LinkCon>
    </Card>
  );



}

export default NasaCard;
