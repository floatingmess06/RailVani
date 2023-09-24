import React from 'react'

const PnrStatus = ({result}) => {
    console.log(result.pnrNum)
    return (
      <div>
        <p>BoardingStationName: {result.pnrNum.BoardingStationName}</p>
        <p>ReservationUptoName:{result.pnrNum.ReservationUptoName}</p>
        <p>Train Name:{result.pnrNum.TrainName}</p>
        <p>Train Number:{result.pnrNum.TrainNo}</p>
         
         <h1>Passenger Status</h1>
         {
            result.pnrNum.PassengerStatus && result.pnrNum.PassengerStatus.map((status)=>
                (
               <>
               <p>BookingStatus:{status.BookingStatus}</p>
               <p>BookingStatusNew:{status.BookingStatusNew}</p>
               <p>CurrentStatusNew:{status.CurrentStatusNew}</p>
               <p>Percentage:{status.PredictionPercentage}</p>
               
               </>  
               )
            )
         }
      
      </div>
    );
}

export default PnrStatus