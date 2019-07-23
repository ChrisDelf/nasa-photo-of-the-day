import React, {useEffect, useState}from "react";
import axios from "axios";
import NasaCard from './NasaImgCard';





function NasaImgCon () {
  // const [nasaData, setNasaData] = useState([]);
  //
  // useEffect(() => {
  //   axios
  //     .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
  //     .then(response => {
  //       console.log(response.data)
  //       const nasaData = response.data
  //       console.log("NasaData", nasaData)
  //        setNasaData(nasaData)
  //     })
  //
  //
  // },
  // [] )


  // Too many api request were made so I had to input the infromation another way.
const [nasaData, setNasaData] = useState([]);
useEffect(() => {
const data =
  { date: "2019-07-18",
    hdurl: "https://apod.nasa.gov/apod/image/1907/moon_eclipse_span.jpg",
    media_type: "image",
    service_version: "v1",
    date: "2019-07-18",
    explanation:"On July 16 the Moon celebrated the 50th anniversary of the launch of Apollo 11 with a lunar eclipse visible from much of planet Earth. In this view part of the lunar disk is immersed in Earth's dark, reddened umbral shadow. Near the maximum eclipse phase, it just touches down along a mountain ridge. The rugged Tyrolean nightscape was recorded after moonrise south of Innsbruck, Austria with a dramatically lit communication tower along the ridgeline. Of course eclipses rarely travel alone. This partial lunar eclipse was at the Full Moon following July 2nd's New Moon and total eclipse of the Sun.",

    title: "Shadowed Moon and Mountain",
    url: "https://apod.nasa.gov/apod/image/1907/moon_eclipse_span1066.jpg", }


console.log("data", data)
setNasaData(data)
}, [] )


  return (
    <div>

    <NasaCard
        key={nasaData}
        nasaTitle={nasaData.title}
        nasaDate={nasaData.date}
        nasaExp={nasaData.explanation}
        nasaUrl={nasaData.url}
        nasaType={nasaData.media_type}
      />
    </div>
  );
}
export default NasaImgCon;
