import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
export function MouvementList(props) {
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
            console.log(groupe);
            return (
              <>
                <div>Groupe{groupe}</div>
                <div className='box2 background-color-1-5'>
                {newlist[groupe].map((Mouvement, key) => {
                  console.log(Mouvement);
                  return (
                    <div key={key} className="box2 margin-top">
                      <div className="margin-bottom-- flex space-evenly">
                        {/* <div onClick={()=>props.handleShowModalMouvementDelete()&props.setMouvementInfo(Mouvement)}>Supprimer</div>
                        <div onClick={()=>props.handleShowModalMouvementUpdate()&props.setMouvementInfo(Mouvement)}>Modifier</div> */}
                      </div>
                      <div className="background-color-2-3">
                        <div className="margin-bottom--- flex space-evenly">
                          {"image" in Mouvement ? (
                            <img className="prod-img" src={"./img/" + Mouvement.image} alt={Mouvement.image} />
                          ) : (
                            <p>{Mouvement.text}</p>
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
            <Button variant="secondary" disabled={disabled} onClick={() => { props.handleShowModalMouvementInsert(); setDisabled(true); }}>
              Insérer des infos sur une plaie
            </Button>
          </div>
        </>
      );
}

