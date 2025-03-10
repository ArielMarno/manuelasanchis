import './tech.css';

import ai from '..//..//assets/icons/ai.webp';
import canva from '..//..//assets/icons/canva.webp';
import capcut from '..//..//assets/icons/capcut.webp';
import figma from '..//..//assets/icons/figma.webp';
import obs from '..//..//assets/icons/obs.webp';
import office from '..//..//assets/icons/office.webp';
import ps from '..//..//assets/icons/ps.webp';
import xd from '..//..//assets/icons/xd.webp';
const Tech = () => {
  return (
    <div className='tech' id='tecnologias'>
        <div className='tech-list'>
            <img src={canva} alt="Canva" />
            <img src={capcut} alt="Capcut" />
            <img src={ps} alt="Photoshop" />
            <img src={ai} alt="Adobe Illustrator" />
            <img src={xd} alt="Adobe XD" />
            <img src={figma} alt="Figma" />
            <img src={office} alt="Office" />
            <img src={obs} alt="OBS" />
        </div>
    </div>
  )
}

export default Tech