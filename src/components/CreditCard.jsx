import visaImage from '../assets/images/visa.png'
import masterCard from '../assets/images/mastercard-logo.png'

//rafce shorcut 


const CreditCard = ({type,number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    let cardLogo;
    switch (type) {
        case 'Visa':
            cardLogo = visaImage;
            break;
        case 'Master Card':
            cardLogo = masterCard;
            break;
        default:
            cardLogo = visaImage;
    } 
   function checkMonth(expirationMonth){
    if(expirationMonth<10){
        return('0'+expirationMonth);
    }
    else return expirationMonth;
   }
    return (
    <div className="credit-card" style={{backgroundColor: `${bgColor}`}}>
        <img id='card-logo'  src={cardLogo} alt="card type"></img>
        <p className='card-number'><span>.... .... ....</span> {number.slice(12)}</p>
        <div className='text-box'>
        <p className='expiration-numbers'>Expires {checkMonth(expirationMonth)}/{expirationYear.toString().slice(2)}</p>
        <p className='bank-name'>{bank}</p>
        </div>
        <p className='card-name'>{owner}</p>
    </div>
  )
}

export default CreditCard