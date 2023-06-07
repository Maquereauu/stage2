import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { DeleteBilan_ } from "../../components/AllBilan/Bilan";
export function BilanDeleteAdmin(props){
    return <Modal animation={true} show={props.showModalBilanDelete} onHide={props.handleCloseModalBilanDelete}>
    <Modal.Body>
        <p>Êtes vous sur de vouloir supprimer le texte?</p>
        <Button variant="danger" onClick={()=>DeleteBilan_(props.bilanInfo)&window.location.replace('/patients')}>Supprimer</Button>
    </Modal.Body>
    </Modal>}
    