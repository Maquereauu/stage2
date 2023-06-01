import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import { PhotosUpdate } from "./photosUpdate"

export function PhotosUpdateAdmin(props){
    return <Modal animation={true} show={props.showModalPhotosUpdate} onHide={props.handleCloseModalPhotosUpdate}>
    <Modal.Body>
        <PhotosUpdate photosInfo={props.photosInfo}/>
    </Modal.Body>
    </Modal>}