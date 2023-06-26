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
    const yes = groupBy(info2, 'id_patient')
    Object.keys(yes).map((id_patient)=>{
        yes[id_patient].map((bilan,key)=>{
            if(!ReactSession.get("bilan"+bilan.id)){
                ReactSession.set("patient"+id_patient, true)
                ReactSession.set("patient"+id_patient+"bilan", true)
            }
        })
        })
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