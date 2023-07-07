import { useForm } from "react-hook-form";
import { InsertPhotos_ } from "../../components/AllPhotos/Photos";
import { InsertPlaies_ } from "../../components/AllPlaies/Plaies";
import { UploadPhotos_ } from "../../components/AllPhotos/Photos";
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import {useRef} from 'react';
export function MedicInsert(props) {
    const { register, handleSubmit, reset,trigger } = useForm();
    const [counter,setCounter]=useState(["salut"]);
    const list=["id_patient","type","image","groupe"];
    const errors=["","Merci de bien vouloir remplir tous les formulaires","-_-"]
    const [oops,setOops]=useState(0);
    const refs = useRef([]);
    const refs2 = useRef([]);
    const onSubmitInsertPhotos = async (data) => {
        const newList = Object.fromEntries(Object.entries(data).slice(0, 4));
        const newData = Object.fromEntries(Object.entries(data).slice(4));
        const calls=[...Array(refs.current.length)].map(e => Array(list.length))
        let c = 0
        let calls2 = [0,0];
        let error = 0
        const uploadPromises = []
        Object.entries(newData).map(async ([key,value])=>{
            calls2[0]=list[c%4]
            if(c%4==2){
                if(typeof(value[0]) !== "undefined")
                {calls2[1]=value[0].name
                    const uploadPromise = UploadPhotos_(value)
                    uploadPromises.push(uploadPromise)
            }
            }else{
            calls2[1]=value
            }
            calls[Math.floor(c/4)][c%4]=calls2
            calls2=[0,0]
            c++
        })
        for(let i = 0;i<counter.length;i++){
            const dictionary = Object.fromEntries(calls[i]);
            if(dictionary.image == "" || dictionary.groupe == ""){
                error = 1
                setOops(1)
            }else if(error == 0){
                setOops(0)
            }
        }
        if(newList.text == "" || newList.groupe == ""){
            setOops(1)
        }
        if(!error){
            await InsertPlaies_(newList)
        }
        for(let i = 0;i<counter.length;i++){
            if(!error)
            {const dictionary = Object.fromEntries(calls[i]);
           await InsertPhotos_(dictionary)
        }
        }
        if(!error){
            Promise.all(uploadPromises).then(() => {
                window.location.replace('/patients')
        })
        }
    }
    const sendAllForms = async() => {
        if(refs2.current[0])
        {refs2.current[0].click();}
    }
    const deleteByIndex = index => {
        setCounter(oldValues => {
          return oldValues.filter((_, i) => i !== index)
        })
      }
    return <div>
        <h1 className="title flex2 center margin-top--">Compte rendu medic</h1>
        <div className="flex2 vertical center">
            <h2 className='title top left align-center'>Infos</h2>
            <div className="flex2 margin-top--- vertical align-center">
            <p>{errors[oops]}</p>
            <form onSubmit={handleSubmit(onSubmitInsertPhotos)}>
            <input required={true} className='background my-account- margin-top--- margin-right--' {...register("id_patient")} defaultValue={props.patientInfo.id} type="hidden" id="id_patient" />
            <input required={true} className='background my-account- margin-top---' {...register("text")} placeholder="text" type="text" id="text" />
            <input required={true} className='background my-account- margin-top---' {...register("groupe")} placeholder="groupe" type="text" id="groupe" />
            <input required={true} className='background my-account- margin-top--- margin-right--' {...register("type")} defaultValue={2} type="hidden" id="type" />
            <input hidden={true} id={0} ref={(element) => {refs2.current[0] = element}} type="submit" value="Insérer la nouvelle plaie" />
            </form>
            {counter.map((item,index)=>{
                return <div key={index} className="flex gap">
                    <form id={"form"+index} key={index} onSubmit={handleSubmit(onSubmitInsertPhotos)} className="align-center flex vertical center" >
                    <input required={true} className='background my-account- margin-top--- margin-right--' {...register("id_patient"+index)} defaultValue={props.patientInfo.id} type="hidden" id="id_patient" />
                    <input className='background my-account- margin-top---' {...register("type"+index)} defaultValue={3} placeholder="type" type="hidden" id={"type"+index} />
                    <input className='background my-account- margin-top---' {...register("image"+index)} placeholder="image" type="file" id="image" />
                    <input className='background my-account- margin-top---' {...register("groupe"+index)} placeholder="groupe" type="text" id="groupe" />
                    <input hidden={true} id={index} ref={(element) => {refs.current[index] = element}} type="submit" value="Insérer la nouvelle ordonnance" />
                    </form>
                </div>})}
                <Button variant="secondary" onClick={()=>setCounter(oldArray=>[...oldArray,"salut"])}>Ajouter une ligne</Button>
                <Button variant="danger" onClick={()=>deleteByIndex(counter.length-1)}>Supprimer une ligne</Button>
            </div>
            <Button variant="primary" onClick={()=>window.location.replace('/patients')}>Ne rien insérer</Button>
            <div className="flex2 center margin-top--">
                <Button variant="primary" onClick={sendAllForms}>Insérer les nouvelles infos</Button>
            </div>
        </div>
    </div>
}