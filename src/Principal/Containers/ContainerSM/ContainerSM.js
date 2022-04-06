import './ContainerSM.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const ContainerSM = () => {
    return (
        <div className='principal'>
            <div className='principal-header'>
                <h2>Sobre mí</h2>
            </div>
            <div className='containersm'>
                <div className='containersm-left'>    
                    <p>
                        Estudiante de Ingeniería de Software capaz de trabajar en entornos dinámicos y realizar diversas tareas
                        como desarrollador FullStack. Tengo experiencia en desarrollo como FullStack en ambientes desplegados en
                        la nube.
                    </p>
                </div>
                <div className='containersm-right'>
                    <ul>
                        <li><FontAwesomeIcon icon = {faPhone} /> 960210327</li>
                        <li><FontAwesomeIcon icon = {faEnvelope} /> sebasrodrimiran@gmail.com</li>
                        <li><FontAwesomeIcon icon = {faLocationDot} /> LIMA, Lima - Perú</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContainerSM;