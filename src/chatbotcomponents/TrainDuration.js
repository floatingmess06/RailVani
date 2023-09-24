import React from 'react'

const TrainDuration = ({result}) => {
  return (
    <div>
      <h1>Trains List</h1>
      {
        result.trains && result.trains.map((train)=>(
            <>
            <p>Train Number :{train.trainNumber}</p>
            <p>Arrival time :{train.arrivalTime}</p>
            <p>Departure time:{train.departureTime}</p>            
            <br></br>
            </>


        ))
      }
   
      
   
    </div>
  )
}

export default TrainDuration