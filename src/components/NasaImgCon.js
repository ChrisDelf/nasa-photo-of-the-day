import React, {useEffect, useState}from "react";
import axios from "axios";
import NasaCard from './NasaImgCard';



function NasaImgCon () {
  const [nasaImg, setNasaImage] = useState([]);
useEffect(() => {
  axios.get('https://dog.ceo/api/breed/shiba/images/random')
    .then(response => {
      console.log('doggos test', response.data.message);
      const images = response.data.message;
      setNasaImage(images);

  });
 }, [] );



  return (
    <div>
      Hello
   <NasaCard key = {nasaImg} nasaUrl = {nasaImg} />
    </div>
  );}

export default NasaImgCon;
