

const BoxColor = ({r,g,b}) => {

    function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

  
  return (
    // !how do you return black text for green??
    <div className='box-color'style={{backgroundColor: `rgb(${r},${g},${b})`}}>
       <p >rgb({r},{g},{b})</p> 
       <p> {rgbToHex( r,g,b)}</p>
    </div>
  )
}

export default BoxColor