import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { ReactSession } from 'react-client-session';
export function TraitementList(props) {
    const [disabled,setDisabled]=useState(false);
    const yes = props.info.filter((info)=>info.id_patient === props.patientInfo.id)
    return <>{yes.map((traitement,key)=>{
        ReactSession.set("traitement"+traitement.id, true)
        ReactSession.set("traitement"+traitement.id+traitement.medicament+traitement.dose_matin+traitement.dose_midi+traitement.dose_soir+traitement.date_debut+traitement.date_fin, true)
        ReactSession.remove("patient"+traitement.id_patient, true)
        ReactSession.remove("patient"+traitement.id_patient+"traitement", true)
        ReactSession.remove("notifpatient",true)
        return <div key={key} className="box2 margin-top">
            <div className="margin-bottom-- flex space-evenly">
            <div onClick={()=>props.handleShowModalTraitementDelete()&props.setTraitementInfo(traitement)}>Supprimer</div>
            <div onClick={()=>props.handleShowModalTraitementUpdate()&props.setTraitementInfo(traitement)}>Modifier</div>
            </div>
            <div className="background-color-2-3">
                <div className="margin-bottom--- flex space-evenly bigger">
                    <p>Médicament: {traitement.medicament}</p>
                    <p>Dose matin: {traitement.dose_matin}</p>
                    <p>Dose midi: {traitement.dose_midi}</p>
                    <p>Dose soir: {traitement.dose_soir}</p>
                    <p>Date du début: {traitement.date_debut}</p>
                    <p>Date de fin: {traitement.date_fin}</p>
            </div>
            </div>
            </div>})}
        <div className='flex2 space-around'>
        <Button variant="secondary" disabled={disabled} onClick={()=>{props.handleShowModalTraitementInsert();setDisabled(true);}}>Insérer un traitement</Button>
        </div>
        </>
}