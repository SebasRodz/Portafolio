import './ContainerAP.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from '../../../img/logo.svg'

const ContainerAp = () => {
    return (
        <div className='principal' id="cap">
            <div className='principal-header'>
                <h2>Aptitudes</h2>
            </div>
            <div className='containerap'>
                <div className='containerap-first'>
                    <ul>
                        <li>Experiencia en desarrollo web con metodología agíl (SCRUM)</li>
                        <li>React, Angular, Jquery, AJAX, TypeScript, JavaScript</li>
                        <li>Express, Spring Boot, PHP</li>
                        <li>MySQL, SQL, MongoDB</li>
                    </ul>
                </div>
                <div className='containerap-second'>
                    <img src={React} className="react-animate"></img>
                </div>
            </div>
        </div>
    )
}

export default ContainerAp;