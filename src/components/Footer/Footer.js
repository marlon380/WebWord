import group_logos from '../../img/group_logos.png'
import './footer.css'

function Footer(){
  return(
    <>
      <div className="container-footer">
        <div className="container-footer-menu">
          <div className='container-text'>
            <h3><b>Popular Post</b></h3>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
            <p id='time'>25-September 2013</p>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
            <p id='time'>25-September 2013</p>
          </div>
          <div className='container-text'>
            <h3><b>Tags</b></h3>
            <p>apps blog blogroll christmas cms coda concert daily design develop
              dialog drinks envato food fun gallery gift holiday icon illustration ipad iphone journal jquery
              label link marketing mobile motion music photo profession quotation recipes show sound strategy
              tv typography video</p>
          </div>
          <div className='container-text'>
            <h3><b>A little about us</b></h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration 
                  in some form, by injected humour, or randomised words which don't look even slightly believable. If you are 
                  going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</p>
          </div>
          <div className='container-text'>
            <h3><b>Get in touch</b></h3>
            <p>Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
            <p id='local'>Texas, US</p>
            <p id='email'>email@email.com</p>
            <p id='number'>890-09880-45590</p>
          </div>
        </div>
        <div className="container-redes">
          <p>© 2013 Web world. All rights reserved. Theme by cssautther</p>
          <img id='redes' src={group_logos} alt='logos.png'/>
        </div>
      </div>
    </>
  );
}

export default Footer;