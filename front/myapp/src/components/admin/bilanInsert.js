import { useForm } from "react-hook-form";
import { InsertPhotos_ } from "../../components/AllPhotos/Photos";
import { InsertBilan_ } from "../../components/AllBilan/Bilan";
import { UploadPhotos_ } from "../../components/AllPhotos/Photos";
import moment from 'moment';
import 'moment/locale/fr';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import {useRef} from 'react';
export function BilanInsert(props) {
    const { register, handleSubmit, reset,trigger,watch } = useForm();
    const [counter,setCounter]=useState(["salut"]);
    const list=["id_patient","type","image","groupe"];
    const [weekly,setWeekly]=useState();
    const refs = useRef([]);
    const refs2 = useRef([]);
    let test = 1;
    const onSubmitInsertPhotos = async (data) => {
        const newList = Object.fromEntries(Object.entries(data).slice(0, 8));
        const newData = Object.fromEntries(Object.entries(data).slice(8));
        if(test == 1){
            console.log(newList)
            if(newList.shift !== '0' && newList.weekly !== '-1'){
                InsertBilan_(newList)
            }
        if(counter.length !==0)
        {const calls=[...Array(refs.current.length)].map(e => Array(list.length))
        let c = 0
        let calls2 = [0,0];
        Object.entries(newData).map(([key,value])=>{
            calls2[0]=list[c%4]
            if(c%4==2){
                if(typeof(value[0]) !== "undefined")
                {calls2[1]=value[0].name
                UploadPhotos_(value)
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
            InsertPhotos_(dictionary)
        }}
        test = 0;
        window.location.replace('/patients');
    }}
    // const insertAllForms = async() => {
    //     console.log(allData)
    //     allData.map((data,key)=>{
    //         console.log(data)
    //         InsertPhotos_(data)
    //     })
    //     setAllData([])
    //     // window.location.replace('/patients');
    // }
    const sendAllForms = async() => {
        for(let i=0;i<counter.length;i++){
            refs.current[i].click();
        }
        refs2.current[0].click();
    }
    const deleteByIndex = index => {
        setCounter(oldValues => {
          return oldValues.filter((_, i) => i !== index)
        })
      }
      const onChange = (event) => {
        const value = event.target.value;
        setWeekly(value);
      };
      useEffect(() => {
        if (typeof weekly !== "undefined" && weekly !== -1 && weekly !== 0) {
          reset({ date_debut: watch('date') });
        } else {
          reset({ date_debut: "0000-00-00" });
        }
      }, [weekly,watch('date')]);
    return <div>
        <h1 className="title flex2 center margin-top--">Bilan</h1>
        <div className="flex2 vertical center">
            <h2 className='title top left align-center'>Infos</h2>
            <div className="flex2 margin-top--- vertical align-center">
            <form onSubmit={handleSubmit(onSubmitInsertPhotos)}>
            <input required={true} className='background my-account- margin-top--- margin-right--' {...register("id_patient")} defaultValue={props.patientInfo.id} type="hidden" id="id_patient" />
            <input required={true} className='background my-account- margin-top---' {...register("text")} placeholder="text" type="text" id="text" />
            <input className='background my-account- margin-top---' {...register("groupe")} placeholder="groupe" type="text" id="groupe" />
            <select {...register("shift")} id="shift" name="shift">
                <option value={0}>Tournée</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
            </select>
            <div className="margin-right">
            <label>Date
            <input required={true} className='background my-account- margin-top--- margin-right--' {...register("date")} placeholder="date" type="date" id="date" />
            </label>
            </div>
            <select {...register("weekly")} id="weekly" name="weekly" onChange={onChange}>
                <option value={-1}>Récurrence</option>
                <option value={0}>Aucune</option>
                <option value={1}>Hebdomadaire</option>
                <option value={2}>15 jours</option>
                <option value={3}>1 mois</option>
                <option value={4}>2 mois</option>
                <option value={5}>3 mois</option>
            </select>
            {typeof(weekly) !== "undefined" && weekly!= -1 && weekly != 0?<>
            <label>Date début
            <input className='background my-account- margin-top---' {...register("date_debut")} value={watch('date_debut')} placeholder={"Veuillez choisir une date"} readOnly type="text" id="date_debut" />
            </label>
            <label>Date fin
            <input className='background my-account- margin-top---' {...register("date_fin")} placeholder="fin (année-mois-jour)" type="date" id="date_fin" />
            </label></>:<>
            <input hidden={true} className='background my-account- margin-top---' {...register("date_debut")} defaultValue={"0000-00-00"} placeholder="debut (année-mois-jour)" type="date" id="date_debut" />
            <input hidden={true} className='background my-account- margin-top---' {...register("date_fin")} defaultValue={"0000-00-00"} placeholder="fin (année-mois-jour)" type="date" id="date_fin" /></>}
            <input hidden={true} id={0} ref={(element) => {refs2.current[0] = element}} type="submit" value="Insérer la nouvelle plaie" />
            </form>
            {counter.map((item,index)=>{
                return <div key={index} className="flex gap">
                    <form id={"form"+index} key={index} onSubmit={handleSubmit(onSubmitInsertPhotos)} className="align-center flex vertical center" >
                    <input required={true} className='background my-account- margin-top--- margin-right--' {...register("id_patient"+index)} defaultValue={props.patientInfo.id} type="hidden" id="id_patient" />
                    <input className='background my-account- margin-top---' {...register("type"+index)} defaultValue={4} placeholder="type" type="hidden" id={"type"+index} />
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