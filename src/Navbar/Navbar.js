import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'wouter';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <h1>Perfil: Rodríguez Mirano</h1>
            </div>
            <div className='navbar-right'>
                <FontAwesomeIcon icon = {faBars} />
            </div>
        </div>
    )
}

export default Navbar;