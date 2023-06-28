import Modal from 'react-bootstrap/Modal';
import { Photos_ } from "../photos/Get_photos";
import { Rdv_ } from "../rdv/Get_rdv";
import React, { useEffect, useState } from 'react';
import { RdvList } from "./rdvList"
import { ReactSession } from 'react-client-session';
export function RdvListAdmin(props){
    const [info2,setInfo2]=useState([]);
    var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };
      const no = info2.filter((info2)=>info2.type == 1)
      const yes = groupBy(no, 'id_patient')
      Object.keys(yes).map((id_patient)=>{
          yes[id_patient].map((rdv,key)=>{
              if(!ReactSession.get("rdv"+rdv.id)){
                  ReactSession.set("patient"+id_patient, true)
                  ReactSession.set("patient"+id_patient+"rdv", true)
                  ReactSession.set("notifpatient",true)
              }else if(!ReactSession.get("rdv"+rdv.id+rdv.text+rdv.date)){
                ReactSession.set("patient"+id_patient, true)
                ReactSession.set("patient"+id_patient+"rdv", true)
                ReactSession.set("notifpatient",true)
            }
          })
          })
    useEffect(() => {
        const list2 = Rdv_();
        list2
            .then(result => setInfo2(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalRdvList} onHide={props.handleCloseModalRdvList}>
    <div onClick={()=>props.handleCloseModalRdvList()}>Fermer</div>
    <Modal.Body>
        <RdvList setRdvInfo={props.setRdvInfo} handleCloseModalRdvList={props.handleCloseModalRdvList} handleShowModalRdvInsert={props.handleShowModalRdvInsert} handleShowModalRdvUpdate={props.handleShowModalRdvUpdate} handleShowModalRdvDelete={props.handleShowModalRdvDelete} patientInfo={props.patientInfo} info2={info2}/>
    </Modal.Body>
    </Modal>}

    