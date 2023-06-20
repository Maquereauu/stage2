import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import { MoveUpdate } from "./moveUpdate"

export function MoveUpdateAdmin(props){
    return <Modal animation={true} show={props.showModalMoveUpdate} onHide={props.handleCloseModalMoveUpdate}>
    <Modal.Body>
        <MoveUpdate isPlanning={props.isPlanning} rdvInfo={props.rdvInfo}/>
    </Modal.Body>
    </Modal>}

    