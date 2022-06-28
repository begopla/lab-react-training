import React from 'react'
import { useState } from 'react'
import img from "../assets/images/maxence.png";
import imgClicked from "../assets/images/maxence-glasses.png";
const ClickablePicture = () => {
    const [showImage, setShowImage] = useState(true);
    const toggleImg = ()=> setShowImage(!showImage);

  return (
    <div>
    <img  className="clickable-image" onClick={toggleImg} src={ showImage ? img : imgClicked} alt={ showImage ? "profile" : "profile with sunglasses"}/>
    </div>
  )
}

export default ClickablePicture