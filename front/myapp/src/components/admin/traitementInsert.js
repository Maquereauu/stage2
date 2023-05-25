import { useForm } from "react-hook-form";
import { InsertTraitement_ } from "../../components/AllTraitement/Traitement";
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import {useRef} from 'react';
export function TraitementInsert(props) {
    const { register, handleSubmit, reset,trigger } = useForm();
    const [counter,setCounter]=useState(["salut"]);
    const [allData,setAllData]=useState([]);
    const list=["id_patient","medicament","dose","date_debut","date_fin"];
    const refs = useRef([]);
    let test = 1;
    const onSubmitInsertTraitement = async (data) => {
        if(test == 1){
        const calls=[...Array(counter.length)].map(e => Array(list.length))
        let c = 0
        let calls2 = [0,0];
        Object.entries(data).map(([key,value])=>{
            calls2[0]=list[c%5]
            calls2[1]=value
            calls[Math.floor(c/5)][c%5]=calls2
            calls2=[0,0]
            c++
        })
        for(let i = 0;i<counter.length;i++){
            const dictionary = Object.fromEntries(calls[i]);
            console.log(dictionary)
            InsertTraitement_(dictionary)
        }
        test = 0;
         // window.location.replace('/patients');
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
            // console.log(refs.current[i])
        }
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
                    <input className='background my-account- margin-top---' {...register("medicament"+index)} placeholder="medicament" type="text" id={"medicament"+index} />
                    <input className='background my-account- margin-top---' {...register("dose"+index)} placeholder="dose" type="text" id="dose" />
                    <input className='background my-account- margin-top---' {...register("date_debut"+index)} placeholder="date_debut" type="text" id="date_debut" />
                    <input className='background my-account- margin-top---' {...register("date_fin"+index)} placeholder="date_fin" type="text" id="date_fin" />
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