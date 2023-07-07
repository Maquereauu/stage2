import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Photos_ } from "../photos/Get_photos";
import { Plaies_ } from "../plaies/Get_plaies";
import { DeletePlaies_ } from "../../components/AllPlaies/Plaies";
import { DeletePhotos_ } from "../../components/AllPhotos/Photos";
export function TransmissionGroupDeleteAdmin(props){
    const [info,setInfo]=useState([]);
    const [info2,setInfo2]=useState([]);
    const yes = info.filter((info)=>info.id_patient === props.patientInfo.id && info.type == 5 && info.groupe == props.group)
    const no = info2.filter((info2)=>info2.id_patient === props.patientInfo.id && info2.groupe == props.group && info2.type == 3)
    const Delete = async ()=>{
        const promises = [];
        yes.forEach(photo => {
            promises.push(DeletePhotos_(photo));
          });
        
          no.forEach(plaie => {
            promises.push(DeleteBilan_(plaie));
          });
          await Promise.all(promises);
        }
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
    return <Modal animation={true} show={props.showModalTransmissionGroupDelete} onHide={props.handleCloseModalTransmissionGroupDelete}>
    <Modal.Body>
        <p>Êtes vous sur de vouloir supprimer le groupe {props.group}?</p>
        <Button variant="danger" onClick={async()=>{await Delete();window.location.replace('/patients')}}>Supprimer</Button>
    </Modal.Body>
    </Modal>}
    