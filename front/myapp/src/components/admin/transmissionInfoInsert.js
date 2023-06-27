import Modal from 'react-bootstrap/Modal';
import { Plaies_ } from "../plaies/Get_plaies";
import React, { useEffect, useState } from 'react';
import { TransmissionInsert } from "./transmissionInsert"
export function TransmissionInsertAdmin(props){
    const [info,setInfo]=useState([]);
    useEffect(() => {
        const list = Plaies_();
        list
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalTransmissionInsert} onHide={()=>{props.handleCloseModalTransmissionInsert();window.location.replace('/patients')}}>
    <Modal.Body>
        <TransmissionInsert patientInfo={props.patientInfo} info={info}/>
    </Modal.Body>
    </Modal>}