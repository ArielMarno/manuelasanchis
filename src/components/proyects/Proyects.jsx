import './proyects.css';
import arrow from '..//../assets/arrows/arrow-up-right.png';
import arrowr from '..//../assets/arrows/arrow-right.png';

const Proyects = () => {
  return (
    <div className='proyects' id='proyectos'>
        <div className='proyects-title'>
            <h2>Proyectos Destacados</h2>
            <a href='https://www.behance.net/manuelasanchis' className='proyects-btn'>
                <img src={arrow} alt="flecha" />
                <p>VER TODOS</p>
            </a>
        </div>
        <div className='proyects-cards_container'>
            <div className="proyect">
                <a href="https://www.behance.net/gallery/220526309/Agro-Biologico"><img src={arrowr} alt="flecha" /></a>
                <div className='proyect-content'>
                    <h3>Agro Biologico</h3>
                    <p>Diseño Web</p>
                </div>
            </div>
            <div className="proyect">
                <a href="https://www.behance.net/gallery/219974839/Muebles-44"><img src={arrowr} alt="flecha" /></a>
                <div className='proyect-content'>
                    <h3>Muebles 44</h3>
                    <p>Branding</p>
                </div>
            </div>
            <div className="proyect">
                <a href="https://www.behance.net/gallery/220997099/Manteniments-Costa-Nord"><img src={arrowr} alt="flecha" /></a>
                <div className='proyect-content'>
                    <h3>Costa Nord</h3>
                    <p>Tarjeta Corporativa</p>
                </div>
            </div>
            <div className="proyect">
                <a href="https://www.behance.net/gallery/221111695/Sunflower-Agencia"><img src={arrowr} alt="flecha" /></a>
                <div className='proyect-content'>
                    <h3>Sunflower Agencia</h3>
                    <p>Diseño Web</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Proyects