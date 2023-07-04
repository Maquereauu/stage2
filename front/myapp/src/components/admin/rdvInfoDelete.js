import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { DeleteRdv_ } from "../../components/AllRdv/Rdv";
export function RdvDeleteAdmin(props){
    return <Modal animation={true} show={props.showModalRdvDelete} onHide={props.handleCloseModalRdvDelete}>
    <Modal.Body>
        <p>Êtes vous sur de vouloir supprimer le rdv?</p>
        <Button variant="danger" onClick={async()=>await DeleteRdv_(props.rdvInfo)&props.isPlanning?window.location.replace('/planning'):window.location.replace('/patients')}>Supprimer</Button>
    </Modal.Body>
    </Modal>}
    