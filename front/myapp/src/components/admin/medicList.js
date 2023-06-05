import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
export function MedicList(props) {
    const [disabled,setDisabled]=useState(false);
    const yes = props.info.filter((info)=>info.id_patient === props.patientInfo.id && info.type == 3)
    const no = props.info2.filter((info2)=>info2.id_patient === props.patientInfo.id && info2.type == 2)
    const list = [...yes,...no]
    console.log(list)
    const newlist = list.sort((a, b) => a.groupe > b.groupe ? 1 : -1)
    return <>{newlist.map((Plaies,key)=>{
        return <div key={key} className="box2 margin-top">
            <div className="margin-bottom-- flex space-evenly">
            {/* <div onClick={()=>props.handleShowModalPlaiesDelete()&props.setPlaiesInfo(Plaies)}>Supprimer</div>
            <div onClick={()=>props.handleShowModalPlaiesUpdate()&props.setPlaiesInfo(Plaies)}>Modifier</div> */}
            </div>
            <div className="background-color-2-3">
                <div className="margin-bottom--- flex space-evenly">
                    {("image" in Plaies)?<img className="prod-img"src={"./img/"+Plaies.image}></img>:<p>{Plaies.text}</p>}
            </div>
            </div>
            </div>})}
        <div className='flex2 space-around'>
        <Button variant="secondary" disabled={disabled} onClick={()=>{props.handleShowModalMedicInsert();setDisabled(true);}}>Insérer un compte rendu</Button>
        </div>
        </>
}

