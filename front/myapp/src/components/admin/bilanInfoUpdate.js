import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import { BilanUpdate } from "./bilanUpdate"

export function BilanUpdateAdmin(props){
    return <Modal animation={true} show={props.showModalBilanUpdate} onHide={props.handleCloseModalBilanUpdate}>
    <Modal.Body>
        <BilanUpdate isPlanning={props.isPlanning} bilanInfo={props.bilanInfo}/>
    </Modal.Body>
    </Modal>}

    