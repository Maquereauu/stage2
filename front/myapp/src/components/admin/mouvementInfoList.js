import Modal from 'react-bootstrap/Modal';
import { Photos_ } from "../photos/Get_photos";
import { Mouvement_ } from "../Mouvement/Get_Mouvement";
import React, { useEffect, useState } from 'react';
import { MouvementList } from "./mouvementList"

export function MouvementListAdmin(props){
    const [info,setInfo]=useState([]);
    const [info2,setInfo2]=useState([]);
    useEffect(() => {
        const list = Photos_();
        list
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
        const list2 = Mouvement_();
        list2
            .then(result => setInfo2(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalMouvementList} onHide={props.handleCloseModalMouvementList}>
    <div onClick={()=>props.handleCloseModalMouvementList()}>Fermer</div>
    <Modal.Body>
        <MouvementList setMouvementInfo={props.setMouvementInfo} handleCloseModalMouvementList={props.handleCloseModalMouvementList} handleShowModalMouvementInsert={props.handleShowModalMouvementInsert} handleShowModalMouvementUpdate={props.handleShowModalMouvementUpdate} handleShowModalMouvementDelete={props.handleShowModalMouvementDelete} patientInfo={props.patientInfo} info={info} info2={info2}/>
    </Modal.Body>
    </Modal>}