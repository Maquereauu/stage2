import { useForm } from "react-hook-form";
import moment from 'moment';
import 'moment/locale/fr';
import { InsertTraitement_ } from "../../components/AllTraitement/Traitement";
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import {useRef} from 'react';
export function TraitementInsert(props) {
    const { register, handleSubmit, reset,trigger } = useForm();
    const [counter,setCounter]=useState(["salut"]);
    const [allData,setAllData]=useState([]);
    const list=["id_patient","medicament","dose_matin","dose_midi","dose_soir","date_debut","date_fin"];
    const refs = useRef([]);
    let test = 1;
    const onSubmitInsertTraitement = async (data) => {
        if(test == 1){
        const calls=[...Array(refs.current.length)].map(e => Array(list.length))
        let c = 0
        let calls2 = [0,0];
        Object.entries(data).map(([key,value])=>{
            calls2[0]=list[c%7]
            calls2[1]=value
            calls[Math.floor(c/7)][c%7]=calls2
            calls2=[0,0]
            c++
        })
        for(let i = 0;i<counter.length;i++){
            const dictionary = Object.fromEntries(calls[i]);
            if(moment(dictionary.date_debut,"YYYY-MM-DD").isAfter(moment(dictionary.date_fin,"YYYY-MM-DD"))){
                console.log(">:(")
            }else{
                console.log(":D")
                console.log(dictionary)
            InsertTraitement_(dictionary)
            }
        }
        test = 0;
        window.location.replace('/patients');
    }}
    // const insertAllForms = async() => {
    //     console.log(allData)
    //     allData.map((data,key)=>{
    //         console.log(data)
    //         InsertTraitement_(data)
    //     })
    //     setAllData([])
    //     // window.location.replace('/patients');
    // }
    const sendAllForms = async() => {
        for(let i=0;i<counter.length;i++){
            refs.current[i].click();
        }
        // window.location.replace('/patients');
    }
    const deleteByIndex = index => {
        setCounter(oldValues => {
          return oldValues.filter((_, i) => i !== index)
        })
      }
    return <div>
        <h1 className="title flex2 center margin-top--">Traitement</h1>
        <div className="flex2 vertical center">
            <h2 className='title top left align-center'>Information</h2>
            <div className="flex2 margin-top--- vertical align-center">
            {counter.map((item,index)=>{
                return <div key={index} className="flex gap">
                    <form id={"form"+index} key={index} onSubmit={handleSubmit(onSubmitInsertTraitement)} className="align-center flex vertical center" >
                    <input required={true} className='background my-account- margin-top--- margin-right--' {...register("id_patient"+index)} defaultValue={props.patientInfo.id} type="hidden" id="id_patient" />
                    <div className="margin-right">
                    <input className='background my-account- margin-top---' {...register("medicament"+index)} placeholder="medicament" type="text" id={"medicament"+index} />
                    </div>
                    <input className='background my-account- margin-top---' {...register("dose_matin"+index)} placeholder="dose matin" type="text" id="dose1" />
                    <input className='background my-account- margin-top---' {...register("dose_midi"+index)} placeholder="dose midi" type="text" id="dose2" />
                    <input className='background my-account- margin-top---' {...register("dose_soir"+index)} placeholder="dose soir" type="text" id="dose3" />
                    <label>Date début
                    <input className='background my-account- margin-top---' {...register("date_debut"+index)} placeholder="debut (année-mois-jour)" type="date" id="date_debut" />
                    </label>
                    <label>Date fin
                    <input className='background my-account- margin-top---' {...register("date_fin"+index)} placeholder="fin (année-mois-jour)" type="date" id="date_fin" />
                    </label>
                    <input hidden={true} id={index} ref={(element) => {refs.current[index] = element}} type="submit" value="Insérer le nouveau Traitement" />
                    </form>
                </div>})}
                <Button variant="secondary" onClick={()=>setCounter(oldArray=>[...oldArray,"salut"])}>Ajouter une ligne</Button>
                <Button variant="danger" onClick={()=>deleteByIndex(counter.length-1)}>Supprimer une ligne</Button>
            </div>
            <Button variant="primary" onClick={()=>window.location.replace('/patients')}>Ne rien insérer</Button>
            <div className="flex2 center margin-top--">
                <Button variant="primary" onClick={sendAllForms}>Insérer le nouveau Traitement</Button>
            </div>
        </div>
    </div>
}