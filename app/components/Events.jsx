"use client"
import React, { useState } from 'react'
import AddEvent from './AddEvent'
import Event from './Event'

export default function Events({missionDay,setMissionDay}) {
    const {year, month, day ,activity } = missionDay

console.log(activity); 
    const date = `${year}-${month}-${day}`
   
    const [fromDate, setFromDate] = useState(date)
  const [toDate, setToDate] = useState(date)
  return (<>
{activity? 
<AddEvent
      
         missionDay={missionDay}
         setMissionDay={setMissionDay}
         fromDate={fromDate}
         setFromDate={setFromDate}
         toDate={toDate}
        setToDate={setToDate}
         
       />: 
        <Event
    missionDay={missionDay}
    setMissionDay={setMissionDay}
    type={"jd"}
    fromDate={fromDate}
    setFromDate={setFromDate}
    toDate={toDate}
        setToDate={setToDate}/>
       }
  


   
       </>
  )
}
