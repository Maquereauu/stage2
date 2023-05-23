import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { DeleteTraitement_ } from "../../components/AllTraitement/Traitement";
export function TraitementDeleteAdmin(props){
    return <Modal animation={true} show={props.showModalTraitementDelete} onHide={props.handleCloseModalTraitementDelete}>
    <Modal.Body>
        <p>Êtes vous sur de vouloir supprimer le traitement</p>
        <Button variant="danger" onClick={()=>DeleteTraitement_(props.traitementInfo)&window.location.replace('/patients')}>Supprimer</Button>
    </Modal.Body>
    </Modal>}