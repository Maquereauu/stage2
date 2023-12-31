import Modal from 'react-bootstrap/Modal';
import { Photos_ } from "../photos/Get_photos";
import { Plaies_ } from "../plaies/Get_plaies";
import React, { useEffect, useState } from 'react';
import { MedicList } from "./medicList"
import { ReactSession } from 'react-client-session';
export function MedicListAdmin(props){
    const [info,setInfo]=useState([]);
    const [info2,setInfo2]=useState([]);
    var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };
    const no = info2.filter((info2)=>info2.type == 2)
    const no1 = info.filter((info)=>info.type == 3)
    const yes = groupBy(no, 'id_patient')
    const yes1 = groupBy(no1, 'id_patient')
    Object.keys(yes).map((id_patient)=>{
        yes[id_patient].map((plaies,key)=>{
            if(!ReactSession.get("medic"+plaies.id)){
                ReactSession.set("patient"+id_patient, true)
                ReactSession.set("patient"+id_patient+"medic", true)
                ReactSession.set("notifpatient",true)
            }else if(!ReactSession.get("medic"+plaies.id+plaies.text)){
                ReactSession.set("patient"+id_patient, true)
                ReactSession.set("patient"+id_patient+"medic", true)
                ReactSession.set("notifpatient",true)
            }
        })
        })
    Object.keys(yes1).map((id_patient)=>{
            yes1[id_patient].map((photo,key)=>{
                if(!ReactSession.get("photo"+photo.id)){
                    ReactSession.set("patient"+id_patient, true)
                    ReactSession.set("patient"+id_patient+"medic", true)
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
    return <Modal animation={true} show={props.showModalMedicList} onHide={props.handleCloseModalMedicList}>
    <div onClick={()=>props.handleCloseModalMedicList()}>Fermer</div>
    <Modal.Body>
        <MedicList setPhotosInfo={props.setPhotosInfo} handleShowModalPhotosUpdate={props.handleShowModalPhotosUpdate} handleShowModalPhotosDelete={props.handleShowModalPhotosDelete} setGroup={props.setGroup} handleShowModalMedicGroupDelete={props.handleShowModalMedicGroupDelete} setPlaiesInfo={props.setPlaiesInfo} handleCloseModalMedicList={props.handleCloseModalMedicList} handleShowModalMedicInsert={props.handleShowModalMedicInsert} handleShowModalMedicUpdate={props.handleShowModalMedicUpdate} handleShowModalMedicDelete={props.handleShowModalMedicDelete} patientInfo={props.patientInfo} info={info} info2={info2}/>
    </Modal.Body>
    </Modal>}

    