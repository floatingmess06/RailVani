import React,{useState} from 'react'
import { useLocation } from "react-router-dom";
import { franc } from "franc-min";
import StationPanel from "../components/StationPanel";
import TrainPanel from "../components/TrainPanel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import CustomButton from "../components/CustomButton";
const Chatbot = () => {
    const { state } = useLocation();
    
    const [sourceCity, setSourceCity] = useState("");
    const [destinationCity, setDestinationCity] = useState("");
     const [sourceCityStations, setSourceCityStations] = useState([]);
     const [destinationCityStations, setDestinationCityStations] = useState([]);
      const [isSourceCityActive, setIsSourceCityActive] = useState(false);
      const [isDestinationCityActive, setIsDestinationCityActive] =
        useState(false);
       const [sourceStation, setSourceStation] = useState("");
       const [destinationStation, setDestinationStation] = useState("");
       const [allTrains, setAllTrains] = useState([]);
       const [journeyDate, setJourneyDate] = useState("");
       const [text,setText]=useState("");
      
      

  











 const voicehandleSearchSourceStations = async (src) => {
   const response = await axios.get(
     `/search_station?query=${src}&toLang=${state}`
   );
   // console.log(response.data);
   setSourceCityStations(response.data);
   setIsSourceCityActive(true);
 };
   const voicehandleSearchDestinationStations = async (dest) => {
     const response = await axios.get(
       `/search_station?query=${dest}&toLang=${state}`
     );
     // console.log(response.data);
     setDestinationCityStations(response.data);
     setIsDestinationCityActive(true);
   };
   


    function startListening() {
        console.log("Hello World!");
        if (
          "SpeechRecognition" in window ||
          "webkitSpeechRecognition" in window
        ) {
          const recognition = new (window.SpeechRecognition ||
            window.webkitSpeechRecognition)();

          recognition.lang = `${state}-IN`;
          recognition.interimResults = false;

          recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            console.log(`You said: ${transcript}`);
            
            //console.log(voiceData);
            const response=axios.get(`/voiceData?vData=${transcript}&toLang=${state}`);
            console.log(response)
            response.then((obj)=>{
              const res=obj.data;
              console.log(res)
  
              //  console.log(1);
              
               voicehandleSearchSourceStations(res.start);
               setTimeout(()=>{
                 voicehandleSearchDestinationStations(res.dest)

               },30000)
               setJourneyDate(res.date);
               
             } )
            
            
            const lang = franc(transcript);
            const messages = {
              en: "You said: ",
              hi: "आपने कहा: ",
             
            };

            console.log(messages[lang] + transcript);
          };

          recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
          };

          recognition.start();

          
          setTimeout(() => {
            recognition.stop();
          }, 10000); 
        } else {
          alert("Speech recognition is not supported in this browser.");
        }
      }
      const getAllqueryDetails=()=>{
            if(text=="")
           {
                 toast.warning("Enter the text",
              {
            position: toast.POSITION.TOP_RIGHT
                 });
                return;
           }
       const response=axios.get(`/queryDetails?query=${text}&toLang=${state}`);
       console.log(response);
    
    }
    // const getAllqueryDetails=()=>{
    //         if(text=="")
    //         {
    //             toast.warning("Enter the text",
    //             {
    //         position: toast.POSITION.TOP_RIGHT
    //              });
    //             return;
    //         }
    //     //    const response=axios.get(`/queryDetails?query=${text}&toLang=${state}`);
            
    //        const srcCity="Delhi";
    //        const destCity="Kurukshetra";
    //        const srcstationCode="NDLS";
    //        const deststationCode="KKDE";
    //        const jourDate="";
    //        const durationTime="8";
    //        const pnrNum = "1234567890";
    //         if (
    //           srcstationCode != "" &&
    //           deststationCode != "" &&
    //           jourDate != ""
    //         ) {
    //           setSourceStation(srcstationCode);
    //           setDestinationStation(deststationCode);
    //           setJourneyDate(jourDate);
    //           searchAllTrains();
    //         }
    //        else if(srcCity!="")
    //        {
    //           setSourceCity(srcCity);
    //           handleSearchSourceStations();
    //        }
    //        else if(destCity!="")
    //        {
    //         setDestinationCity(destCity);
    //         handleSearchDestinationStations();
    //        }
          
    //        if(pnrNum!="")
    //        {
    //            setPnrNumber(pnrNum);
    //            searchPnrStatus();
    //        }

    //   };
  return (
    <div>
      <div>
        <button onClick={startListening}>Voice</button>
      </div>

      <div className="relative mb-3" data-te-input-wrapper-init>
        <textarea
          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Your message"
          onChange={(e)=>setText(e.target.value)}
        ></textarea>
        <label
          for="exampleFormControlTextarea1"
          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >
          Example textarea
        </label>

      </div>
      <CustomButton title="Submit" handleClick={getAllqueryDetails}/>
    </div>
  );
}

export default Chatbot
