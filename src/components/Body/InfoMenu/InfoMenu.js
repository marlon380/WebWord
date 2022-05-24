import pc_image from '../../../img/pc.png'
import caneta_image from '../../../img/caneta.png'
import photo_image from '../../../img/photo.png'
import './infoMenu.css'

function InfoMenu(){  
  return(
    <>
      <div className='container container-info-menu' id='about-us'>
        <div className='container-text-information'>
          <h1>LOREM IPSUM IS SIMPLY DUMMY OF THE PRINTING.</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
        </div>
        <div className='container-imgs'>
          <div>
            <img src={pc_image} alt='' />
            <h1>LOREM IPSUM IS SIMPLY</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
          </div>
          <div className='mid-img'>
            <img src={caneta_image} alt='' />
            <h1>LOREM IPSUM IS SIMPLY</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
          </div>
          <div>
            <img src={photo_image} alt='' />
            <h1>LOREM IPSUM IS SIMPLY</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoMenu;