"use client"
import React, { useState } from 'react'
import AddEvent from './AddEvent'
import Event from './Event'
import Image from 'next/image'

export default function Events({missionDay,setMissionDay,events, setEvents}) {
    const {year, month, day ,activity } = missionDay
    const date = `${year}-${month}-${day}`
     
    const [fromDate, setFromDate] = useState(date)
    const [toDate, setToDate] = useState(date)

  return (<>
{activity? 
  <Event
    missionDay={missionDay}
    setMissionDay={setMissionDay}
    type={activity.activity}
    fromDate={fromDate}
    setFromDate={setFromDate}
    toDate={toDate}
        setToDate={setToDate}/>
        :  
    events!==1? 
  <div className="  h-full flex justify-center items-center">
  <Image 
    onClick={() => setEvents(1)}
    src="addEvent.svg"
    width={200}
    height={155}
    alt="e"
  /> 
   </div>
  :
       <AddEvent
      
         missionDay={missionDay}
         setMissionDay={setMissionDay}
         fromDate={fromDate}
         setFromDate={setFromDate}
         toDate={toDate}
         setToDate={setToDate}
         
      />  
    }
       </>
  )
}
