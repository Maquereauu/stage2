import Modal from 'react-bootstrap/Modal';
import { Photos_ } from "../photos/Get_photos";
import React, { useEffect, useState } from 'react';
import { PhotosList } from "./photosList"

export function PhotosListAdmin(props){
    const [info,setInfo]=useState([]);
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