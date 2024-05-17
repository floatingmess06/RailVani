// import React, { useState, useRef, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { franc } from 'franc-min';
// import axios from 'axios';
// import Chatbot1 from '../components/Chatbot1';
// import ShowBothStations from '../chatbotcomponents/ShowBothStations';
// import ShowSingleStation from '../chatbotcomponents/ShowSingleStation';
// import WarningFirst from '../chatbotcomponents/WarningFirst';
// import TrainsBothCodes from '../chatbotcomponents/TrainsBothCodes';
// import TrainStatus from '../chatbotcomponents/TrainStatus';
// import TrainSchedule from '../chatbotcomponents/TrainSchedule';
// import PnrStatus from '../chatbotcomponents/PnrStatus';

// const Chatbot = () => {
//   const { state } = useLocation();
//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState('');
//   const conversationRef = useRef();

//   const handleInput = async (input) => {
//     const currentTime = new Date().toLocaleTimeString([], {
//       hour: '2-digit',
//       minute: '2-digit',
//     });

//     const userMessage = {
//       text: input,
//       sentTime: currentTime,
//       sender: 'user',
//     };

//     // Use the functional form of setMessages to ensure the latest state
//     setMessages((prevMessages) => [...prevMessages, userMessage]);

//     if (input.startsWith('Voice: ')) {
//       const transcript = input.replace('Voice: ', '');

//       const lang = franc(transcript);
//       console.log(`You said (${lang}): ${transcript}`);

//       const response = await axios.get(`/queryDetails?query=${transcript}&toLang=${state}`);
//       console.log(response);

//       const chatbotResponse = response.data;
//       const chatbotMessage = {
//         text: chatbotResponse,
//         sentTime: currentTime,
//         sender: 'chatbot',
//       };
//       setMessages((prevMessages) => [...prevMessages, chatbotMessage]);
//     } else {
//       const response = generateResponse(input);

//       const chatbotMessage = {
//         text: response,
//         sentTime: currentTime,
//         sender: 'chatbot',
//       };
//       setMessages((prevMessages) => [...prevMessages, chatbotMessage]);
//     }

//     setInputText('');
//     scrollToBottom();
//   };

//   const startListening = () => {
//     if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
//       const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

//       recognition.lang = `${state}-IN`;
//       recognition.interimResults = false;

//       recognition.onresult = (event) => {
//         const transcript = event.results[0][0].transcript;
//         console.log(`You said: ${transcript}`);
//         handleInput(`Voice: ${transcript}`);
//       };

//       recognition.onerror = (event) => {
//         console.error('Speech recognition error:', event.error);
//       };

//       recognition.start();

//       setTimeout(() => {
//         recognition.stop();
//       }, 10000);
//     } else {
//       alert('Speech recognition is not supported in this browser.');
//     }
//   };

//   const generateResponse = (result) => {
//     // Check the 'flag' property in the 'result' object to determine the response
//     switch (result.flag) {
//       case 1:
//       case 6:
//         return <ShowBothStations result={result} />;
//       case 2:
//       case 7:
//       case 8:
//         return <ShowSingleStation result={result} />;
//       case 3:
//       case 5:
//       case 11:
//       case 13:
//       case 15:
//         return <WarningFirst result={result} />;
//       case 4:
//         return <TrainsBothCodes result={result} />;
//       case 9:
//         return <WarningFirst result={result} />;
//       case 10:
//         return <TrainStatus result={result} />;
//       case 12:
//         return <TrainSchedule result={result} />;
//       case 14:
//         return <PnrStatus result={result} />;
//       default:
//         return "I'm not sure how to respond to that.";
//     }
//   };

//   const scrollToBottom = () => {
//     if (conversationRef.current) {
//       conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
//     }
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   return (
//     <div>
//       <Chatbot1
//         conversationRef={conversationRef}
//         messages={messages}
//         startListening={startListening}
//         inputText={inputText}
//         setInputText={setInputText}
//         generateResponse={generateResponse}
        
//       />
//     </div>
//   );
// };

// export default Chatbot;


// import React,{useState} from 'react'
// import { useLocation } from "react-router-dom";
// import { franc } from "franc-min";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import CustomButton from "../components/CustomButton";
// import ShowBothStations from '../chatbotcomponents/ShowBothStations';
// import ShowSingleStation from '../chatbotcomponents/ShowSingleStation';
// import WarningFirst from '../chatbotcomponents/WarningFirst';
// import TrainsBothCodes from '../chatbotcomponents/TrainsBothCodes';
// import TrainStatus from '../chatbotcomponents/TrainStatus';
// import TrainSchedule from '../chatbotcomponents/TrainSchedule';
// import PnrStatus from '../chatbotcomponents/PnrStatus';
// import '../components/chatbot.css'

// const Chatbot = () => {
//     const { state } = useLocation();
    
//        const [text,setText]=useState("");
//        const [result,setResult]=useState({});
//        const [messages, setMessages] = useState([]);
      
      
      

  


// //  const voicehandleSearchSourceStations = async (src) => {
// //    const response = await axios.get(
// //      `/search_station?query=${src}&toLang=${state}`
// //    );
// //    // console.log(response.data);
// //    setSourceCityStations(response.data);
// //    setIsSourceCityActive(true);
// //  };
// //    const voicehandleSearchDestinationStations = async (dest) => {
// //      const response = await axios.get(
// //        `/search_station?query=${dest}&toLang=${state}`
// //      );
// //      // console.log(response.data);
// //      setDestinationCityStations(response.data);
// //      setIsDestinationCityActive(true);
// //    };



//     function startListening() {
//         console.log("Hello World!");
//         if (
//           "SpeechRecognition" in window ||
//           "webkitSpeechRecognition" in window
//         ) {
//           const recognition = new (window.SpeechRecognition ||
//             window.webkitSpeechRecognition)();

//           recognition.lang = `${state}-IN`;
//           recognition.interimResults = false;

//           recognition.onresult = (event) => {
//             const transcript = event.results[0][0].transcript;
//             console.log(`You said: ${transcript}`);
//               const response = axios.get(
//                 `/queryDetails?query=${transcript}&toLang=${state}`
//               );
//               console.log(response);
//               response.then((res)=>
//               setResult(res.data)).catch((err)=>
//               console.log(err))
//               if (transcript.trim() !== '') {
//                 setMessages([...messages, { text: transcript, sender: 'user',flag:0 }]);
//                 setText('');
          
//                 // Simulate a response from the bot (you can replace this with actual logic)
    
                
//             response
//               .then((res) => {setTimeout(() => {
//                 const botResponse = res.data;
//                 setMessages([...messages, { text: botResponse, sender: 'bot' ,flag:result.flag}]);
//               }, 1000);})
//               .catch((err) => console.log(err));
                
//               }
//             //console.log(voiceData);
//             // const response=axios.get(`/voiceData?vData=${transcript}&toLang=${state}`);
//             // console.log(response)
//             // response.then((obj)=>{
//             //   const res=obj.data;
//             //   console.log(res)
  
//               //  console.log(1);
              
//             //    voicehandleSearchSourceStations(res.start);
//             //    setTimeout(()=>{
//             //      voicehandleSearchDestinationStations(res.dest)

//             //    },30000)
//             //    setJourneyDate(res.date);
               
//             //  } )
            
            
//             const lang = franc(transcript);
//             const messages = {
//               en: "You said: ",
//               hi: "आपने कहा: ",
             
//             };

//             console.log(messages[lang] + transcript);
//           };

//           recognition.onerror = (event) => {
//             console.error("Speech recognition error:", event.error);
//           };

//           recognition.start();

          
//           setTimeout(() => {
//             recognition.stop();
//           }, 10000); 
//         } else {
//           alert("Speech recognition is not supported in this browser.");
//         }
//       }
//       const getAllqueryDetails=()=>{
//             if(text==="")
//            {
//                  toast.warning("Enter the text",
//               {
//             position: toast.POSITION.TOP_RIGHT
//                  });
//                 return;
//            }
       
//           if (text.trim() !== '') {
//             setMessages([...messages, { text: text, sender: 'user',flag:0 }]);
//             setText('');
      
//             // Simulate a response from the bot (you can replace this with actual logic)

//             const response=axios.get(`/queryDetails?query=${text}&toLang=${state}`);
//        console.log(response);
//         response
//           .then((res) => {setResult(res.data);setTimeout(() => {
//             const botResponse = res.data;
//             setMessages([...messages, { text: botResponse, sender: 'bot',flag:result.flag }]);
//           }, 1000);})
//           .catch((err) => console.log(err));

            
//           }
//     }
//     const renderDivs = () => {
//       const divs = [];
//       // <div id="chat-container">
//       //   {messages.map((message, index) => (
//       //     <div
//       //       key={index}
//       //       className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
//       //     >
            
//       //     </div>
//       //   ))}
//       // </div>
      
//       messages.map((message) => {
//         var divn;
//         switch (message.flag) {
//           case 0:
//             divn=<div>{message.text}</div>;break;
//                       case 1:
//                      case 6:
//                         divn=<ShowBothStations result={result} />;break;
//                      case 2:
//                      case 7:
//                      case 8:
//                         divn=<ShowSingleStation result={result} />;break
//                      case 3:
//                      case 5:
//                      case 11:
//                      case 13:
//                      case 15:
//                        divn= <WarningFirst result={result} />;break;
//                      case 4:
//                        divn= <TrainsBothCodes result={result} />;break;
//                      case 9:
//                       divn= <WarningFirst result={result} />;break;
//                      case 10:
//                       divn=  <TrainStatus result={result} />;break;
//                      case 12:
//                       divn=  <TrainSchedule result={result} />;break;
//                      case 14:
//                       divn=  <PnrStatus result={result} />;break;
//                      default:
//                       divn=  "I'm not sure how to respond to that.";
//         }
//         divs.push(divn);
//     });
//       return divs;
//     };
    
//   return (
//     <div className='chatbot-container'>
//       <div id="header">
//             <h1>Chatbot</h1>
//         </div>
//         <div id="chatbot">
//   <div id="conversation">
//     <div className="chatbot-message">
//       <p className="chatbot-text">Hi! 👋 it's great to see you!</p>
//     </div>
//   </div>
//   {/* <form id="input-form"> */}
//   <div id="input-form">
//     <div className="message-container">
//     <div className="relative mb-3" data-te-input-wrapper-init>
//       {renderDivs()}
//       {/* <div>
//         {result.flag === 1 && <ShowBothStations result={result} />}
//         {result.flag === 2 && <ShowSingleStation result={result} />}
//         {result.flag === 3 && <WarningFirst result={result} />}
//         {result.flag === 4 && <TrainsBothCodes result={result} />}
//         {result.flag === 5 && <WarningFirst result={result} />}
//         {result.flag === 6 && <ShowBothStations result={result} />}
//         {result.flag === 7 && <ShowSingleStation result={result} />}
//         {result.flag === 8 && <ShowSingleStation result={result} />}
//         {result.flag === 9 && <WarningFirst result={result} />}
//         {result.flag === 10 && <TrainStatus result={result} />}
//         {result.flag === 11 && <WarningFirst result={result} />}
//         {result.flag === 12 && <TrainSchedule result={result} />}
//         {result.flag === 13 && <WarningFirst result={result} />}
//         {result.flag === 14 && <PnrStatus result={result} />}
//         {result.flag === 15 && <WarningFirst result={result} />}
//       </div> */}



//         {/* <textarea
//           className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//           id="exampleFormControlTextarea1"
//           rows="3"
//           placeholder="Your message"
//           onChange={(e) => setText(e.target.value)}
//         ></textarea> */}
        
//       </div>
      

//       <input id="input-field" type="text" placeholder="Type your message here" onChange={(e) => setText(e.target.value)}/>
//       {/* <CustomButton title="Submit" handleClick={getAllqueryDetails} /> */}
//       <button id="submit-button" type="submit" handleClick={getAllqueryDetails}>
//         {/* <img className="send-icon" src="send-message.png" alt="" /> */}
//         Submit
//       </button>
//       <div>
//         <button onClick={startListening}>Voice</button>
//       </div>
//     </div>
//     </div>
//   {/* </form> */}
// </div>

      

      
//     </div>
//   );
// }

// export default Chatbot

import React, { useState ,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { franc } from 'franc-min';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
// import CustomButton from '../components/CustomButton';
// import ShowBothStations from '../chatbotcomponents/ShowBothStations';
// import ShowSingleStation from '../chatbotcomponents/ShowSingleStation';
// import WarningFirst from '../chatbotcomponents/WarningFirst';
// import TrainsBothCodes from '../chatbotcomponents/TrainsBothCodes';
// import TrainStatus from '../chatbotcomponents/TrainStatus';
// import TrainSchedule from '../chatbotcomponents/TrainSchedule';
// import PnrStatus from '../chatbotcomponents/PnrStatus';
import '../components/chatbot.css';
// import TrainDuration from '../chatbotcomponents/TrainDuration';
import Intro from './Intro'
import Chatbotcontent from './Chatbotcontent';

const Chatbot = () => {
  const { state } = useLocation();

  const [text, setText] = useState('');
  const [result, setResult] = useState({});
  const [messages, setMessages] = useState([]);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Set a timer to switch to the main component after 2 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    },1500);

    // Clear the timer when the component unmounts to avoid memory leaks
    return () => {
      clearTimeout(timer);
    };
  }, []);

  function startListening() {
    console.log('Hello World!');
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

      recognition.lang = `${state}-IN`;
      recognition.interimResults = false;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log(`You said: ${transcript}`);

        const text = transcript;

        if (text.trim() !== '') {
          setMessages([messages, { text: text, sender: 'user', flag: 0 }]);
          setText('');
    
          const response = axios.get(`/queryDetails?query=${text}&toLang=${state}`);
          console.log(response);
    
          response
            .then((res) => {
              setResult(res.data);
              setTimeout(() => {
                const botResponse = res.data;
                setMessages([...messages, { text: botResponse, sender: 'bot', flag: res.data.flag }]);
              }, 1000);
            })
            .catch((err) => console.log(err));
        }

        }

        const lang = franc(text);
        // const messages = {
        //   en: 'You said: ',
        //   hi: 'आपने कहा: ',
        // };


        // console.log(messages[lang] + text);


      

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };

      recognition.start();

      setTimeout(() => {
        recognition.stop();
      }, 10000);

     }
     else {
      alert('Speech recognition is not supported in this browser.');
    }
  }

  const getAllqueryDetails = () => {
    if (text === '') {
      toast.warning('Enter the text', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    if (text.trim() !== '') {
      setMessages([...messages, { text: text, sender: 'user', flag: 0 }]);
      setText('');

      const response = axios.get(`/queryDetails?query=${text}&toLang=${state}`);
      console.log(response);

      response
        .then((res) => {
          setResult(res.data);
          setTimeout(() => {
            const botResponse = res.data;
            setMessages([...messages, { text: botResponse, sender: 'bot', flag: res.data.flag }]);
          }, 1000);
        })
        .catch((err) => console.log(err));
    }
  };

  // const renderDivs = () => {
  //   const divs = [];

  //   messages.map((message) => {
  //     let divn;
  //     var cname='chatbot-text';
  //     console.log(message.flag);
  //     switch (message.flag) {
  //       case 0:
  //         divn = <div className={cname}>{message.text}</div>;
  //         break;
  //       case 1:
  //       case 6:
  //       case 17:
  //         divn = <ShowBothStations className={cname} result={result} />;
  //         break;
  //       case 16:
  //         divn = <TrainDuration className={cname} result={result} />;
  //         break;
  //       case 2:
  //       case 7:
  //       case 8:
  //       case 18:
  //       case 19:
  //         divn = <ShowSingleStation className={cname} result={result} />;
  //         break;
  //       case 3:
  //       case 5:
  //       case 11:
  //       case 13:
  //       case 15:
  //       case 20:
  //       case 21:
  //         divn = <WarningFirst className={cname} result={result} />;
  //         break;
  //       case 4:
  //         divn = <TrainsBothCodes className={cname} result={result} />;
  //         break;
  //       case 9:
  //         divn = <WarningFirst className={cname} result={result} />;
  //         break;
  //       case 10:
  //         divn = <TrainStatus className={cname} result={result} />;
  //         break;
  //       case 12:
  //         divn = <TrainSchedule className={cname} result={result} />;
  //         break;
  //       case 14:
  //         divn = <PnrStatus className={cname} result={result} />;
  //         break;
  //       default:
  //         divn = "I'm not sure how to respond to that.";
  //     }

  //     divs.push(divn);
  //   });
    
  //   console.log("lenght "+ divs.length)
  //   return divs[divs.length -1];
  // };


  // {result.flag === 16 && <TrainDuration result={result}></TrainDuration>}
  // {result.flag === 17 && <ShowBothStations result={result} />}
  // {result.flag === 18 && <ShowSingleStation result={result} />}
  // {result.flag === 19 && <ShowSingleStation result={result} />}
  // {result.flag === 20 && <WarningFirst result={result} />}
  // {result.flag === 21 && <WarningFirst result={result} />}

  // return (
  //   <>
  //   {showIntro ? <Intro/> :(
  //   <div className="chatbot-container">
  //     <div id="header">
  //       <h1>Chatbot</h1>
  //     </div>
  //     <div id="chatbot">
  //       <div id="conversation">
  //         <div className="chatbot-message">
  //           <p className="chatbot-text">Hi! 👋 it's great to see you!</p>
            
  //         </div>
  //         <div>
  //         <p className="chatbot-text" style={{marginTop:'10px'}}>{
  //           {
  //             {messages.map((message)=>{
  //               return (
  //                 let divn;
  //     var cname='chatbot-text';
  //     console.log(message.flag);
  //     switch (message.flag) {
  //       case 0:
  //         divn = <div className={cname}>{message.text}</div>;
  //         break;
  //       case 1:
  //       case 6:
  //       case 17:
  //         divn = <ShowBothStations className={cname} result={result} />;
  //         break;
  //       case 16:
  //         divn = <TrainDuration className={cname} result={result} />;
  //         break;
  //       case 2:
  //       case 7:
  //       case 8:
  //       case 18:
  //       case 19:
  //         divn = <ShowSingleStation className={cname} result={result} />;
  //         break;
  //       case 3:
  //       case 5:
  //       case 11:
  //       case 13:
  //       case 15:
  //       case 20:
  //       case 21:
  //         divn = <WarningFirst className={cname} result={result} />;
  //         break;
  //       case 4:
  //         divn = <TrainsBothCodes className={cname} result={result} />;
  //         break;
  //       case 9:
  //         divn = <WarningFirst className={cname} result={result} />;
  //         break;
  //       case 10:
  //         divn = <TrainStatus className={cname} result={result} />;
  //         break;
  //       case 12:
  //         divn = <TrainSchedule className={cname} result={result} />;
  //         break;
  //       case 14:
  //         divn = <PnrStatus className={cname} result={result} />;
  //         break;
  //       default:
  //         divn = "I'm not sure how to respond to that.";
  //     }
  //     return divn;
  //     );
  //             })}
  //           }
  //         }</p>
  //         </div>
            
          
  //       </div>
  //       <div id="input-form">
  //         <div className="message-container">
  //           <div className="relative mb-3" data-te-input-wrapper-init>
            
              
  //             <input
  //               id="input-field"
  //               type="text"
  //               placeholder="Type your message here"
  //               onChange={(e) => setText(e.target.value)}
  //             />
  //             <button id="submit-button" type="submit" onClick={getAllqueryDetails}>
  //               Submit
  //             </button>
  //             <div>
  //               <button onClick={startListening}>Voice</button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   )}

  //   </>
  // );

  return (
    <>
      {showIntro ? (
        <Intro />
      ) : (
        <div className="chatbot-container">
          <div id="header">
            <h1>Chatbot</h1>
          </div>
          <div id="chatbot">
            <div id="conversation">
              <div className="chatbot-message">
                <p className="chatbot-text">Hi! 👋 It's great to see you!</p>
              </div>
              <div>
                <br></br>
                {/* <p className="chatbot-text" style={{ marginTop: '10px' }}> */}
                  {messages.map((message) => {
                    {/* message.result={result}; */}
                    return (<Chatbotcontent message={message} result={result}/>);
                  })}
                
              </div>
            </div>
            <div id="input-form">
              <div className="message-container">
                <div className="relative mb-3" data-te-input-wrapper-init>
                  <input
                    id="input-field"
                    type="text"
                    placeholder="Type your message here"
                    onChange={(e) => setText(e.target.value)}
                  />
                  <button id="submit-button" type="submit" onClick={getAllqueryDetails}>
                    Submit
                  </button>
                  <div>
                    <button onClick={startListening}>Voice</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
  
};

export default Chatbot;
