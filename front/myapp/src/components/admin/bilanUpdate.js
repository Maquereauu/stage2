import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react';
import { UpdateBilan_ } from "../../components/AllBilan/Bilan";
export function BilanUpdate(props) {
    const { register, handleSubmit, reset,trigger,watch } = useForm();
    const [weekly,setWeekly]=useState();
    const onSubmitUpdateBilan = async (data) => {
        UpdateBilan_(data)
        if(props.isPlanning)
        {window.location.replace('/planning');}
        else{window.location.replace('/patients');}
    }
    const onChange = (event) => {
        const value = event.target.value;
        setWeekly(value);
      };
      useEffect(() => {
        if (typeof weekly !== "undefined" && weekly !== -1 && weekly !== 0) {
          reset({ date_debut: watch('date') });
        } else {
          reset({ date_debut: props.bilanInfo.date_debut });
        }
      }, [weekly,watch('date')]);
    return <form onSubmit={handleSubmit(onSubmitUpdateBilan)} className="align-center flex vertical center" >
        <h1 className="title flex2 center margin-top--">Bilan</h1>
        <div className="flex2 vertical center">
            <h2 className='title top left align-center'>Information</h2>
            <div className="flex2 margin-top--- vertical align-center">
                <div className="flex gap">
                    <input type="hidden" {...register("id")} id="id" defaultValue={props.bilanInfo.id}/>
                    <input className='background my-account- margin-top--- margin-right--' {...register("text")} defaultValue={props.bilanInfo.text} placeholder="text" type="text" id="text" />
                </div>
            </div>
            <select {...register("shift")} id="shift" name="shift" defaultValue={props.bilanInfo.shift}>
                <option value={0}>Tournée</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
            </select>
            <div className="margin-right">
            <label>Date
            <input required={true} className='background my-account- margin-top--- margin-right--' {...register("date")} defaultValue={props.bilanInfo.date} placeholder="date" type="date" id="date" />
            </label>
            </div>
            <select {...register("weekly")} id="weekly" name="weekly" onChange={onChange} defaultValue={props.bilanInfo.weekly}>
                <option value={-1}>Récurrence</option>
                <option value={0}>Aucune</option>
                <option value={1}>Hebdomadaire</option>
                <option value={2}>15 jours</option>
                <option value={3}>1 mois</option>
                <option value={4}>2 mois</option>
                <option value={5}>3 mois</option>
            </select>
            {(props.bilanInfo.weekly!=0 || typeof(weekly) !== "undefined") && weekly!= -1 && weekly != 0?<>
            <label>Date début
            <input className='background my-account- margin-top---' {...register("date_debut")} value={watch("date_debut")} placeholder={"Veuillez choisir une date"} readOnly type="text" id="date_debut" />
            </label>
            <label>Date fin
            <input className='background my-account- margin-top---' {...register("date_fin")} defaultValue={props.bilanInfo.date_fin} placeholder="fin (année-mois-jour)" type="date" id="date_fin" />
            </label></>:<>
            <input hidden={true} className='background my-account- margin-top---' {...register("date_debut")} defaultValue={"0000-00-00"} placeholder="debut (année-mois-jour)" type="date" id="date_debut" />
            <input hidden={true} className='background my-account- margin-top---' {...register("date_fin")} defaultValue={"0000-00-00"} placeholder="fin (année-mois-jour)" type="date" id="date_fin" /></>}
            <div className="flex2 center margin-top--">
                <input type="submit" value="Modifier le Bilan"/>
            </div>
        </div>
    </form>
}