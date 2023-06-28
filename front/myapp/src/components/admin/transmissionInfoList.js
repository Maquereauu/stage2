import Modal from 'react-bootstrap/Modal';
import { Photos_ } from "../photos/Get_photos";
import { Plaies_ } from "../plaies/Get_plaies";
import React, { useEffect, useState } from 'react';
import { TransmissionList } from "./transmissionList"
import { ReactSession } from 'react-client-session';
export function TransmissionListAdmin(props){
    const [info,setInfo]=useState([]);
    const [info2,setInfo2]=useState([]);
    var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };
    const no = info2.filter((info2)=>info2.type == 3)
    const no1 = info.filter((info)=>info.type == 5)
    const yes = groupBy(no, 'id_patient')
    const yes1 = groupBy(no1, 'id_patient')
    Object.keys(yes).map((id_patient)=>{
        yes[id_patient].map((plaies,key)=>{
            if(!ReactSession.get("transmission"+plaies.id)){
                ReactSession.set("patient"+id_patient, true)
                ReactSession.set("patient"+id_patient+"transmission", true)
                ReactSession.set("notifpatient",true)
            }else if(!ReactSession.get("transmission"+plaies.id+plaies.text)){
                ReactSession.set("patient"+id_patient, true)
                ReactSession.set("patient"+id_patient+"transmission", true)
                ReactSession.set("notifpatient",true)
            }
        })
        })
        Object.keys(yes1).map((id_patient)=>{
            yes1[id_patient].map((photo,key)=>{
                if(!ReactSession.get("photo"+photo.id)){
                    ReactSession.set("patient"+id_patient, true)
                    ReactSession.set("patient"+id_patient+"transmission", true)
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
    return <Modal animation={true} show={props.showModalTransmissionList} onHide={props.handleCloseModalTransmissionList}>
    <div onClick={()=>props.handleCloseModalTransmissionList()}>Fermer</div>
    <Modal.Body>
        <TransmissionList setGroup={props.setGroup} setPhotosInfo={props.setPhotosInfo} handleShowModalTransmissionGroupDelete={props.handleShowModalTransmissionGroupDelete} setPlaiesInfo={props.setPlaiesInfo} handleCloseModalTransmissionList={props.handleCloseModalTransmissionList} handleShowModalTransmissionInsert={props.handleShowModalTransmissionInsert} handleShowModalTransmissionUpdate={props.handleShowModalTransmissionUpdate} handleShowModalTransmissionDelete={props.handleShowModalTransmissionDelete} handleShowModalPhotosDelete={props.handleShowModalPhotosDelete} handleShowModalPhotosUpdate={props.handleShowModalPhotosUpdate} patientInfo={props.patientInfo} info={info} info2={info2}/>
    </Modal.Body>
    </Modal>}

    