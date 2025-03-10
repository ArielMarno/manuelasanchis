import './clients.css';

import caysa from '..//../assets/clients/caysa.webp';
import abio from '..//../assets/clients/abio.webp';
import nx from '..//../assets/clients/nx.webp';
import bruja from '..//../assets/clients/bruja.webp';
import voramar from '..//../assets/clients/voramar.webp';
import hpyb from '..//../assets/clients/hpyb.webp';

const Clients = () => {
  return (
    <div className='clients' id='clientes'>
        <div className='clients-title'>
            <h2>Que Opinan <br /> Mis Clientes?</h2>
            <p>Conoce lo que tienen para decir mis clientes sobre su experiencia trabajando conmigo y los objetivos que logramos concretar juntos.</p>
        </div>
        <div className='clients-cards_container'>
            <div className='col'>
                <div className="client-card">
                    <h4>Diseño Web</h4>
                    <p>"Gracias manu! La verdad fue un placer trabajar con vos, buena predisposición, profesionalidad, siempre disponible ante cualquier duda o consulta. Nos gustó mucho como quedó la web! Superó nuestras expectativas!"</p>
                    <div className='client-profile'>
                        <img src={caysa} alt="Caysa SRL" />
                        <div className='name-company'>
                            <h5>Agustina Salamanca</h5>
                            <p>Caysa SRL</p>
                        </div>
                    </div>
                </div>
                <div className="client-card">
                <h4>Diseño Web</h4>
                    <p>"Excelente servicio!! Manu súper atenta a todo y súper profesional y responsable. Nos encantó como nos hizo la página; estamos muy conformes!! Recomendable al 100."</p>
                    <div className='client-profile'>
                        <img src={abio} alt="Agro Biológico" />
                        <div className='name-company'>
                            <h5>Candela Belluccini</h5>
                            <p>Agro Biológico</p>
                        </div>
                    </div>
                </div>
                <div className="client-card">
                <h4>Folletería</h4>
                    <p>"Muy buena atención recibida y atenta a los detalles de la marca, la atención personalizada 10/10."</p>
                    <div className='client-profile'>
                        <img src={nx} alt="NX Computer" />
                        <div className='name-company'>
                            <h5>Nicolas Carmona</h5>
                            <p>NX Computer</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='col'>
                <div className="client-card">
                <h4>Diseño gráfico/e-Commerce</h4>
                    <p>"Es un placer trabajar con Manu, está siempre atenta a cualquier inquietud a parte de que me explica todo para que pueda entender que es lo mejor para mis redes sociales. Me ayudo con el feed de ig, diseños de archivos para enviar a clientes y armar la página web. Recomiendo 10/10 a Manu✨"</p>
                    <div className='client-profile'>
                        <img src={bruja} alt="Bruja Sustentable" />
                        <div className='name-company'>
                            <h5>Fiamma Des</h5>
                            <p>Bruja Sustentable</p>
                        </div>
                    </div>
                </div>
                <div className="client-card">
                <h4>Branding</h4>
                    <p>"Buen profesional, te va dando ideas y sugerencias a lo largo del proceso, se fija en todo, pequeños detalles etc. <br />Recomendable 100%."</p>
                    <div className='client-profile'>
                        <img src={voramar} alt="Gimnástica Voramar" />
                        <div className='name-company'>
                            <h5>Miriam García</h5>
                            <p>Gimnástica Voramar</p>
                        </div>
                    </div>
                </div>
                <div className="client-card">
                <h4>Branding</h4>
                    <p>"La calidad humana y profesionalismo con el que se maneja, hacen que tu proyecto sea soñado!! Gracias por acompañarnos en este desarrollo!!!🙌"</p>
                    <div className='client-profile'>
                        <img src={hpyb} alt="Hogar Paz y Bien" />
                        <div className='name-company'>
                            <h5>Pablo Milano</h5>
                            <p>Hogar Paz y Bien</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Clients