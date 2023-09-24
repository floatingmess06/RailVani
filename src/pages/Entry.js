import React, { useState, useEffect } from 'react';
import chatgptPic from "./chatbot2.png";
import './Intro.css'; 
import train2pic from './trainf.png';

function Entry() {
  const [showMainComponent, setShowMainComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainComponent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const introStyle = {
    fontFamily: 'Croissant One, sans-serif', // Apply "Croissant One" font
  };

  return (
    <div className={`intro-container2 ${showMainComponent ? 'fade-out' : 'fade-in'}`}>
      {showMainComponent ? (
        /* Your main component here */
        <div className="main-content2">
          {/* <h1>Welcome to Chatbot</h1>
          <p>Ask your query</p> */}
        </div>
      ) : (
        /* Intro content with image on the right */
        <>
          <div className="intro-content2">
            <div className="image-container2">
              <img src={train2pic} alt="Intro Image" style={{ width: '750px', height: '750px' }} />
            </div>
            <div className="intro-text2" style={introStyle}>
              <h1 className='glow2' style={{ fontSize: '120px',fontFamily:'fantasy' }}>Rail Vani</h1>
              {/* <p>Hello there! If you have any questions, I'm here to help you.</p> */}
              <div className="footer">
                <p style={{ color: 'white', fontSize: '70px' }}>रेल वाणी</p>
              </div>
            </div>
          </div>
          <div style={{ fontSize: '1.2rem', position: 'absolute', bottom: '0', right: '10px', textAlign: 'right' }}>
            Created by: BinaryBrains
          </div>
        </>
      )}
    </div>
  );
}

export default Entry;