import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import { ReactSession } from 'react-client-session';
export function MoveList(props) {
    const [disabled,setDisabled]=useState(false);
    const no = props.info2.filter((info2)=>info2.type == 2)
    const MonthlyCalendar = () => {
        const [startDate, setStartDate] = useState(moment());
        const daysInMonth = moment(startDate.format('YYYY-MM')).daysInMonth();
        const generateMonth = () => {
            const monthStart = startDate.clone().startOf('month');
            const months = [];
            const month = monthStart.clone().add(0, 'month');
            months.push(
                <div>
                  <div>{month.format('MMMM YYYY')}</div>
                  <div>
                    {renderEventsForMonth(month)}
                  </div>
                </div>
              );
              return months;}
        const renderEventsForMonth = (month) => {
            const moveMonth = no.filter((info)=>moment(info.date).isSame(month,"month"))
            return <>{moveMonth.map((Rdv,key)=>{
                const patient = props.info3.filter((info)=>info.id==Rdv.id_patient)
                return <div key={key} className="box2">
                    <div className="margin-bottom-- flex space-evenly">
                    <div onClick={()=>props.handleShowModalMoveDelete()&props.setRdvInfo(Rdv)}>Supprimer</div>
                    <div onClick={()=>props.handleShowModalMoveUpdate()&props.setRdvInfo(Rdv)}>Modifier</div>
                    </div>
                    <div className="background-color-2-3">
                        <div className="margin-bottom--- flex space-evenly bigger">
                            <p>Détails: {Rdv.text}</p>
                            <p>Patient: {patient[0].nom}/{patient[0].prenom}</p>
                            <p>Date: {Rdv.date}</p>
                            {ReactSession.set("move"+Rdv.id, true)}
                            {ReactSession.set("move"+Rdv.id+Rdv.text+Rdv.date,true)}
                            {ReactSession.remove("movenotif", true)}
                    </div>
                    </div>
                    </div>})}
            </>
        }
        const previousMonth = () => {
            setStartDate(startDate.clone().subtract(daysInMonth, 'days'));
          };
        
          const nextMonth = () => {
            setStartDate(startDate.clone().add(daysInMonth, 'days'));
          };
          return (
            <div>
              <button onClick={previousMonth}>Mois précédent</button>
              <button onClick={nextMonth}>Mois suivant</button>
              <div className="calendar">{generateMonth()}</div>
            </div>
          );
    }
    return <>
    <MonthlyCalendar/>
        <div className='flex2 space-around'>
        <Button variant="secondary" disabled={disabled} onClick={()=>{props.handleShowModalMoveInsert();setDisabled(true);}}>Insérer des infos sur un mouvement</Button>
        </div>
        </>
}

