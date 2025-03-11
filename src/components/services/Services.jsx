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
              <p> Creación visual atractiva y estratégica para fortalecer tu marca.</p>
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
              <p> Sitios web modernos, funcionales y optimizados para generar resultados.</p>
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
              <p> Gestión y contenido estratégico para crecer y conectar con tu audiencia.</p>
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