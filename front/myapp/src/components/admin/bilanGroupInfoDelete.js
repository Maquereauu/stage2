import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Photos_ } from "../photos/Get_photos";
import { Bilan_ } from "../bilan/Get_bilan";
import { DeleteBilan_ } from "../../components/AllBilan/Bilan";
import { DeletePhotos_ } from "../../components/AllPhotos/Photos";
export function BilanGroupDeleteAdmin(props){
    const [info,setInfo]=useState([]);
    const [info2,setInfo2]=useState([]);
    const yes = info.filter((info)=>info.id_patient === props.patientInfo.id && info.type == 4 && info.groupe == props.group)
    const no = info2.filter((info2)=>info2.id_patient === props.patientInfo.id && info2.groupe == props.group)
    const Delete = async ()=>{
        const promises = [];
        yes.forEach(photo => {
            promises.push(DeletePhotos_(photo));
          });
        
          no.forEach(bilan => {
            promises.push(DeleteBilan_(bilan));
          });
          await Promise.all(promises);
        }
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
    return <Modal animation={true} show={props.showModalBilanGroupDelete} onHide={props.handleCloseModalBilanGroupDelete}>
    <Modal.Body>
        <p>Êtes vous sur de vouloir supprimer le groupe {props.group}?</p>
        <Button variant="danger" onClick={async()=>{await Delete();window.location.replace('/patients')}}>Supprimer</Button>
    </Modal.Body>
    </Modal>}
    