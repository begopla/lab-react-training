import React, { useState} from 'react';
import leftArray from '../assets/images/left-arrow.png';
import rightArray from '../assets/images/right-arrow.png';

const Carousel = ({images}) => {
    
    
 const   [currentImage, setCurrentImage] = useState(0);
    const nextImageLeft = () =>{
       setCurrentImage(prevIdx => prevIdx < 3 ? ++prevIdx : prevIdx = 0);
       
    }

    const nextImageRight = () =>{
        setCurrentImage(prevIdx => prevIdx > 0 ? --prevIdx : prevIdx = 3);
       
    }

  return (
    <div className='carousel-container'>
        <img onClick={nextImageLeft} src={leftArray} className="carousel-arrow" alt= "left arrow"/>
        <img src={images[currentImage]} alt='carousel' />
        <img onClick={nextImageRight} src={rightArray} className="carousel-arrow" alt="right arrow" />
    </div>
  )
}

export default Carousel