import './services.css';
import Tech from './Tech'
import arrow from '..//../assets/arrows/arrow-up-right.png';

const Services = () => {
  return (
    <div className='services' id='servicios'>
        <Tech className="tech" />
        <div className='services-cards'>
          <div className="card">
            <div className='card-content'>
              <h5>01</h5>
              <h3>Diseño Grafico</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
              <a href='https://wa.link/isrbgk' className='btn'>
                <img src={arrow} alt="flecha" />
                <p>Solicitar Servicio</p>
              </a>
            </div>
          </div>
          <div className="card">
            <div className='card-content'>
              <h5>02</h5>
              <h3>Diseño Web</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
              <a href='https://wa.link/kqm1o3' className='btn'>
                <img src={arrow} alt="flecha" />
                <p>Solicitar Servicio</p>
              </a>
            </div>
          </div>
          <div className="card">
            <div className='card-content'>
              <h5>03</h5>
              <h3>Social Media</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
              <a href='https://wa.link/952pfn' className='btn'>
                <img src={arrow} alt="flecha" />
                <p>Solicitar Servicio</p>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Services