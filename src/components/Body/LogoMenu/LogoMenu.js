import drible_logo from '../../../img/logo1.png'
import leopard_logo from '../../../img/logo2.png'
import behance_logo from '../../../img/logo3.png'
import puma_logo from '../../../img/logo4.png'
import './logoMenu.css'

function LogoMenu(){
  return(
    <>
      <div className="container container-logos">
        <img src={drible_logo} alt='logo.png'/>
        <img src={leopard_logo} alt='logo.png'/>
        <img src={behance_logo} alt='logo.png'/>
        <img className='puma-logo' src={puma_logo} alt='logo.png'/>
      </div>
    </>
  );
}

export default LogoMenu;