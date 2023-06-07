import { useState } from 'react';
import moment from 'moment';
import 'moment/locale/fr';
export default function Planning(){
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
              <button onClick={() => handleAddEvent(day)}>Ajouter un évènement</button>
              {renderEventsForDay(day)}
            </div>
          </div>
        );
      }
  
      return days;
    };
  
    const handleAddEvent = (day) => {
      console.log('Add event for', day.format('YYYY-MM-DD'));
    };
  
    const renderEventsForDay = (day) => {
      return (
        <ul className="event-list">
          <li>Event 1</li>
          <li>Event 2</li>
          <li>Event 3</li>
        </ul>
      );
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
    <WeeklyCalendar/>
    </div>
  </>
}