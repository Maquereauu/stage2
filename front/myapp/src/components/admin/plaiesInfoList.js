import Modal from 'react-bootstrap/Modal';
import { Photos_ } from "../photos/Get_photos";
import { Plaies_ } from "../plaies/Get_plaies";
import React, { useEffect, useState } from 'react';
import { PlaiesList } from "./plaiesList"

export function PlaiesListAdmin(props){
    const [info,setInfo]=useState([]);
    const [info2,setInfo2]=useState([]);
    useEffect(() => {
        const list = Photos_();
        list
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
        const list2 = Plaies_();
        list2
            .then(result => setInfo2(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalPlaiesList} onHide={props.handleCloseModalPlaiesList}>
    <div onClick={()=>props.handleCloseModalPlaiesList()}>Fermer</div>
    <Modal.Body>
        <PlaiesList setPlaiesInfo={props.setPlaiesInfo} handleCloseModalPlaiesList={props.handleCloseModalPlaiesList} handleShowModalPlaiesInsert={props.handleShowModalPlaiesInsert} handleShowModalPlaiesUpdate={props.handleShowModalPlaiesUpdate} handleShowModalPlaiesDelete={props.handleShowModalPlaiesDelete} patientInfo={props.patientInfo} info={info} info2={info2}/>
    </Modal.Body>
    </Modal>}

    