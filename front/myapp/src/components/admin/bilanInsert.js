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
    const { register, handleSubmit, reset,trigger,watch,setValue } = useForm();
    const [counter,setCounter]=useState(["salut"]);
    const list=["id_patient","type","image","groupe"];
    const [oops,setOops]=useState(0);
    const [weekly,setWeekly]=useState();
    const [newGroup,setNewGroup]=useState();
    const PatientBilanList = props.info.filter((info)=>info.id_patient === props.patientInfo.id)
    const groups = []
    const allgroups = PatientBilanList.map((bilan)=>{
        groups.push(bilan.groupe)
    })
    const groupList = groups.filter((bilan, index) => { 
        return groups.indexOf(bilan) == index;
    })
    const refs = useRef([]);
    const refs2 = useRef([]);
    const onSubmitInsertPhotos = async (data) => {
        let newList;
        let newData;
        if (data.addgroupe) {
          newList = Object.fromEntries(Object.entries(data).slice(0, 9));
          newData = Object.fromEntries(Object.entries(data).slice(9));
        } else {
          newList = Object.fromEntries(Object.entries(data).slice(0, 8));
          newData = Object.fromEntries(Object.entries(data).slice(8));
        }
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
            if (newList.addgroupe) {
                newList.groupe = newList.addgroupe;
              }
            await InsertBilan_(newList)
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
        if(refs2.current[0])
        {refs2.current[0].click();}
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
      const onChange2 = (event) => {
        const value = event.target.value;
        setNewGroup(value);
      };
      useEffect(() => {
        if (typeof(weekly) !== "undefined" && weekly !== -1 && weekly !== 0) {
          setValue("date_debut", watch("date"));
        } else {
          setValue("date_debut", null);
          setValue("date_fin", null);
        }
      }, [weekly, watch('date')]);
      
      useEffect(() => {
        if (newGroup == -1) {
            setValue("groupe", watch("addgroupe"));
          }else if(typeof(newGroup == "undefined")){
            
          } else {
            setValue("groupe", newGroup);
          }
      }, [newGroup,watch('group'),watch('addgroupe')]);
    return <div>
        <h1 className="title flex2 center margin-top--">Bilan</h1>
        <div className="flex2 vertical center">
            <h2 className='title top left align-center'>Infos</h2>
            <div className="flex2 margin-top--- vertical align-center">
            <form className='margin-bottom---' onSubmit={handleSubmit(onSubmitInsertPhotos)}>
            <input required={true} className='background my-account- margin-top--- margin-right--' {...register("id_patient")} defaultValue={props.patientInfo.id} type="hidden" id="id_patient" />
            <input required={true} className='background my-account- margin-top---' {...register("text")} placeholder="text" type="text" id="text" />
            <select {...register("groupe")} id="groupe" name="groupe" onChange={onChange2}>
                <option value={-2}>Liste groupes</option>
                <option value={-1}>Créer un nouveau groupe</option>
                {groupList.map((group,key)=>{
                    return <option key={key} value={group}>{group}</option>
                })}
            </select>
            {typeof(newGroup) !== "undefined" && newGroup== -1?
            <input required={true} className='background my-account- margin-top---' {...register("addgroupe")} placeholder="groupe" type="text" id="groupe" />
            :<></>}
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
            <input hidden={true} className='background my-account- margin-top---' {...register("date_debut")} defaultValue={null} placeholder="debut (année-mois-jour)" type="date" id="date_debut" />
            <input hidden={true} className='background my-account- margin-top---' {...register("date_fin")} defaultValue={null} placeholder="fin (année-mois-jour)" type="date" id="date_fin" /></>}
            <input hidden={true} id={0} ref={(element) => {refs2.current[0] = element}} type="submit" value="Insérer la nouvelle plaie" />
            </form>
            {counter.map((item,index)=>{
                return <div key={index} className="flex gap margin-bottom---">
                    <form id={"form"+index} key={index} onSubmit={handleSubmit(onSubmitInsertPhotos)} className="align-center flex vertical center" >
                    <input required={true} className='background my-account- margin-top--- margin-right--' {...register("id_patient"+index)} defaultValue={props.patientInfo.id} type="hidden" id="id_patient" />
                    <input className='background my-account- margin-top---' {...register("type"+index)} defaultValue={4} placeholder="type" type="hidden" id={"type"+index} />
                    <input className='background my-account- margin-top---' {...register("image"+index)} placeholder="image" type="file" id="image" />
                    <input className='background my-account- margin-top---' {...register("groupe"+index)} placeholder="groupe" type="text" id="groupe" />
                    <input hidden={true} id={index} ref={(element) => {refs.current[index] = element}} type="submit" value="Insérer la nouvelle ordonnance" />
                    </form>
                </div>})}
                <Button variant="secondary" className="margin-bottom---" onClick={()=>setCounter(oldArray=>[...oldArray,"salut"])}>Ajouter une ligne</Button>
                <Button variant="danger" className="margin-bottom---" onClick={()=>deleteByIndex(counter.length-1)}>Supprimer une ligne</Button>
                <Button variant="primary" onClick={()=>window.location.replace('/patients')}>Ne rien insérer</Button>
            </div>
            <div className="flex2 center margin-top--">
                <Button variant="primary" onClick={sendAllForms}>Insérer les nouvelles infos</Button>
            </div>
        </div>
    </div>
}