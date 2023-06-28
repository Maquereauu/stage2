import Modal from 'react-bootstrap/Modal';
import { Rdv_ } from "../rdv/Get_rdv";
import { Patient_ } from "../patient/Get_patient";
import React, { useEffect, useState } from 'react';
import { MoveList } from "./moveList"
import { ReactSession } from 'react-client-session';
export function MoveListAdmin(props){
    const [info2,setInfo2]=useState([]);
    const [info3,setInfo3]=useState([]);
    const no = info2.filter((info2)=>info2.type == 2)
    no.map((rdv)=>{
        if(!ReactSession.get("move"+rdv.id)){
            ReactSession.set("movenotif", true)
        }else if(!ReactSession.get("move"+rdv.id+rdv.text+rdv.date)){
            ReactSession.set("movenotif", true)
        }
    })
    useEffect(() => {
        const list2 = Rdv_();
        list2
            .then(result => setInfo2(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
        const list3 = Patient_()
        list3
            .then(result => setInfo3(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalMoveList} onHide={props.handleCloseModalMoveList}>
    <div onClick={()=>props.handleCloseModalMoveList()}>Fermer</div>
    <Modal.Body>
        <MoveList setRdvInfo={props.setRdvInfo} handleCloseModalMoveList={props.handleCloseModalMoveList} handleShowModalMoveInsert={props.handleShowModalMoveInsert} handleShowModalMoveUpdate={props.handleShowModalMoveUpdate} handleShowModalMoveDelete={props.handleShowModalMoveDelete} patientInfo={props.patientInfo} info2={info2} info3={info3}/>
    </Modal.Body>
    </Modal>}

    