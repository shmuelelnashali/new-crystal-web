"use client"
import React, { useEffect, useState } from 'react'
import AddEvent from './AddEvent'
import Event from './Event'
import Image from 'next/image'
import EditEvent from './EditEvent'

{/* <Acitivty
</Acitivty>
<Edit ><new></new></Edit>

events === add && <New></New>
event === edit && <Edit></Edit>
acivity && event!== add && !== edit & <Acitivty></Acitivty> */}


export default function Events({missionDay,setMissionDay,events, setEvents,eventDate, setEventDate}) {
    const {year, month, day ,activity } = missionDay
    // const {beginning_date , end_date ,activityDay}= eventDate
    // const date = `${year}-${month}-${day}`
    
    console.log(events);
   
    useEffect(() => {
      if (events === "new" || events === "edit") {
        setEvents("add");
      }
    }, [missionDay])
  return (
  <>
  


{!activity && events!== "new" && events!== "edit" &&  
  <div  className="  h-full flex justify-center items-center">
    <Image 
     onClick={() =>{ setEvents("new")
      console.log("new")}
     }
      src="addEvent.svg"
      width={240}
      height={155}
      alt="e"
    /> 
   </div>}
  {events=="new"&&
       <AddEvent
         missionDay={missionDay}
         setMissionDay={setMissionDay}
         eventDate={eventDate}
         setEventDate={setEventDate}
      />  }
    
  {events=="edit"&&
       <EditEvent
         missionDay={missionDay}
         setMissionDay={setMissionDay}
         eventDate={eventDate}
         setEventDate={setEventDate}
      />  }
    {activity&&  events!== "edit" && 
<Event missionDay={missionDay} setMissionDay={setMissionDay}  eventDate={eventDate}/>}
       </>
  )
}


