import React from 'react'

const StationPanel = ({title,allStations,check,setStation}) => {
    
  return (
    <div>
        {
        check &&
      <select name={title} onChange={(e)=>{setStation(e.target.value)}}>
      {allStations && allStations.map((station)=>{
       
        return <option value={station.code}>{station.name}</option>
      }
      )}
     </select>
    
    
    }
    </div>
  )
}

export default StationPanel
