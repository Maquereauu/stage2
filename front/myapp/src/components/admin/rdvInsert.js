import { useForm } from "react-hook-form";
import { InsertRdv_ } from "../../components/AllRdv/Rdv";
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import {useRef} from 'react';
export function RdvInsert(props) {
    const { register, handleSubmit, reset,trigger } = useForm();
    const onSubmitInsertRdv = async (data) => {
        InsertRdv_(data)
        window.location.replace('/patients');
    }
    return <div>
        <h1 className="title flex2 center margin-top--">Rdv</h1>
        <div className="flex2 vertical center">
            <h2 className='title top left align-center'>Infos</h2>
            <div className="flex2 margin-top--- vertical align-center">
            <form onSubmit={handleSubmit(onSubmitInsertRdv)}>
            <input required={true} className='background my-account- margin-top--- margin-right--' {...register("id_patient")} defaultValue={props.patientInfo.id} type="hidden" id="id_patient" />
            <input required={true} className='background my-account- margin-top---' {...register("text")} placeholder="text" type="text" id="text" />
            <input required={true} className='background my-account- margin-top--- margin-right--' {...register("date")}placeholder="date" type="date" id="date" />
            <input required={true} className='background my-account- margin-top--- margin-right--' {...register("type")}  defaultValue={1} type="hidden" id="date" />
            <input type="submit" value="Insérer le nouveau rendez-vous" />
            </form>
            </div>
        </div>
    </div>
}