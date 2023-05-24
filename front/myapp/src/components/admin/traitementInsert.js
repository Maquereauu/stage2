import { useForm } from "react-hook-form";
import { InsertTraitement_ } from "../../components/AllTraitement/Traitement";
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
export function TraitementInsert(props) {
    const { register, handleSubmit } = useForm();
    const [counter,setCounter]=useState(["salut","salut"]);
    const onSubmitInsertTraitement = async (data) => {
        InsertTraitement_(data)
        window.location.replace('/patients');
    }
    const deleteByIndex = index => {
        setCounter(oldValues => {
          return oldValues.filter((_, i) => i !== index)
        })
      }
    return <form onSubmit={handleSubmit(onSubmitInsertTraitement)} className="align-center flex vertical center" >
        <h1 className="title flex2 center margin-top--">Traitement</h1>
        <div className="flex2 vertical center">
            <h2 className='title top left align-center'>Information</h2>
            <div className="flex2 margin-top--- vertical align-center">
            {counter.map((item,key)=>{
                return <div key={key} className="flex gap">
                    <input className='background my-account- margin-top--- margin-right--' {...register("id")} defaultValue={props.patientInfo.id} type="hidden" id="id" />
                    <input className='background my-account- margin-top---' {...register("medicament")} placeholder="medicament" type="text" id="medicament" />
                    <input className='background my-account- margin-top---' {...register("dose")} placeholder="dose" type="text" id="dose" />
                </div>})}
                <Button variant="secondary" onClick={()=>setCounter(oldArray=>[...oldArray,"salut"])}>Ajouter une ligne</Button>
                <Button variant="danger" onClick={()=>deleteByIndex(counter.length-1)}>Supprimer une ligne</Button>
            </div>
            <Button variant="primary" onClick={()=>window.location.replace('/patients')}>Ne rien insérer</Button>
            <div className="flex2 center margin-top--">
                <input type="submit" value="Insérer le nouveau Traitement"/>
            </div>
        </div>
    </form>
}