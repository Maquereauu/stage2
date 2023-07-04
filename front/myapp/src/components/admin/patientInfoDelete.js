import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Photos_ } from "../photos/Get_photos";
import { DeletePhotos_ } from "../../components/AllPhotos/Photos";
import { Bilan_ } from "../bilan/Get_bilan";
import { DeleteBilan_ } from "../../components/AllBilan/Bilan";
import { Traitement_ } from "../traitement/Get_traitement";
import { DeleteTraitement_ } from "../../components/AllTraitement/Traitement";
import { Plaies_ } from "../plaies/Get_plaies";
import { DeletePlaies_ } from "../../components/AllPlaies/Plaies";
import { Rdv_ } from "../rdv/Get_rdv";
import { DeleteRdv_ } from "../../components/AllRdv/Rdv";
import { DeletePatient_ } from "../../components/AllPatient/Patient";
export function PatientDeleteAdmin(props){
    const [info,setInfo]=useState([]);
    const [info2,setInfo2]=useState([]);
    const [info3,setInfo3]=useState([]);
    const [info4,setInfo4]=useState([]);
    const [info5,setInfo5]=useState([]);
    const no = info.filter((info)=>info.id_patient == props.patientInfo.id)
    const no2 = info2.filter((info2)=>info2.id_patient == props.patientInfo.id)
    const no3 = info3.filter((info3)=>info3.id_patient == props.patientInfo.id)
    const no4 = info4.filter((info4)=>info4.id_patient == props.patientInfo.id)
    const no5 = info5.filter((info5)=>info5.id_patient == props.patientInfo.id)
    const Delete= async () =>{
        no.map(async(photo)=>{
            await DeletePhotos_(photo)
        })
        no2.map(async(bilan)=>{
            await DeleteBilan_(bilan)
        })
        no3.map(async(traitement)=>{
            await DeleteTraitement_(traitement)
        })
        no4.map(async(plaies)=>{
            await DeletePlaies_(plaies)
        })
        no5.map(async(rdv)=>{
            await DeleteRdv_(rdv)
        })
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
        const list3 = Traitement_();
        list3
            .then(result => setInfo3(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
        const list4 = Plaies_();
        list4
            .then(result => setInfo4(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
        const list5 = Rdv_();
        list5
            .then(result => setInfo5(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalPatientDelete} onHide={props.handleCloseModalPatientDelete}>
    <Modal.Body>
        <p>Êtes vous sur de vouloir supprimer le patient {props.patientInfo.nom} {props.patientInfo.prenom}</p>
        <Button variant="danger" onClick={()=>DeletePatient_(props.patientInfo)&Delete()&window.location.replace('/patients')}>Supprimer</Button>
    </Modal.Body>
    </Modal>}