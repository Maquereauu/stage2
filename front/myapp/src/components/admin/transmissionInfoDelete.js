import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { DeletePlaies_ } from "../../components/AllPlaies/Plaies";
export function TransmissionDeleteAdmin(props){
    return <Modal animation={true} show={props.showModalTransmissionDelete} onHide={props.handleCloseModalTransmissionDelete}>
    <Modal.Body>
        <p>Êtes vous sur de vouloir supprimer le texte?</p>
        <Button variant="danger" onClick={()=>DeletePlaies_(props.plaiesInfo)&window.location.replace('/patients')}>Supprimer</Button>
    </Modal.Body>
    </Modal>}
    