import Modal from 'react-bootstrap/Modal';
import { Bilan_ } from "../bilan/Get_bilan";
import React, { useEffect, useState } from 'react';
import { BilanInsert } from "./bilanInsert"
export function BilanInsertAdmin(props){
    const [info,setInfo]=useState([]);
    useEffect(() => {
        const list = Bilan_();
        list
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalBilanInsert} onHide={()=>{props.handleCloseModalBilanInsert();window.location.replace('/patients')}}>
    <Modal.Body>
        <BilanInsert patientInfo={props.patientInfo} info={info}/>
    </Modal.Body>
    </Modal>}