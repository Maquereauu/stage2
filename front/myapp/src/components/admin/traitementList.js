import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
export function TraitementList(props) {
    const [disabled,setDisabled]=useState(false);
    const yes = props.info.filter((info)=>info.id_patient === props.patientInfo.id)
    return <>{yes.map((traitement,key)=>{
        return <div key={key}>
            <p>{traitement.traitement}</p>
            </div>})}
        <Button variant="secondary" disabled={disabled} onClick={()=>{props.handleShowModalTraitementInsert();setDisabled(true);}}>Insérer un traitement</Button>
        </>
}