import Modal from 'react-bootstrap/Modal';
import { Photos_ } from "../photos/Get_photos";
import { Plaies_ } from "../plaies/Get_plaies";
import React, { useEffect, useState } from 'react';
import { PlaiesList } from "./plaiesList"
import { ReactSession } from 'react-client-session';
export function PlaiesListAdmin(props){
    const [info,setInfo]=useState([]);
    const [info2,setInfo2]=useState([]);
    var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };
    const no = info2.filter((info2)=>info2.type == 1)
    const no1 = info.filter((info)=>info.type == 2)
    const yes = groupBy(no, 'id_patient')
    const yes1 = groupBy(no1, 'id_patient')
    Object.keys(yes).map((id_patient)=>{
        yes[id_patient].map((plaies,key)=>{
            if(!ReactSession.get("plaies"+plaies.id)){
                ReactSession.set("patient"+id_patient, true)
                ReactSession.set("patient"+id_patient+"plaies", true)
                ReactSession.set("notifpatient",true)
            }else if(!ReactSession.get("plaies"+plaies.id+plaies.text)){
                ReactSession.set("patient"+id_patient, true)
                ReactSession.set("patient"+id_patient+"plaies", true)
                ReactSession.set("notifpatient",true)
            }
        })
        })
    Object.keys(yes1).map((id_patient)=>{
            yes1[id_patient].map((photo,key)=>{
                if(!ReactSession.get("photo"+photo.id)){
                    ReactSession.set("patient"+id_patient, true)
                    ReactSession.set("patient"+id_patient+"plaies", true)
                    ReactSession.set("notifpatient",true)
                } 
        })})
    useEffect(() => {
        const list = Photos_();
        list
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
        const list2 = Plaies_();
        list2
            .then(result => setInfo2(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalPlaiesList} onHide={props.handleCloseModalPlaiesList}>
    <div onClick={()=>props.handleCloseModalPlaiesList()}>Fermer</div>
    <Modal.Body>
        <PlaiesList setGroup={props.setGroup} setPhotosInfo={props.setPhotosInfo} handleShowModalPlaiesGroupDelete={props.handleShowModalPlaiesGroupDelete} setPlaiesInfo={props.setPlaiesInfo} handleCloseModalPlaiesList={props.handleCloseModalPlaiesList} handleShowModalPlaiesInsert={props.handleShowModalPlaiesInsert} handleShowModalPlaiesUpdate={props.handleShowModalPlaiesUpdate} handleShowModalPlaiesDelete={props.handleShowModalPlaiesDelete} handleShowModalPhotosDelete={props.handleShowModalPhotosDelete} handleShowModalPhotosUpdate={props.handleShowModalPhotosUpdate} patientInfo={props.patientInfo} info={info} info2={info2}/>
    </Modal.Body>
    </Modal>}

    