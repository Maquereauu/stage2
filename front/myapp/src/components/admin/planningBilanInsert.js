import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { InsertBilan_ } from "../../components/AllBilan/Bilan";
import { useForm } from "react-hook-form";
export function PlanningBilanInsert(props){
    const onSubmitInsertBilan = async (data) => {
        console.log(data)
        if(data.shift !== '0' && data.weekly !== '-1')
{       InsertBilan_(data);
        window.location.replace('/planning')
    }
    }
    const { register, handleSubmit, reset,trigger,watch } = useForm();
    const [weekly,setWeekly]=useState();
    const onChange = (event) => {
        const value = event.target.value;
        if(value!=0)
        {setWeekly(value);}
      };
      useEffect(() => {
        if (typeof weekly !== "undefined" && weekly !== -1 && weekly !== 0) {
          reset({ date_debut: watch('date') });
        } else {
          reset({ date_debut: "0000-00-00",date_fin: "0000-00-00" });
        }
      }, [weekly,watch('date')]);
    return <Modal animation={true} show={props.showModalPlanningBilanInsert} onHide={()=>{props.handleCloseModalPlanningBilanInsert();window.location.replace('/planning')}}>
    <Modal.Body>
    <form onSubmit={handleSubmit(onSubmitInsertBilan)}>
            <input required={true} className='background my-account- margin-top--- margin-right--' {...register("id_patient")} defaultValue={0} type="hidden" id="id_patient" />
            <input required={true} className='background my-account- margin-top---' {...register("text")} placeholder="text" type="text" id="text" />
            <input className='background my-account- margin-top---' {...register("groupe")} type="hidden" defaultValue={0} placeholder="groupe" id="groupe" />
            <select {...register("weekly")} id="weekly" name="weekly" onChange={onChange}>
                <option value={-1}>Récurrence</option>
                <option value={0}>Aucune</option>
                <option value={1}>Hebdomadaire</option>
                <option value={2}>15 jours</option>
                <option value={3}>1 mois</option>
                <option value={4}>2 mois</option>
                <option value={5}>3 mois</option>
            </select>
            <select {...register("shift")} id="shift" name="shift">
                <option value={0}>Tournée</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
            </select>
            <input className='background my-account- margin-top--- margin-right--' {...register("date")} readOnly defaultValue={props.dateInfo} placeholder="date" type="text" id="date" />
            {typeof(weekly) !== "undefined" && weekly!= -1 && weekly != 0?<>
            <label>Date début
            <input className='background my-account- margin-top---' {...register("date_debut")} value={watch('date_debut')} placeholder={"Veuillez choisir une date"} readOnly type="text" id="date_debut" />
            </label>
            <label>Date fin
            <input className='background my-account- margin-top---' {...register("date_fin")} placeholder="fin (année-mois-jour)" type="date" id="date_fin" />
            </label></>:<>
            <input hidden className='background my-account- margin-top---' {...register("date_debut")} defaultValue={"0000-00-00"} placeholder="debut (année-mois-jour)" type="date" id="date_debut" />
            <input hidden className='background my-account- margin-top---' {...register("date_fin")} defaultValue={"0000-00-00"} placeholder="fin (année-mois-jour)" type="date" id="date_fin" /></>}
            <input  type="submit" value="Insérer le nouveau bilan" />
            </form>
    </Modal.Body>
    </Modal>}