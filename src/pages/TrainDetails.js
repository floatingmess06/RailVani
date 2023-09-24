import React,{useState,useEffect} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import axios from 'axios'
import './TrainDetails.css'

const TrainDetails = () => {
  const location=useLocation();
  const {trainDet,lang}=location.state;
  console.log(trainDet);
  const [hour,setHour]=("4")
  const[liveData,setLiveData]=useState({})
  const [loadedData,setLoadedData]=useState(false)
  console.log(lang);
  const handleLiveLoc=async()=>{
    const response = await axios.get(`/getLiveTrainStatus?train_num=${trainDet.train_number}&lang=${lang}`);
    console.log(response.data);
   setLiveData(response.data)
   setLoadedData(true)
    
      console.log(liveData.new_alert_msg )
      console.log(liveData.current_location_info)
      
  }
  // useEffect(() => {
  //  // handleLiveLoc(); // check later --
  //   console.log(liveData.new_alert_msg);
  //   console.log(liveData.current_location_info);
  // }, [liveData]);
  return (
    <div>
      <div id='divH'>
        <h6 id='headh'>TrainDetails</h6>
      </div>
      
      <div id='detmdiv'>
      <div id='detdiv'>
      <p className='para'>Train Name &nbsp;&nbsp;&nbsp;&nbsp;: {trainDet.train_name}</p>
      <p className='para'>Train Number : {trainDet.train_number}</p>
      <p className='para'>From Station &nbsp;: {trainDet.from_sta}</p>
      <p className='para'>To Station   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {trainDet.to_sta}</p>
      </div>
      <div id='detbtn'>
      <button onClick={() => handleLiveLoc()}>Get Train Live Location</button>
      </div>
      </div>
      {
        (liveData.new_alert_msg || liveData.current_location_info) && loadedData?(
          <>
          {liveData.new_alert_msg ? (
        <p>{liveData.new_alert_msg}</p>
      ) : (
        <p className='para'>No new message</p>
      )}
      {liveData.current_location_info &&
      liveData.current_location_info.length > 0 ? (
        liveData.current_location_info.map((element, index) => (
          <div key={index} id='infodet'> 
            <p className='para'>&#8226;{element.hint}</p>
            <br></br>
            <p className='para'>&#8226;{element.readable_message}</p>
            <br></br>
          </div>
          
        ))
      ) : (
        <p>Train not running</p>
      )}
          </>
        ):(
          <p></p>
        )
      }
      
    </div>
  );
}

export default TrainDetails
