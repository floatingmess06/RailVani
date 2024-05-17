import React, { useState, useEffect } from 'react';
import train2pic from './Entry.gif';
import './Intro.css';

function Entry() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000); // Change the timeout duration as needed (in milliseconds)

    return () => clearTimeout(timer);
  }, []);

  const introStyle = {
    fontFamily: 'Croissant One, sans-serif', // Apply "Croissant One" font
  };

  return (
    <div className={`intro-container2 ${showIntro ? 'fade-in' : 'fade-out'}`}>
      {showIntro && (
        <>
          <div className="intro-content2">
            <div className="image-container2">
              <img src={train2pic} alt="Intro Image" />
            </div>
            <div className="intro-text2" style={introStyle}>
              <h1 className='glow2' style={{ fontSize: '120px', fontFamily: 'fantasy' }}>Rail Vani</h1>
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