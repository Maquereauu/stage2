import Modal from 'react-bootstrap/Modal';
import { Photos_ } from "../photos/Get_photos";
import { Bilan_ } from "../bilan/Get_bilan";
import React, { useEffect, useState } from 'react';
import { BilanList } from "./bilanList"

export function BilanListAdmin(props){
    const [info,setInfo]=useState([]);
    const [info2,setInfo2]=useState([]);
    useEffect(() => {
        const list = Photos_();
        list
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
        const list2 = Bilan_();
        list2
            .then(result => setInfo2(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalBilanList} onHide={props.handleCloseModalBilanList}>
    <div onClick={()=>props.handleCloseModalBilanList()}>Fermer</div>
    <Modal.Body>
        <BilanList setBilanInfo={props.setBilanInfo} handleCloseModalBilanList={props.handleCloseModalBilanList} handleShowModalBilanInsert={props.handleShowModalBilanInsert} handleShowModalBilanUpdate={props.handleShowModalBilanUpdate} handleShowModalBilanDelete={props.handleShowModalBilanDelete} patientInfo={props.patientInfo} info={info} info2={info2}/>
    </Modal.Body>
    </Modal>}

    