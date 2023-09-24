import React from 'react'

const TrainStatus = ({result}) => {
  return (
    <div>
      <p>Current status starting point: {result.trainStatus.cur_stn_sta} Hrs</p>
      <p>Total distance covered {result.trainStatus.total_distance}</p>
      <p>Current state name : {result.trainStatus.current_state_code}</p>
      <p>Current State Name:{result.trainStatus.current_station_name}</p>
      
      <h2>Current location info</h2>
      {result.trainStatus.current_location_info &&
        result.trainStatus.current_location_info.map((info) => (
          <>
            <p>Hint : {info.hint}</p>
            <p>Message:{info.readable_message}</p>
          </>
        ))}
    </div>
  );
}

export default TrainStatus