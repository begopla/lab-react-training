import React, {useState} from 'react'
import profiles from '../data/berlin.json'

const FaceBook = () => {
   const [showText, setShowtext] = useState(true);
   const [countrySelected, changeCountrySelected] = useState(null);
   const toggleinformation = () =>{
    setShowtext(!showText);
    }

    const showCountryUsers = (e) =>{
        let country = e.target.innerHTML;
        changeCountrySelected(country);
    }

    
    console.log(countrySelected)
  return (
      <div className='facebook-container'>

      <div className='button-container'>

      <button onClick ={ showCountryUsers}>All</button>
      <button onClick ={ showCountryUsers}>England</button>
      <button onClick ={ showCountryUsers}>USA</button>
      <button onClick ={ showCountryUsers}>Malaysia</button>
      <button onClick ={ showCountryUsers}>Germany</button>
      <button onClick ={ showCountryUsers}>...</button>
      </div>
      <br />
        {profiles.map((user)=>{
                
            return(
                <div key={user.firstName} className={ user.country === countrySelected ? 'user-picture add-background' :'user-picture'} >
                <picture >
                    <img  src={user.img} onClick ={toggleinformation} alt={user.firstName} style={{width: '10vw'}} />
                </picture>
                <div className={showText ? 'text-container red' : 'text-container'} onClick ={toggleinformation}>{showText ? ' See details' : ' '}
                <h4 className={showText ? 'toggle-view': 'text'}>First name: <span className='text-property'> {user.firstName}</span></h4>
                <h4 className={showText ? 'toggle-view': 'text'}>Last name: <span className='text-property'> {user.lastName}</span></h4>
                <h4 className={showText ? 'toggle-view': 'text'}>Country: <span className='text-property'> {user.country}</span></h4>
                <h4 className={showText ? 'toggle-view': 'text'}>Type: <span className='text-property'> {user.isStudent ? "student" : " "}</span></h4>
                </div>
                
                </div>
            )
        })}

     
    </div>
  )
}

export default FaceBook