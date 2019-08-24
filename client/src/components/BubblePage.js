import React, { useState, useEffect } from "react";
import axiosWithAuth from "../components/axiosWithAuth.js";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

 useEffect(() => {
  getColors()
  }, []); 

 const getColors = () => {
  axiosWithAuth()
  .get("http://localhost:5000/api/colors")
  .then(res => {
    setColorList(res.data)
  })
  .catch(error => {
    console.log("ERROR", error)
  })
 }

  return (
    <>
      <ColorList getColors={getColors} colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
