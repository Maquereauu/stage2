import Modal from 'react-bootstrap/Modal';
import { Traitement_ } from "../traitement/Get_traitement";
import React, { useEffect, useState } from 'react';
import { TraitementInsert } from "./traitementInsert"
export function TraitementInsertAdmin(props){
    const [info,setInfo]=useState([]);
    useEffect(() => {
        const list = Traitement_();
        list
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalTraitementInsert} onHide={()=>{props.handleCloseModalTraitementInsert();window.location.replace('/patients')}}>
    <Modal.Body>
        <TraitementInsert patientInfo={props.patientInfo} info={info}/>
    </Modal.Body>
    </Modal>}