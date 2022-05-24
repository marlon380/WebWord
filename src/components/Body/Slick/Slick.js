import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import background_slick from '../../../img/backgroundSlider.png'
import './slick.css'

function Slick(){
    const settings = {
      Infinity: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (      
      <div id="adjustDiv">
        <Slider {...settings}>
          <div >
            <img className="container-img" src={background_slick} alt='background.png' />
          </div>
          <div >
            <img className="container-img" src={background_slick} alt='background.png' />
          </div>
        </Slider>
      </div>
    );
  }

  export default Slick;