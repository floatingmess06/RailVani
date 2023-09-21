import React from 'react'
import Card from '../components/Card'
import { useLocation, useNavigate } from 'react-router-dom';
const Choose = () => {
    
const navigate=useNavigate();
const {state}=useLocation();
  return (
    <div className="flex  justify-center ">
      <Card title="Announcement Details" handleCard={()=>{navigate(`/announcementDetails/?lang=${state}`,{state:state})}}></Card>
      <Card title="Form filling" handleCard={()=>{navigate(`/searchForTrains/?lang=${state}`, { state: state })}}></Card>
      <Card title="Chatbot " handleCard={()=>{navigate(`/chatbot/?lang=${state}`, { state: state })}}></Card>
    </div>
  );
}

export default Choose
