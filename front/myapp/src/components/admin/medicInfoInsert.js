import Modal from 'react-bootstrap/Modal';
import { Plaies_ } from "../plaies/Get_plaies";
import React, { useEffect, useState } from 'react';
import { MedicInsert } from "./medicInsert"
export function MedicInsertAdmin(props){
    const [info,setInfo]=useState([]);
    useEffect(() => {
        const list = Plaies_();
        list
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalMedicInsert} onHide={()=>{props.handleCloseModalMedicInsert();window.location.replace('/patients')}}>
    <Modal.Body>
        <MedicInsert patientInfo={props.patientInfo} info={info}/>
    </Modal.Body>
    </Modal>}