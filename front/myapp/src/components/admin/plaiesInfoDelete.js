import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { DeletePlaies_ } from "../../components/AllPlaies/Plaies";
export function PlaiesDeleteAdmin(props){
    return <Modal animation={true} show={props.showModalPlaiesDelete} onHide={props.handleCloseModalPlaiesDelete}>
    <Modal.Body>
        <p>Êtes vous sur de vouloir supprimer le texte?</p>
        <Button variant="danger" onClick={async()=>await DeletePlaies_(props.plaiesInfo)&window.location.replace('/patients')}>Supprimer</Button>
    </Modal.Body>
    </Modal>}
    