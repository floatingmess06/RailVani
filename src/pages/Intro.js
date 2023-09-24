import React, { useState, useEffect } from 'react';
import chatgptPic from "./chatbot2.png";
import './Intro.css'; 

function Intro() {
  const [showMainComponent, setShowMainComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainComponent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`intro-container ${showMainComponent ? 'fade-out' : 'fade-in'}`}>
      {showMainComponent ? (
        /* Your main component here */
        <div className="main-content">
          {/* <h1>Welcome to Chatbot</h1>
          <p>Ask your query</p> */}
        </div>
      ) : (
        /* Intro content with image on the right */
        <div className="intro-content">
          <div className="intro-text">
            <h1 className='glow'>Welcome to Chatbot</h1>
            <p>Hello there! If you have any questions, I'm here to help you.</p>
          </div>
          <div className="image-container">
            <img src={chatgptPic} alt="Intro Image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Intro;