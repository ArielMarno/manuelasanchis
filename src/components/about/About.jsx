import './about.css';
import eye from '..//../assets/about.webp';

import be from '..//../assets/socials/behance.webp';
import ig from '..//../assets/socials/ig.webp';
import wsp from '../../assets/socials/wp.webp';
import lkn from '..//../assets/socials/linkedin.webp';
import WorkTogether from './WorkTogether';


const About = () => {
  return (
    <div className='about' id='sobremi'>
        <div className='about-title'>
            <h2><span className='full-name'>Manue</span>la Sanchis</h2>
            <img src={eye} alt="ojo" />
            <h2 className='half-name'>Manue</h2>
        </div>
        <div className='about-content'>
            <h5>Soy quien estabas buscando para <span>incrementar tu presencia, reputación y ventas en el mundo digital!</span></h5>
            <div className='about-me'>
                <p>Hola! Soy Manuela, una profesional multidisciplinaria con más de 5 años de experiencia desempeñandome en <span className='text-about-me'>diseño gráfico, asistencia virtual/administrativa, marketing digital, e-commerce y publicidad online.</span> <br />
                Siempre enfoco mi trabajo en ofrecer soluciones prácticas y efectivas que se adapten a las necesidades de mis clientes.</p>
                <div className='about-me_socials'>
                    <a href="https://www.behance.net/manuelasanchis"><img src={be} alt="Behance" /></a>
                    <a href="https://www.instagram.com/sunflower_agencia/"><img src={ig} alt="Instagram" /></a>
                    <a href="https://wa.me/message/TKNQWPNUUGLLJ1"><img src={wsp} alt="Whatsapp" /></a>
                    <a href="https://www.linkedin.com/in/manuela-sanchis/"><img src={lkn} alt="LinkedIn" /></a>
                </div>
            </div>
        </div>
        <WorkTogether />
    </div>
  )
}

export default About