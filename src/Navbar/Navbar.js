import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
// import { Link } from 'wouter';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    function Cerrar() {
        setOpen(!open);
    }

    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <h1>Perfil: Rodríguez Mirano</h1>
            </div>
            <div className='navbar-right'>
                <div className='dropdown'>
                    <FontAwesomeIcon 
                        onClick={Cerrar} 
                        icon = {faBars} 
                    />
                    <div className={open ? "dropdown-content open" : "dropdown-content"} onClickOutside>
                        <a onClick={Cerrar} href="#csm">Sobre Mí</a>
                        <a onClick={Cerrar} href="#cap">Aptitudes</a>
                        <a onClick={Cerrar} href="#ccr">Conocimientos</a>
                        <a onClick={Cerrar} href="#cp">Desarrollo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;