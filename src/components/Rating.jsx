
const Rating = (props) => {
        let numberOfStars= Math.round(props.children);
        let stars = '';
        switch(numberOfStars){
            case 0:
            stars = '☆☆☆☆☆';
                break;
            case 1:
                stars = '★☆☆☆☆';
                break;
            case 2:
                stars = '★★☆☆☆';
                break;
            case 3:
                stars = '★★★☆☆';
                break;
            case 4:
                stars = '★★★★☆';
                break;
            case 5:
                stars = '★★★★★';
                break;
            default:
                stars = '';

        

    }

  return (
    <div className="stars-size driver">  {stars}</div>
  )
}

export default Rating