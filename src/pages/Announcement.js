import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import {franc} from 'franc-min'
 import './Announcements.css'

//import * as noisereduce from "noisereduce";

import CustomButton from '../components/CustomButton'
const Announcement = () => {
    const { state } = useLocation();
    const [iniLang,setIniLang]=useState("")
    const [mainLanguage,setMainLanguage]=useState([])
    const [audioData,setAudioData]=useState(null)
    const [takeLang,setTakeLang]=useState(false);
    const [data,setData]=useState("")
    console.log(iniLang)
   
    
    async function startListening() {
      console.log("Hello World!");
      if (
        "SpeechRecognition" in window ||
        "webkitSpeechRecognition" in window
      ) {
        const recognition = new (window.SpeechRecognition ||
          window.webkitSpeechRecognition)();

        recognition.lang = `${iniLang}-IN`;
        recognition.interimResults = false;

        recognition.onresult = async (event) => {
          const transcript = event.results[0][0].transcript;
          console.log(`You said: ${transcript}`);
          const response = await axios({
            url: `/announcement?query=${transcript}&toLang=${state}`,
                  method: "get",
              responseType: "blob",
          }
          );
          console.log(response);
          const url = URL.createObjectURL(response.data);
          console.log(url)
        setAudioData(url);
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

    const languages = [
      { name: "en", script: "English" },
      { name: "hi", script: "हिन्दी" },
      { name: "bn", script: "বাংলা" },
      { name: "te", script: "తెలుగు" },
      { name: "mr", script: "मराठी" },
      { name: "ta", script: "தமிழ்" },
      { name: "ur", script: "اُردو" },
      { name: "gu", script: "ગુજરાતી" },
      { name: "kn", script: "ಕನ್ನಡ" },
      { name: "or", script: "ଓଡ଼ିଆ" },
      { name: "pa", script: "ਪੰਜਾਬੀ" },
      { name: "ml", script: "മലയാളം" },
      { name: "as", script: "অসমীয়া" },
      { name: "mai", script: "मैथिली" },
      { name: "sat", script: "ᱥᱟᱱᱛᱟᱲᱤ" },
      { name: "ks", script: "کٲشُر" },
      { name: "ne", script: "नेपाली" },
      { name: "kok", script: "कोंकणी" },
      { name: "sd", script: "سنڌي" },
      { name: "doi", script: "ڈوگری" },
      { name: "brx", script: "बर’" },
    ];
    const handleChange=(e)=>{
      console.log(e.target);
      const selectedValue = e.target.getAttribute("value"); 
      setIniLang(selectedValue);
      
    };
    console.log(iniLang);
   

  return (
    <div className="body">
      <div id="divFirst">
        <h1 id="head">Announcement</h1>
      </div>
      <div id="divSecond">
        <div id="divForList">
          <details>
            <summary class="custom-select">
              <span class="selected-option">Select language</span>
            </summary>
            
            <ul class="options">
              {languages.map((lang) => {
                return (
                  <li
                    className={`mt-2  cursor-pointer ${
                      iniLang === lang.name ? "bg-[#7a7ad5]" : "bg-[#b3b3d8]"
                    } `}
                    value={lang.name}
                    onClick={handleChange}
                  >
                    {lang.script}
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
        <div id="divForBut">
          <button onClick={startListening} title='Speak' id='speakbtn'>Speak</button>
        </div>
      </div>
      <div id="Output">
        <p id="taglabel">Here is the output : </p>
        <div id="audio">
          {audioData && <audio controls id="id1" autoPlay src={audioData} />}
        </div>
      </div>
    </div>
  );
}

export default Announcement