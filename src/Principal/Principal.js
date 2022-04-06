import './Principal.css'
import ContainerSM from './Containers/ContainerSM/ContainerSM'
import ContainerAp from './Containers/ContainerAP/ContainerAP'
import ContainerCR from './Containers/ContainerCR/ContainerCR'
import ContainerPag from './Containers/ContainerPag/ContainerPag'

const Principal = () => {
    return (
        <>
            <ContainerSM />
            <ContainerAp />
            <ContainerCR />
            <ContainerPag />
        </>
    )
}
export default Principal;