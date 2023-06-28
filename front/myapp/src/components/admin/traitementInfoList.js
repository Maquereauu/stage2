import Modal from 'react-bootstrap/Modal';
import { Traitement_ } from "../traitement/Get_traitement";
import React, { useEffect, useState } from 'react';
import { TraitementList } from "./traitementList"
import { ReactSession } from 'react-client-session';
export function TraitementListAdmin(props){
    const [info,setInfo]=useState([]);
    var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };
    const yes = groupBy(info, 'id_patient')
    Object.keys(yes).map((id_patient)=>{
        yes[id_patient].map((traitement,key)=>{
            if(!ReactSession.get("traitement"+traitement.id)){
                ReactSession.set("patient"+id_patient, true)
                ReactSession.set("patient"+id_patient+"traitement", true)
                ReactSession.set("notifpatient",true)
            }else if(!ReactSession.get("traitement"+traitement.id+traitement.medicament+traitement.dose_matin+traitement.dose_midi+traitement.dose_soir+traitement.date_debut+traitement.date_fin)){
                ReactSession.set("patient"+id_patient, true)
                ReactSession.set("patient"+id_patient+"traitement", true)
                ReactSession.set("notifpatient",true)
            }
        })
        })
    useEffect(() => {
        const list = Traitement_();
        list
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalTraitementList} onHide={props.handleCloseModalTraitementList}>
    <div onClick={()=>props.handleCloseModalTraitementList()}>Fermer</div>
    <Modal.Body>
        <TraitementList setTraitementInfo={props.setTraitementInfo} handleCloseModalTraitementList={props.handleCloseModalTraitementList} handleShowModalTraitementInsert={props.handleShowModalTraitementInsert} handleShowModalTraitementUpdate={props.handleShowModalTraitementUpdate} handleShowModalTraitementDelete={props.handleShowModalTraitementDelete} patientInfo={props.patientInfo} info={info}/>
    </Modal.Body>
    </Modal>}