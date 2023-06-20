import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { InsertBilan_ } from "../../components/AllBilan/Bilan";
import { useForm } from "react-hook-form";
export function PlanningBilanInsert(props){
    const [isSelected, setSelection] = useState(false);
    const onSubmitInsertBilan = async (data) => {
        console.log(isSelected)
        if(data.shift !== '0')
{        console.log(data)
        InsertBilan_(data);
        window.location.replace('/planning')
    }
    }
    const { register, handleSubmit} = useForm()
    return <Modal animation={true} show={props.showModalPlanningBilanInsert} onHide={()=>{props.handleCloseModalPlanningBilanInsert();window.location.replace('/planning')}}>
    <Modal.Body>
    <form onSubmit={handleSubmit(onSubmitInsertBilan)}>
            <input required={true} className='background my-account- margin-top--- margin-right--' {...register("id_patient")} defaultValue={0} type="hidden" id="id_patient" />
            <input required={true} className='background my-account- margin-top---' {...register("text")} placeholder="text" type="text" id="text" />
            <input className='background my-account- margin-top---' {...register("groupe")} type="hidden" defaultValue={0} placeholder="groupe" id="groupe" />
            <label>
                <input className='background my-account- margin-top---' placeholder="hebdomadaire" {...register("weekly")} onChange={()=>{setSelection(!isSelected)}} type="checkbox" id="weekly" />
                <span>{"hebdomadaire"}</span>
            </label>
            {isSelected?<input {...register("weekly")} defaultValue={1} type="hidden"/>:<input {...register("weekly")} defaultValue={0} type="hidden"/>}
            <select {...register("shift")} id="shift" name="shift">
                <option value={0}>Tournée</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
            </select>
            <input className='background my-account- margin-top--- margin-right--' {...register("date")} readOnly defaultValue={props.dateInfo} placeholder="date" type="text" id="date" />
            <input  type="submit" value="Insérer le nouveau bilan" />
            </form>
    </Modal.Body>
    </Modal>}