import React from 'react'
// import './Card.css'
import './choiceSecpg.css'
const Card = ({title,handleCard}) => {
  return (
    <div style={{margin:'20px'}}>
      
<div className="container noselect" onClick={handleCard}>
  {/* <div className="canvas">
    <div className="tracker tr-1"></div>
    <div className="tracker tr-2"></div>
    <div className="tracker tr-3"></div>
    <div className="tracker tr-4"></div>
    <div className="tracker tr-5"></div>
    <div className="tracker tr-6"></div>
    <div className="tracker tr-7"></div>
    <div className="tracker tr-8"></div>
    <div className="tracker tr-9"></div>
    <div className="tracker tr-10"></div>
    <div className="tracker tr-11"></div>
    <div className="tracker tr-12"></div>
    <div className="tracker tr-13"></div>
    <div className="tracker tr-14"></div>
    <div className="tracker tr-15"></div>
    <div className="tracker tr-16"></div>
    <div className="tracker tr-17"></div>
    <div className="tracker tr-18"></div>
    <div className="tracker tr-19"></div>
    <div className="tracker tr-20"></div>
    <div className="tracker tr-21"></div>
    <div className="tracker tr-22"></div>
    <div className="tracker tr-23"></div>
    <div className="tracker tr-24"></div>
    <div className="tracker tr-25"></div>
    <div id="card">
    <p id="prompt">HOVER OVER :D</p>
      <div className="title">{title}</div>
     
      
    </div>
  </div> */
  }
  <div class="card">
  <div class="card-details">
    <p class="text-title">{title}</p>
    <p class="text-body">Here are the details of the card</p>
  </div>
  <button class="card-button">Proceed</button>
</div>
</div>














    </div>
  )
}

export default Card
