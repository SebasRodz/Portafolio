import './Principal.css'
import ContainerSM from './Containers/ContainerSM/ContainerSM'
import ContainerAp from './Containers/ContainerAP/ContainerAP'
import ContainerCR from './Containers/ContainerCR/ContainerCR'
import ContainerPag from './Containers/ContainerPag/ContainerPag'

const Principal = () => {
    return (
        <div className='principal-super'>
            <div className='grid2'>
                <ContainerSM />
                <ContainerAp />
            </div>
            <div className='grid2'>
                <ContainerCR />
                {/* <ContainerPag /> */}
            </div>
        </div>
    )
}
export default Principal;