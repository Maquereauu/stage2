import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { ReactSession } from 'react-client-session';
export function BilanList(props) {
    const [disabled,setDisabled]=useState(false);
    const yes = props.info.filter((info)=>info.id_patient === props.patientInfo.id && info.type == 4)
    const no = props.info2.filter((info2)=>info2.id_patient === props.patientInfo.id)
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
            return (
              <>
                <div>Groupe{groupe}</div>
                <div onClick={()=>props.handleShowModalBilanGroupDelete()&props.setGroup(groupe)}>Supprimer</div>
                <div className='box2 background-color-1-5'>
                {newlist[groupe].map((Bilan, key) => {
                  return (
                    <div key={key} className="box2 margin-top">
                      <div className="margin-bottom-- flex space-evenly">
                        {/* <div onClick={()=>props.handleShowModalBilanDelete()&props.setBilanInfo(Bilan)}>Supprimer</div>
                        <div onClick={()=>props.handleShowModalBilanUpdate()&props.setBilanInfo(Bilan)}>Modifier</div> */}
                      </div>
                      <div className="background-color-2-3">
                        <div className="margin-bottom--- flex space-evenly">
                          {"image" in Bilan ? (
                            <img className="prod-img" src={"./img/" + Bilan.image} alt={Bilan.image} />
                          ) : (
                            <>
                            {ReactSession.set("bilan"+Bilan.id, true)}
                            {ReactSession.remove("patient"+Bilan.id_patient, true)}
                            {ReactSession.remove("patient"+Bilan.id_patient+"bilan", true)}
                            <p>{Bilan.text}</p>
                            <p>{Bilan.date}</p>
                            {
                            (() => {
                              switch (Bilan.weekly) {
                                case 0:
                                  return <p>Récurrence: Aucune</p>;
                                case 1:
                                  return <p>Récurrence: Hebdomadaire</p>;
                                case 2:
                                  return <p>Récurrence: 15 jours</p>;
                                case 3:
                                  return <p>Récurrence: 1 mois</p>;
                                case 4:
                                  return <p>Récurrence: 2 mois</p>;
                              }
                            })()
                          }
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
            <Button variant="secondary" disabled={disabled} onClick={() => { props.handleShowModalBilanInsert(); setDisabled(true); }}>
              Insérer un bilan
            </Button>
          </div>
        </>
      );
}

