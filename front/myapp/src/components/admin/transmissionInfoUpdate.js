import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import { TransmissionUpdate } from "./transmissionUpdate"

export function TransmissionUpdateAdmin(props){
    return <Modal animation={true} show={props.showModalTransmissionUpdate} onHide={props.handleCloseModalTransmissionUpdate}>
    <Modal.Body>
        <TransmissionUpdate plaiesInfo={props.plaiesInfo}/>
    </Modal.Body>
    </Modal>}

    