import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { DeletePhotos_ } from "../../components/AllPhotos/Photos";
export function PhotosDeleteAdmin(props){
    return <Modal animation={true} show={props.showModalPhotosDelete} onHide={props.handleCloseModalPhotosDelete}>
    <Modal.Body>
        <p>Êtes vous sur de vouloir supprimer l'ordonnance?</p>
        <Button variant="danger" onClick={async()=>await DeletePhotos_(props.photosInfo)&window.location.replace('/patients')}>Supprimer</Button>
    </Modal.Body>
    </Modal>}