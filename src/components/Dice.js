import React from 'react'
import { useState } from 'react'

import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
const diceImg =[diceEmpty,dice1,dice2,dice3,dice4,dice5,dice6];




const Dice = () => {
    let randomNumber = Math.floor(Math.random()*7);
    const [diceType, setDiceType]=useState(diceImg[randomNumber]);
    
    const toggleImg = ()=>{
        setDiceType(diceEmpty);
        setTimeout(()=>{
            setDiceType(diceImg[randomNumber]);
        },1000);
}
  return (
    <div>
    <img onClick={toggleImg} className='dice-image' src={diceType} alt='dice'/>
    
    </div>
  )
}

export default Dice