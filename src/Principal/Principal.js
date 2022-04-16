import './Principal.css'
import ContainerSM from './Containers/ContainerSM/ContainerSM'
import ContainerAp from './Containers/ContainerAP/ContainerAP'
import ContainerCR from './Containers/ContainerCR/ContainerCR'
import ContainerPag from './Containers/ContainerPag/ContainerPag'

const Principal = () => {
    return (
        <div className='principal-super'>
            <ContainerSM />
            <ContainerAp />
            <ContainerCR />
            <ContainerPag />
        </div>
    )
}
export default Principal;