import React from 'react'

const NumbersTable = ({limit}) => {
 
  const numberList = Array.from( {length: limit}, (_,index) => index+1);
  
  return (
    <div className="number-list">
    
      {numberList.map((number) => {
        if (number % 2 === 0) {
          return (
            <div
              key={number}
              className ='par-box'
             >
              {number}
            </div>
          );
        } else {
          return (
            <div
              key={number}
             className ='impar-box'
            >
              {number}
            </div>
          );
        }
      })}
    </div>
  );
};


export default NumbersTable