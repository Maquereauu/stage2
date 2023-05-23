import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import { TraitementUpdate } from "./traitementUpdate"

export function TraitementUpdateAdmin(props){
    return <Modal animation={true} show={props.showModalTraitementUpdate} onHide={props.handleCloseModalTraitementUpdate}>
    <Modal.Body>
        <TraitementUpdate traitementInfo={props.traitementInfo}/>
    </Modal.Body>
    </Modal>}