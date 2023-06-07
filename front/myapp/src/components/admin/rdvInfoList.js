import Modal from 'react-bootstrap/Modal';
import { Photos_ } from "../photos/Get_photos";
import { Rdv_ } from "../rdv/Get_rdv";
import React, { useEffect, useState } from 'react';
import { RdvList } from "./rdvList"

export function RdvListAdmin(props){
    const [info2,setInfo2]=useState([]);
    useEffect(() => {
        const list2 = Rdv_();
        list2
            .then(result => setInfo2(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalRdvList} onHide={props.handleCloseModalRdvList}>
    <div onClick={()=>props.handleCloseModalRdvList()}>Fermer</div>
    <Modal.Body>
        <RdvList setRdvInfo={props.setRdvInfo} handleCloseModalRdvList={props.handleCloseModalRdvList} handleShowModalRdvInsert={props.handleShowModalRdvInsert} handleShowModalRdvUpdate={props.handleShowModalRdvUpdate} handleShowModalRdvDelete={props.handleShowModalRdvDelete} patientInfo={props.patientInfo} info2={info2}/>
    </Modal.Body>
    </Modal>}

    