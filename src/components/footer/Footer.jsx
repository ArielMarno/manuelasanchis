import './footer.css';
import arrow from '..//..//assets/arrows/arrow-up-right.png';
import arrowup from '..//..//assets/arrows/arrow-up.png';

import be from '..//../assets/socials/behance.webp';
import ig from '..//../assets/socials/ig.webp';
import wsp from '../../assets/socials/wp.webp';
import lkn from '..//../assets/socials/linkedin.webp';
import email from '..//../assets/socials/email.webp';

const Footer = () => {
  return (
    <div className='footer' id='contacto'>
        <div className='footer-title'>
            <h5>TE GUSTARÍA QUE TRABAJEMOS JUNTOS?</h5>
            <h2>Hagamos Que Tu <br />
            Negocio <span>Se Destaque</span></h2>
            <p>Incrementa tu presencia, reputación y
            ventas en el mundo digital!</p>
            <a href="#">CONTACTARSE <img src={arrow} alt="flecha"/></a>
        </div>

        <div className='footer-links'>
            <div className='socials'>
                <h4>Manuela S.</h4>
                <a href="https://www.behance.net/manuelasanchis"><img src={be} alt="Behance" />BEHANCE</a>
                <a href="https://www.instagram.com/sunflower_agencia/"><img src={ig} alt="Instagram" />INSTAGRAM</a>
                <a href="https://wa.me/message/TKNQWPNUUGLLJ1"><img src={wsp} alt="Whatsapp" />WHATSAPP</a>
                <a href="https://www.linkedin.com/in/manuela-sanchis/"><img src={lkn} alt="LinkedIn" />LINKEDIN</a>
                <a href="mailto: manuelanair.s@outlook.com"><img src={email} alt="Email" />EMAIL</a>
            </div>

            <div className='sections'>
                <h4>Secciones</h4>
                <a href="#servicios">SERVICIOS</a>
                <a href="#proyectos">PROYECTOS</a>
                <a href="#sobremi">SOBRE MI</a>
                <a href="#clientes">CLIENTES</a>
            </div>
            <a href='#' className='footer-btn'>
                <img src={arrowup} alt="" />
                <p>VOLVER AL <br /> COMIENZO</p>
            </a>
        </div>

        <div className='footer-copy'>
            <p>© Portfolio Web Manuela Sanchis 2025.</p>
        </div>
    </div>
  )
}

export default Footer