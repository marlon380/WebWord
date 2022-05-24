import logo from '../../img/logo.png'
import './header.css'
import {useState} from "react";
import {isMobile} from 'react-device-detect';
import {animateScroll as scroll } from "react-scroll";

function Header(){
  const url = [{home: '#home', about_us: '#about-us', service: '', pages:'', blog: '', contact:''}]; 
  const[active, setActive] = useState(true);
  const onShow = () => {
    setActive(!active)
  };
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  }
  const scrollToAboutUs = () => {
    scroll.scrollTo(600);
};
const scrollToService = () => {
  scroll.scrollTo(1500);
};
const scrollToPages = () => {
  scroll.scrollTo(2000);
};

if(isMobile){ return(
  <>
  <div id='content-nav'>
    <nav>
      <img className='logo' src={logo} alt='logo.png' />
      <div className='mobile-menu' onClick={onShow}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>

      <ul className={active ? 'nav-list-none' : 'nav-list'}>
        <li><a href={url.home} onClick={scrollToTop}>Home</a></li>
        <li><a href={url.about_us}>About Us</a></li>
        <li><a href={url.service}>Service</a></li>
        <li><a href={url.pages}>Pages</a></li>
        <li><a href={url.blog} onClick={scrollToBottom}>Blog</a></li>
        <li><a href={url.contact} onClick={scrollToBottom}>Contact</a></li>
      </ul>
    </nav>
    </div>
    </>
);}
else{
  return(
    <>
    <div>
      <nav>
        <img className='logo' src={logo} alt='logo.png' onClick={scrollToTop}/>
        <div className='mobile-menu' onClick={onShow}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>

        <ul className={active ? 'nav-list' : 'nav-list-none'}>
          <li><a href={url.home}  onClick={scrollToTop}>Home</a></li>
          <li><a href={url.about_us} onClick={scrollToAboutUs}>About Us</a></li>
          <li><a href={url.service} onClick={scrollToService}>Service</a></li>
          <li><a href={url.pages} onClick={scrollToPages}>Pages</a></li>
          <li><a href={url.blog} onClick={scrollToBottom}>Blog</a></li>
          <li><a href={url.contact} onClick={scrollToBottom}>Contact</a></li>
        </ul>
      </nav>
      </div>
      </>
  );
}
}

export default Header;