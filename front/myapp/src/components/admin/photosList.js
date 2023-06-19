import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { ReactSession } from 'react-client-session';
export function PhotosList(props) {
    const [disabled,setDisabled]=useState(false);
    const yes = props.info.filter((info)=>info.id_patient === props.patientInfo.id && info.type == 1)
    return <>{yes.map((Photos,key)=>{
        ReactSession.set("photo"+Photos.id, true)
        ReactSession.remove("patient"+Photos.id_patient, true)
        ReactSession.remove("patient"+Photos.id_patient+"photo", true)
        return <div key={key} className="box2 margin-top">
            <div className="margin-bottom-- flex space-evenly">
            <div onClick={()=>props.handleShowModalPhotosDelete()&props.setPhotosInfo(Photos)}>Supprimer</div>
            {/* <div onClick={()=>props.handleShowModalPhotosUpdate()&props.setPhotosInfo(Photos)}>Modifier</div> */}
            </div>
            <div className="background-color-2-3">
                <div className="margin-bottom--- flex space-evenly">
                    <img className="prod-img"src={"./img/"+yes[key].image}></img>
            </div>
            </div>
            </div>})}
        <div className='flex2 space-around'>
        <Button variant="secondary" disabled={disabled} onClick={()=>{props.handleShowModalPhotosInsert();setDisabled(true);}}>Insérer une ordonnance</Button>
        </div>
        </>
}