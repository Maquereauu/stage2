import Modal from 'react-bootstrap/Modal';
import { Rdv_ } from "../rdv/Get_rdv";
import React, { useEffect, useState } from 'react';
import { RdvInsert } from "./rdvInsert"
export function RdvInsertAdmin(props){
    const [info,setInfo]=useState([]);
    useEffect(() => {
        const list = Rdv_();
        list
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalRdvInsert} onHide={()=>{props.handleCloseModalRdvInsert();window.location.replace('/patients')}}>
    <Modal.Body>
        <RdvInsert patientInfo={props.patientInfo} info={info}/>
    </Modal.Body>
    </Modal>}