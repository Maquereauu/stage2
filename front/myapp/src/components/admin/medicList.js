import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { ReactSession } from 'react-client-session';
export function MedicList(props) {
    const [disabled,setDisabled]=useState(false);
    const yes = props.info.filter((info)=>info.id_patient === props.patientInfo.id && info.type == 3)
    const no = props.info2.filter((info2)=>info2.id_patient === props.patientInfo.id && info2.type == 2)
    const list = [...yes,...no]
    var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };
    const newlist = groupBy(list, 'groupe')
    return (
        <>
          {Object.keys(newlist).map((groupe) => {
            console.log(groupe);
            return (
              <>
                <div>Groupe{groupe}</div>
                <div onClick={()=>props.handleShowModalMedicGroupDelete()&props.setGroup(groupe)}>Supprimer</div>
                <div className='box2 background-color-1-5'>
                {newlist[groupe].map((Plaies, key) => {
                  console.log(Plaies);
                  return (
                    <div key={key} className="box2 margin-top">
                      <div className="margin-bottom-- flex space-evenly">
                        {/* <div onClick={()=>props.handleShowModalPlaiesDelete()&props.setPlaiesInfo(Plaies)}>Supprimer</div>
                        <div onClick={()=>props.handleShowModalPlaiesUpdate()&props.setPlaiesInfo(Plaies)}>Modifier</div> */}
                      </div>
                      <div className="background-color-2-3">
                        <div className="margin-bottom--- flex space-evenly">
                          {"image" in Plaies ? (
                            <img className="prod-img" src={"./img/" + Plaies.image} alt={Plaies.image} />
                          ) : (
                            <>
                            {ReactSession.set("medic"+Plaies.id, true)}
                            {ReactSession.remove("patient"+Plaies.id_patient, true)}
                            {ReactSession.remove("patient"+Plaies.id_patient+"medic", true)}
                            <p>{Plaies.text}</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}</div>
              </>
            );
          })}
          <div className="flex2 space-around">
            <Button variant="secondary" disabled={disabled} onClick={() => { props.handleShowModalMedicInsert(); setDisabled(true); }}>
              Insérer un compte rendu
            </Button>
          </div>
        </>
      );
}

