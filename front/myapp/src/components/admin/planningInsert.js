import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
export function PlanningInsert(props){
    return <Modal animation={true} show={props.showModalPlanningInsert} onHide={()=>{props.handleCloseModalPlanningInsert();window.location.replace('/planning')}}>
        <div onClick={()=>props.handleCloseModalPlanningInsert()}>Fermer</div>
    <Modal.Body>
        <p>Souhaitez-vous ajouter un bilan ou bien un rendez-vous?</p>
        <div>
        <Button variant="secondary" onClick={()=>props.handleShowModalPlanningBilanInsert()}>Ajouter un Bilan</Button>
        <Button variant="secondary" onClick={()=>props.handleShowModalPlanningRdvInsert()}>Ajouter un rendez-vous</Button>
        </div>
    </Modal.Body>
    </Modal>}