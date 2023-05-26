import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
export function TraitementList(props) {
    const [disabled,setDisabled]=useState(false);
    const yes = props.info.filter((info)=>info.id_patient === props.patientInfo.id)
    return <>{yes.map((traitement,key)=>{
        return <div key={key} className="box2 margin-top">
            <div className="margin-bottom-- flex space-evenly">
            <div onClick={()=>props.handleShowModalTraitementDelete()&props.setTraitementInfo(traitement)}>Supprimer</div>
            <div onClick={()=>props.handleShowModalTraitementUpdate()&props.setTraitementInfo(traitement)}>Modifier</div>
            </div>
            <div className="background-color-2-3">
                <div className="margin-bottom--- flex space-evenly">
                    <p>{traitement.medicament}</p>
                    <p>{traitement.dose}</p>
                    <p>{traitement.date_debut}</p>
                    <p>{traitement.date_fin}</p>
            </div>
            </div>
            </div>})}
        <Button variant="secondary" disabled={disabled} onClick={()=>{props.handleShowModalTraitementInsert();setDisabled(true);}}>Insérer un traitement</Button>
        </>
}