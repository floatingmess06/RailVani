import React from 'react'

const TrainSchedule = ({result}) => {
  return (
    <div>
      <p>Train Number : {result.trainSchedule.trainNumber}</p>
      <p>Train Name : {result.trainSchedule.trainName}</p>
      <p>TrainType : {result.trainSchedule.trainType}</p>

      <h1>Run Days</h1>
      <p>Monday : {result.trainSchedule.runDays.mon}</p>
      <p>Tuesday : {result.trainSchedule.runDays.tue}</p>
      <p>Wednesday : {result.trainSchedule.runDays.wed}</p>
      <p>Thursday : {result.trainSchedule.runDays.thu}</p>
      <p>Friday : {result.trainSchedule.runDays.fri}</p>
      <p>Saturday : {result.trainSchedule.runDays.sat}</p>
      <p>Sunday : {result.trainSchedule.runDays.sun}</p>
    
      <h1>Route</h1>
      {
         result.trainSchedule.route && result.trainSchedule.route.reverse().map((res)=>(
          <>
             <p>Distance from source :{res.distance_from_source}</p>
             <p>state name : {res.state_name}</p>
             <p> station name:{res.station_name} </p>
            <p>At platform number :{res.platform_number}</p> 
            <br></br>
           
          </>
         ))

      }
    
    </div>
  );
}

export default TrainSchedule