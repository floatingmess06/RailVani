import React from 'react';
import './chatbot.css'

const Chatbot1 = ({ conversationRef, messages, startListening, inputText, setInputText, handleInput ,generateResponse}) => {

  return (
    <div className="chatbot-container">
      <div id="header">
        <h1>Chatbot</h1>
      </div>
      <div id="chatbot">
        {/* <div id="conversation" ref={conversationRef}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chatbot-message ${message.sender}-message`}
            >
              <p className="chatbot-text" sentTime={message.sentTime}>
                {message.text}
              </p>
            </div>
          ))}
        </div> */}
        <div id="conversation" ref={conversationRef}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chatbot-message ${message.sender}-message`}
            >
              <p className="chatbot-text" sentTime={message.sentTime}>
                {message.text}
              </p>
            </div>
          ))}
          {/* Render the response based on the 'result' object */}
          {generateResponse(messages)}
        </div>
        <form id="input-form" onSubmit={handleInput}>
          <div>
            <input
              id="input-field"
              type="text"
              placeholder="Type your message here"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button id="submit-button" type="submit">
              Send
            </button>
          </div>
          <div>
            <button onClick={startListening}>Voice</button>
          </div>
        </form>
      </div>
    </div>


  );
};

export default Chatbot1;
