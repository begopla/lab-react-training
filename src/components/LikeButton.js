import React from 'react'
import { useState } from 'react'
const LikeButton = () => {

   const [firstCount, setFirstCount] = useState(0);
   const [secondCount, setSecondCount] = useState(0);
   const [color, setColor] = useState("");
   const [color2, setColor2] = useState("")
    
    const generateColor1 = () =>{
        setColor(Math.random().toString(16).substr(-6));
    };
   
    const generateColor2 = () =>{
        setColor2(Math.random().toString(16).substr(-6));
    };
   


  return (
    <div>
    <button style={{backgroundColor: "#"+color}} onClick={()=>{
        setFirstCount(firstCount+1);
        generateColor1();
    }}> {firstCount} Likes </button>
    <button style={{backgroundColor: "#"+color2}} onClick={()=>{
        setSecondCount(secondCount +1)
        generateColor2();
        }} >{secondCount} Likes </button>

    </div>
  )
}

export default LikeButton