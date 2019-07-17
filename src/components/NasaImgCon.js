import React, {useEffect, useState}from "react";
import axios from "axios";
import NasaCard from './NasaImgCard';



function NasaImgCon () {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(response => {
        console.log(response.data)
        const nasaData = response.data
        console.log("NasaData", nasaData)
         setNasaData(nasaData)
      })


  },
  [] )




  return (
    <div>

         <NasaCard
            key={nasaData}
            nasaTitle={nasaData.title}
            nasaDate={nasaData.date}
            nasaExp={nasaData.explanation}
            youtube={nasaData.url}
          />
    </div>
  );
}
export default NasaImgCon;
