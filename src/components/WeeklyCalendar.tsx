import React,{ useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from "@fullcalendar/timegrid";

class Calendarweek extends React.Component {
    constructor(props) {
      super(props);
      

   
    }
    render() {
        return(
<FullCalendar
           
             initialView= 'timeGridWeek' 
            defaultView="dayGridMonth"
            eventClick={this.props.handleEventClick}
            header={{
              left: "prev,next, today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            editable={true}
            events={this.props.Items}
            eventLimit={true}
          />
        )}

        }

 export default Calendarweek;