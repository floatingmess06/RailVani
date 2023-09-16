import React,{useState,useEffect} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import axios from 'axios'

const TrainDetails = () => {
  const location=useLocation();
  const {trainDet,lang}=location.state;
  console.log(trainDet);
  const [hour,setHour]=("4")
  const[liveData,setLiveData]=useState({})
  console.log(lang);
  const handleLiveLoc=async()=>{
    const response = await axios.get(`/getLiveTrainStatus?train_num=${trainDet.train_number}&lang=${lang}`);
    console.log(response.data);
   setLiveData(response.data)
    
      console.log(liveData.new_alert_msg )
      console.log(liveData.current_location_info)
      
  }
  useEffect(() => {
   // handleLiveLoc(); // check later --
    console.log(liveData.new_alert_msg);
    console.log(liveData.current_location_info);
  }, [liveData]);
  return (
    <div>
      TrainDetails
      <p>{trainDet.train_name}</p>
      <p>{trainDet.train_number}</p>
      <p>{trainDet.from_sta}</p>
      <p>{trainDet.to_sta}</p>
      <button onClick={() => handleLiveLoc()}>Get Train Live Location</button>
      {liveData.new_alert_msg ? (
        <p>{liveData.new_alert_msg}</p>
      ) : (
        <p></p>
      )}
      {liveData.current_location_info &&
      liveData.current_location_info.length > 0 ? (
        liveData.current_location_info.map((element, index) => (
          <div key={index}>
            <p>{element.hint}</p>
            <p>{element.readable_message}</p>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default TrainDetails
