import carro_img from '../../../img/menu 4/carro.png'
import arvore_img from '../../../img/menu 4/arvore.png'
import campo_img from '../../../img/menu 4/campo.png'
import gramado_img from '../../../img/menu 4/gramado.png'
import paisagem_img from '../../../img/menu 4/img6.png'
import pote_img from '../../../img/menu 4/pote.png'
import './infoMenu2.css'

function infoMenu2(){
  return(
    <>
    <div className='container-menu2'>
      <div className='row container-imgs-column1'>
        <div>
          <img src={carro_img} alt='carro.png'/>
          <h1>Lorem Ipsum is simply</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
        </div>
        <div>
          <img src={arvore_img} alt='arvore.png'/>
          <h1>Lorem Ipsum is simply</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
        </div>
        <div>
          <img src={campo_img} alt='campo.png'/>
          <h1>Lorem Ipsum is simply</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
        </div>
      </div>
      <div className='row container-imgs-column2'>
      <div>
          <img src={gramado_img} alt='gramado.png'/>
          <h1>Lorem Ipsum is simply</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
        </div>
        <div>
          <img src={paisagem_img} alt='paisagem.png'/>
          <h1>Lorem Ipsum is simply</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
        </div>
        <div>
          <img src={pote_img} alt='pote.png'/>
          <h1>Lorem Ipsum is simply</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default infoMenu2;