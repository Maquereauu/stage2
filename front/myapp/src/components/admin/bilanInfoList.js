import Modal from 'react-bootstrap/Modal';
import { Photos_ } from "../photos/Get_photos";
import { Bilan_ } from "../bilan/Get_bilan";
import React, { useEffect, useState } from 'react';
import { BilanList } from "./bilanList"
import { ReactSession } from 'react-client-session';
export function BilanListAdmin(props){
    const [info,setInfo]=useState([]);
    const [info2,setInfo2]=useState([]);
    var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };
    const no1 = info.filter((info)=>info.type == 4)
    const no = info2.filter((info2)=>info2.id_patient != 0)
    const yes = groupBy(no, 'id_patient')
    const yes1 = groupBy(no1, 'id_patient')
    Object.keys(yes).map((id_patient)=>{
        yes[id_patient].map((bilan,key)=>{
            if(!ReactSession.get("bilan"+bilan.id)){
                ReactSession.set("patient"+id_patient, true)
                ReactSession.set("patient"+id_patient+"bilan", true)
                ReactSession.set("notifpatient",true)
            }else if(!ReactSession.get("bilan"+bilan.id+bilan.text+bilan.weekly+bilan.date+bilan.date_fin+bilan.shift)){
                ReactSession.set("patient"+id_patient, true)
                ReactSession.set("patient"+id_patient+"bilan", true)
                ReactSession.set("notifpatient",true)
            }
        })
        })
    Object.keys(yes1).map((id_patient)=>{
            yes1[id_patient].map((photo,key)=>{
                if(!ReactSession.get("photo"+photo.id)){
                    ReactSession.set("patient"+id_patient, true)
                    ReactSession.set("patient"+id_patient+"bilan", true)
                    ReactSession.set("notifpatient",true)
                } 
        })})
    useEffect(() => {
        const list = Photos_();
        list
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
        const list2 = Bilan_();
        list2
            .then(result => setInfo2(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalBilanList} onHide={props.handleCloseModalBilanList}>
    <div onClick={()=>props.handleCloseModalBilanList()}>Fermer</div>
    <Modal.Body>
        <BilanList handleShowModalPhotosUpdate={props.handleShowModalPhotosUpdate} handleShowModalPhotosDelete={props.handleShowModalPhotosDelete} setPhotosInfo={props.setPhotosInfo} handleShowModalBilanGroupDelete={props.handleShowModalBilanGroupDelete} setGroup={props.setGroup} setBilanInfo={props.setBilanInfo} handleCloseModalBilanList={props.handleCloseModalBilanList} handleShowModalBilanInsert={props.handleShowModalBilanInsert} handleShowModalBilanUpdate={props.handleShowModalBilanUpdate} handleShowModalBilanDelete={props.handleShowModalBilanDelete} patientInfo={props.patientInfo} info={info} info2={info2}/>
    </Modal.Body>
    </Modal>}