import './home.css';
import hand from '../../assets/home.webp';
import arrow from '../../assets/arrows/arrow-down.png';
import Navbar from '../navbar/Navbar';

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <main>
            <figure>
                <img src={hand} alt="hand" />
            </figure>
            <section>
                <h1>PORTFOLIO</h1>
                <h5>Diseño Grafico, Diseño Web y Social Media.</h5>
            </section>
            <a href="#servicios" className='home-btn'>
                <img src={arrow} alt="flecha" />
                <h5>Mis Servicios</h5>
            </a>
        </main>
    </div>
  )
}

export default Home