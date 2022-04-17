import './ContainerSM.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons'

const ContainerSM = () => {
    return (
        <div className='principal' id="csm">
            <div className='principal-header'>
                <h2>Sobre mí</h2>
            </div>
            <div className='containersm'>
                <div className='containersm-left'>    
                    <p>
                        Me llamo Rodríguez Mirano Sebastián y soy estudiante de Ingeniería de Software, capaz de trabajar en entornos 
                        dinámicos y realizar diversas tareas como desarrollador FullStack. Tengo experiencia en desarrollo como FullStack 
                        en ambientes desplegados en la nube.
                    </p>
                </div>
                <div className='containersm-right'>
                    <div className='containersm-right1'>
                        <ul>
                            <li><FontAwesomeIcon icon = {faPhone} /> 960210327</li>
                            <li id="cap"><FontAwesomeIcon icon = {faEnvelope} /> sebasrodrimiran@gmail.com</li>
                            <li><FontAwesomeIcon icon = {faAddressBook} /> <a target="_blank" href="https://github.com/SebasRodz">Github</a></li>
                        </ul>
                    </div>
                    <div className="containersm-right2">
                        <ul>
                            <li><FontAwesomeIcon icon = {faLocationDot} /> LIMA, Lima - Perú</li>
                            <li><FontAwesomeIcon icon = {faBuildingColumns} /> Universidad Nacional Mayor de San Marcos</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContainerSM;