import './ContainerCR.css'
import Html from '../../../img/html.svg'
import Css from '../../../img/css.svg'
import Js from '../../../img/js.svg'

const ContainerCR = () => {
    return (
        <div className='principal' id="ccr">
            <div className='principal-header'>
                <h2>Certificados y Conocimientos</h2>
            </div>
            <div className='containercr'>
                <div className='containercr-first'>
                    <ul>
                        <li><strong>Ingles: </strong>Certificado (A2) - Instituo SISE</li>
                        <li>Modelamiento intermedio en CSS</li>
                        <li>Conocimientos de SCSS</li>
                        <li>Conocimientos en C#, ASPNET.Core, EF</li>
                    </ul>
                </div>
                <div className='containercr-second'>
                    <img src={Html}></img>
                    <img src={Css}></img>
                    <img src={Js}></img>
                </div>
            </div>
        </div>
    )
}

export default ContainerCR;