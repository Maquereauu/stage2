import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import { RdvUpdate } from "./rdvUpdate"

export function RdvUpdateAdmin(props){
    return <Modal animation={true} show={props.showModalRdvUpdate} onHide={props.handleCloseModalRdvUpdate}>
    <Modal.Body>
        <RdvUpdate rdvInfo={props.rdvInfo}/>
    </Modal.Body>
    </Modal>}

    