import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
export function RdvList(props) {
    const [disabled,setDisabled]=useState(false);
    const no = props.info2.filter((info2)=>info2.id_patient === props.patientInfo.id)
    return <>{no.map((Rdv,key)=>{
        return <div key={key} className="box2 margin-top">
            <div className="margin-bottom-- flex space-evenly">
            {/* <div onClick={()=>props.handleShowModalRdvDelete()&props.setRdvInfo(Rdv)}>Supprimer</div>
            <div onClick={()=>props.handleShowModalRdvUpdate()&props.setRdvInfo(Rdv)}>Modifier</div> */}
            </div>
            <div className="background-color-2-3">
                <div className="margin-bottom--- flex space-evenly">
                    <p>{Rdv.text}</p>
            </div>
            </div>
            </div>})}
        <div className='flex2 space-around'>
        <Button variant="secondary" disabled={disabled} onClick={()=>{props.handleShowModalRdvInsert();setDisabled(true);}}>Insérer des infos sur un Rdv</Button>
        </div>
        </>
}

