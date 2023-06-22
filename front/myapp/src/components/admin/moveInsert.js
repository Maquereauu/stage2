import { useForm } from "react-hook-form";
import { InsertRdv_ } from "../../components/AllRdv/Rdv";
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import {useRef} from 'react';
export function MoveInsert(props) {
    const { register, handleSubmit, reset,trigger } = useForm();
    const onSubmitInsertRdv = async (data) => {
        InsertRdv_(data)
        window.location.replace('/patients');
    }
    return <div>
        <h1 className="title flex2 center margin-top--">Mouvement</h1>
        <div className="flex2 vertical center">
            <h2 className='title top left align-center'>Infos</h2>
            <div className="flex2 margin-top--- vertical align-center">
            <form onSubmit={handleSubmit(onSubmitInsertRdv)}>
            <select {...register("id_patient")} id="id_patient" name="id_patient">
                <option>Liste patients</option>
                {props.info2.map((patient,key)=>{
                    return <option key={key} value={patient.id}>{patient.nom}/{patient.prenom}</option>
                })}
            </select>
            <input required={true} className='background my-account- margin-top---' {...register("text")} placeholder="text" type="text" id="text" />
            <input required={true} className='background my-account- margin-top--- margin-right--' {...register("date")}placeholder="date" type="date" id="date" />
            <input required={true} className='background my-account- margin-top--- margin-right--' {...register("type")}  defaultValue={2} type="hidden" id="date" />
            <input type="submit" value="Insérer le nouveau mouvement" />
            </form>
            </div>
        </div>
    </div>
}