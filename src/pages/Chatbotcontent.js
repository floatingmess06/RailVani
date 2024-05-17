
// import React, { useState ,useEffect} from 'react';
// import { useLocation } from 'react-router-dom';
// import { franc } from 'franc-min';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import CustomButton from '../components/CustomButton';
import ShowBothStations from '../chatbotcomponents/ShowBothStations';
import ShowSingleStation from '../chatbotcomponents/ShowSingleStation';
import WarningFirst from '../chatbotcomponents/WarningFirst';
import TrainsBothCodes from '../chatbotcomponents/TrainsBothCodes';
import TrainStatus from '../chatbotcomponents/TrainStatus';
import TrainSchedule from '../chatbotcomponents/TrainSchedule';
import PnrStatus from '../chatbotcomponents/PnrStatus';
import '../components/chatbot.css';
import TrainDuration from '../chatbotcomponents/TrainDuration';
// import Intro from './Intro'

const Chatbotcontent=({message,result})=>{
   
    let divn;
    var cname = 'chatbot-text';
    console.log(message.flag);
    switch (message.flag) {
      case 0:
        divn = <div className={cname}>{message.text}</div>;
        break;
      case 1:
      case 6:
      case 17:
        divn = <ShowBothStations className={cname} result={result} />;
        break;
      case 16:
        divn = <TrainDuration className={cname} result={result} />;
        break;
      case 2:
      case 7:
      case 8:
      case 18:
      case 19:
        divn = <ShowSingleStation className={cname} result={result} />;
        break;
      case 3:
      case 5:
      case 11:
      case 13:
      case 15:
      case 20:
      case 21:
        divn = <WarningFirst className={cname} result={result} />;
        break;
      case 4:
        divn = <TrainsBothCodes className={cname} result={result} />;
        break;
      case 9:
        divn = <WarningFirst className={cname} result={result} />;
        break;
      case 10:
        divn = <TrainStatus className={cname} result={result} />;
        break;
      case 12:
        divn = <TrainSchedule className={cname} result={result} />;
        break;
      case 14:
        divn = <PnrStatus className={cname} result={result} />;
        break;
      default:
        divn = "I'm not sure how to respond to that.";
    }

    return (
        divn
    );
}

export default Chatbotcontent;