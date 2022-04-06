import './ContainerPag.css'

const ContainerPag = () => {
    return (
        <div className='principal principal-final'>
            <div className='principal-header'>
                <h2>Desarrollo Web</h2>
            </div>
            <div className='containerpag'>
                <div className='containerpag-first'>
                    <ul>
                        <li>
                            <a href="https://examenfinalmineria-grupo5.herokuapp.com/" target="_blank">
                                Modelo Oculto de Markov
                            </a>
                        </li>
                        <li>
                            <a href="https://in-grupo2-app.herokuapp.com/" target="_blank">
                                Analisis de Datasets
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='containerpag-second'>
                </div>
            </div>
        </div>
    )
}

export default ContainerPag;