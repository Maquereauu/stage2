import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import { PlaiesUpdate } from "./plaiesUpdate"

export function PlaiesUpdateAdmin(props){
    return <Modal animation={true} show={props.showModalPlaiesUpdate} onHide={props.handleCloseModalPlaiesUpdate}>
    <Modal.Body>
        <PlaiesUpdate PlaiesInfo={props.PlaiesInfo}/>
    </Modal.Body>
    </Modal>}

    