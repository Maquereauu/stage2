import Modal from 'react-bootstrap/Modal';
import { Traitement_ } from "../traitement/Get_traitement";
import React, { useEffect, useState } from 'react';
import { TraitementList } from "./traitementList"

export function TraitementListAdmin(props){
    const [info,setInfo]=useState([]);
    useEffect(() => {
        const list = Traitement_();
        list
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalTraitementList} onHide={props.handleCloseModalTraitementList}>
    <Modal.Body>
        <TraitementList setTraitementInfo={props.setTraitementInfo} handleCloseModalTraitementList={props.handleCloseModalTraitementList} handleShowModalTraitementInsert={props.handleShowModalTraitementInsert} handleShowModalTraitementUpdate={props.handleShowModalTraitementUpdate} handleShowModalTraitementDelete={props.handleShowModalTraitementDelete} patientInfo={props.patientInfo} info={info}/>
    </Modal.Body>
    </Modal>}