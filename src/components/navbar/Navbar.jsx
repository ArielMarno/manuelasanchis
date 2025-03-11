import Menu from './Menu';
import './navbar.css';
import React, { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav>
        <div className='navbar-content'>
            <h2>Manuela S.</h2>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <a href="#tecnologias" onClick={handleLinkClick}>Tecnologías</a>
                <a href="#proyectos" onClick={handleLinkClick}>Proyectos</a>
                <a href="#sobremi" onClick={handleLinkClick}>Sobre Mi</a>
                <a href="https://wa.link/f1hfwe" className='rsp-contact' onClick={handleLinkClick}>Contacto</a>
            </div>
            <a href='https://wa.link/f1hfwe' className='contact-btn'>Contacto</a>
            <div className='burguer-menu'>
                <Menu toggleMenu={toggleMenu} isOpen={isOpen}/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar