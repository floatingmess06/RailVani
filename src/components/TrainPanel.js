import React from 'react'
import { useNavigate } from 'react-router-dom';
import './fourth_listtrainsrch.css'

const TrainPanel = ({alltrains,lang}) => {
    //console.log("sdf");
    //console.log(alltrains)
    const navigate=useNavigate();
  const handleTrainDetail=(train,lang)=>{
    //console.log(train);
    //console.log(lang);
    navigate(`/trainDetails/${train.train_number}`,{ state: { trainDet: train, lang: lang }})
  };



  return (
    <div >
      <h2 >Train List</h2>
      <ul className='list'>
        {alltrains &&
          alltrains.map((train) => (
            <li key={train.train_number} className="mt-10 bg-[#b8b8c0]" onClick={()=>handleTrainDetail(train,lang)}>
              <span class="circle"></span>
              <strong>Train Name:</strong> {train.train_name}
              <br />
              <strong>Train Number:</strong> {train.train_number}
              <br />
              <strong>From Time:</strong>{train.from_sta}<strong>Hrs</strong>
              <br/>
              <strong>To time:</strong>{train.to_sta}<strong>Hrs</strong>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TrainPanel
