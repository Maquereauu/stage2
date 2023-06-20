import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { InsertRdv_ } from "../../components/AllRdv/Rdv";
import { useForm } from "react-hook-form";
export function PlanningRdvInsert(props){
    const onSubmitInsertRdv = async (data) => {
        InsertRdv_(data);
        window.location.replace('/planning')
    }
    const { register, handleSubmit} = useForm()
    return <Modal animation={true} show={props.showModalPlanningRdvInsert} onHide={()=>{props.handleCloseModalPlanningRdvInsert();window.location.replace('/planning')}}>
    <Modal.Body>
    <form onSubmit={handleSubmit(onSubmitInsertRdv)}>
            <input required={true} className='background my-account- margin-top--- margin-right--' {...register("id_patient")} defaultValue={0} type="hidden" id="id_patient" />
            <input required={true} className='background my-account- margin-top---' {...register("text")} placeholder="text" type="text" id="text" />
            <input className='background my-account- margin-top--- margin-right--' {...register("date")} readOnly defaultValue={props.dateInfo} placeholder="date" type="text" id="date" />
            <input required={true} className='background my-account- margin-top--- margin-right--' {...register("type")}  defaultValue={1} type="hidden" id="date" />
            <input  type="submit" value="Insérer le nouveau rendez-vous" />
            </form>
    </Modal.Body>
    </Modal>}