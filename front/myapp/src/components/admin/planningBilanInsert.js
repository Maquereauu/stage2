import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { InsertBilan_ } from "../../components/AllBilan/Bilan";
import { useForm } from "react-hook-form";
export function PlanningBilanInsert(props){
    const onSubmitInsertBilan = async (data) => {
        InsertBilan_(data);
        window.location.replace('/planning')
    }
    const { register, handleSubmit} = useForm()
    return <Modal animation={true} show={props.showModalPlanningBilanInsert} onHide={()=>{props.handleCloseModalPlanningBilanInsert();window.location.replace('/planning')}}>
    <Modal.Body>
    <form onSubmit={handleSubmit(onSubmitInsertBilan)}>
            <input required={true} className='background my-account- margin-top--- margin-right--' {...register("id_patient")} defaultValue={0} type="hidden" id="id_patient" />
            <input required={true} className='background my-account- margin-top---' {...register("text")} placeholder="text" type="text" id="text" />
            <input className='background my-account- margin-top---' {...register("groupe")} type="hidden" defaultValue={0} placeholder="groupe" id="groupe" />
            <input className='background my-account- margin-top---' {...register("weekly")} placeholder="weekly" type="text" id="weekly" />
            <input className='background my-account- margin-top---' {...register("shift")} placeholder="tournée" type="text" id="shift" />
            <input className='background my-account- margin-top--- margin-right--' {...register("date")} readOnly defaultValue={props.dateInfo} placeholder="date" type="text" id="date" />
            <input  type="submit" value="Insérer le nouveau bilan" />
            </form>
    </Modal.Body>
    </Modal>}