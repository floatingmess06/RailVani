import React from 'react'

const TrainsBothCodes = ({result}) => {
  return (
    <div>
      {
        result.trains.map((train)=>(
          <>
          <p>Train Name :{train.train_name}</p>
          <p>Train number :{train.train_number}</p>
           <p>From Station name:{train.from_station_name}</p>
          <p>To station name :{train.to_station_name}</p>
          <p>Distance :{train.distance} Km</p>
           <p>Duration Time :{train.duration} Hrs</p>
          <p>Station leaving time :{train.from_sta} Hr</p>
          <p>Destination arriving time:{train.to_sta}</p>
          <p>Halt Between stations :{train.halt_stn} stations</p>
          <br></br>
          </>
        ))
      }
    </div>
  )
}

export default TrainsBothCodes