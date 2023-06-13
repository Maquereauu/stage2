import { useState , useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import { Bilan_ } from '../components/bilan/Get_bilan'
import { Patient_ } from '../components/patient/Get_patient'
import { Rdv_ } from '../components/rdv/Get_rdv'
import { ReactSession } from 'react-client-session';
export default function Planning(props){
  const [info,setInfo]=useState([]);
  const [info2,setInfo2]=useState([]);
  const [info3,setInfo3]=useState([]);
  useEffect(() => {
    const list = Bilan_()
  list
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    const list2 = Rdv_()
  list2
            .then(result => setInfo2(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    const list3 = Patient_()
  list3
            .then(result => setInfo3(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
}, []);
  const WeeklyCalendar = () => {
    const [startDate, setStartDate] = useState(moment());
    const daysInWeek = 7;
    
    const generateWeek = () => {
      const weekStart = startDate.clone().startOf('week');
      const days = [];
  
      for (let i = 0; i < daysInWeek; i++) {
        const day = weekStart.clone().add(i, 'days');
        days.push(
          <div className="day" key={day.format('YYYY-MM-DD')}>
            <div className="day-header">{day.format('dddd Do MMMM')}</div>
            <div className="event-container">
              {renderEventsForDay(day)}
              <button onClick={() =>{props.handleShowModalPlanningInsert();props.setDateInfo(day.format("YYYY-MM-DD"))}}>Ajouter un évènement</button>
            </div>
          </div>
        );
      }
  
      return days;
    };

    const renderEventsForDay = (day) => {
      const bilanDay = info.filter((info)=>info.date==day.format("YYYY-MM-DD"))
      const rdvDay = info2.filter((info)=>info.date==day.format("YYYY-MM-DD"))
      return(<>{info.map((Bilan,index)=>{
        const patient = info3.filter((info)=>info.id==Bilan.id_patient)
        if(day.format("dddd") == moment(Bilan.date,"YYYY-MM-DD").format("dddd") && moment(day.format("YYYY-MM-DD")).isAfter(moment(Bilan.date,"YYYY-MM-DD")) && Bilan.weekly == 1 ){
          if (Bilan.shift == 1){
            if(Bilan.id_patient != 0 ){
              return <div className='background-color-t1'><p>{Bilan.text} {patient[0].nom}/{patient[0].prenom}</p></div>
            }else{
              return <div className='background-color-t1'><p>{Bilan.text}</p></div>
            }
          }else if (Bilan.shift == 2){
            if(Bilan.id_patient != 0 ){
              return <div className='background-color-t2'><p>{Bilan.text} {patient[0].nom}/{patient[0].prenom}</p></div>
            }else{
              return <div className='background-color-t2'><p>{Bilan.text}</p></div>
            }
          }
        }})}
        {bilanDay.map(((Bilan,key)=>{
        const patient = info3.filter((info)=>info.id==Bilan.id_patient)
        if (Bilan.shift == 1){
          if(Bilan.id_patient != 0 ){
            return <div className='background-color-t1'><p>{Bilan.text} {patient[0].nom}/{patient[0].prenom}</p></div>
          }else{
            return <div className='background-color-t1'><p>{Bilan.text}</p></div>
          }
        }else if (Bilan.shift == 2){
          if(Bilan.id_patient != 0 ){
            return <div className='background-color-t2'><p>{Bilan.text} {patient[0].nom}/{patient[0].prenom}</p></div>
          }else{
            return <div className='background-color-t2'><p>{Bilan.text}</p></div>
          }
        }
      }))}
      {rdvDay.map(((Rdv,key)=>{
        const patient = info3.filter((info)=>info.id==Rdv.id_patient)
        if(Rdv.id_patient != 0 ){
          return <div className='background-color-t1'><p>{Rdv.text} {patient[0].nom}/{patient[0].prenom}</p></div>
        }else{
          return <div className='background-color-t1'><p>{Rdv.text}</p></div>
        }
      }))}</>)
    };
  
    const previousWeek = () => {
      setStartDate(startDate.clone().subtract(daysInWeek, 'days'));
    };
  
    const nextWeek = () => {
      setStartDate(startDate.clone().add(daysInWeek, 'days'));
    };
  
    return (
      <div>
        <button onClick={previousWeek}>Semaine précédente</button>
        <button onClick={nextWeek}>Semaine suivante</button>
        <div className="calendar">{generateWeek()}</div>
      </div>
    );
  };
    return <>
    <h1 className="title top stroke box">Bienvenue sur le planning.</h1>
    <div>
    {ReactSession.get("username")?
    info3.length?<WeeklyCalendar/>:<></>:<><p>Merci de bien vouloir vous connecter pour accéder aux services.</p></>
}
    </div>
  </>
}