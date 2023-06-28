import Modal from 'react-bootstrap/Modal';
import { Photos_ } from "../photos/Get_photos";
import React, { useEffect, useState } from 'react';
import { PhotosList } from "./photosList"
import { ReactSession } from 'react-client-session';
export function PhotosListAdmin(props){
    const [info,setInfo]=useState([]);
    var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };
    const no = info.filter((info)=>info.type == 1)
    const yes = groupBy(no, 'id_patient')
    Object.keys(yes).map((id_patient)=>{
        yes[id_patient].map((photo,key)=>{
            if(!ReactSession.get("photo"+photo.id)){
                ReactSession.set("patient"+id_patient, true)
                ReactSession.set("patient"+id_patient+"photo", true)
                ReactSession.set("notifpatient",true)
            }
        })
        })
    useEffect(() => {
        const list = Photos_();
        list
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalPhotosList} onHide={props.handleCloseModalPhotosList}>
    <div onClick={()=>props.handleCloseModalPhotosList()}>Fermer</div>
    <Modal.Body>
        <PhotosList setPhotosInfo={props.setPhotosInfo} handleCloseModalPhotosList={props.handleCloseModalPhotosList} handleShowModalPhotosInsert={props.handleShowModalPhotosInsert} handleShowModalPhotosUpdate={props.handleShowModalPhotosUpdate} handleShowModalPhotosDelete={props.handleShowModalPhotosDelete} patientInfo={props.patientInfo} info={info}/>
    </Modal.Body>
    </Modal>}