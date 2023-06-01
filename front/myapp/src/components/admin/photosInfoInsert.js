import Modal from 'react-bootstrap/Modal';
import { Photos_ } from "../photos/Get_photos";
import React, { useEffect, useState } from 'react';
import { PhotosInsert } from "./photosInsert"
export function PhotosInsertAdmin(props){
    const [info,setInfo]=useState([]);
    useEffect(() => {
        const list = Photos_();
        list
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalPhotosInsert} onHide={()=>{props.handleCloseModalPhotosInsert();window.location.replace('/patients')}}>
    <Modal.Body>
        <PhotosInsert patientInfo={props.patientInfo} info={info}/>
    </Modal.Body>
    </Modal>}