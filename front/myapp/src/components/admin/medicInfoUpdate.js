import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import { MedicUpdate } from "./medicUpdate"

export function MedicUpdateAdmin(props){
    return <Modal animation={true} show={props.showModalMedicUpdate} onHide={props.handleCloseModalMedicUpdate}>
    <Modal.Body>
        <MedicUpdate PlaiesInfo={props.PlaiesInfo}/>
    </Modal.Body>
    </Modal>}

    