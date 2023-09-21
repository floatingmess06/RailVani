import React,{ useState} from 'react'
import { useLocation } from 'react-router-dom'
import { arrow, search } from "../assets";
import axios from "axios";
import StationPanel from "../components/StationPanel";
import TrainPanel from "../components/TrainPanel";
import CustomButton from "../components/CustomButton";
import {franc} from 'franc-min'
const SearchForTrain = () => {
  
    const {state}=useLocation();
    //console.log(state);

    const [sourceCity, setSourceCity] = useState("");
    const [destinationCity, setDestinationCity] = useState("");
    const [sourceCityStations, setSourceCityStations] = useState([]);
    const [destinationCityStations, setDestinationCityStations] = useState([]);
    const [isSourceCityActive, setIsSourceCityActive] = useState(false);
    const [isDestinationCityActive, setIsDestinationCityActive] =  useState(false);
    const [sourceStation, setSourceStation] = useState("");
    const [destinationStation, setDestinationStation] = useState("");
    const [journeyDate, setJourneyDate] = useState("");
    const [allTrains, setAllTrains] = useState([]);
   
    const [voicejourneyDate, voiceSetJourneyDate] = useState("");

    
    //console.log(sourceStation)
    //console.log(destinationStation)
     const handleSourceCity = (e) => {
       setSourceCity(e.target.value);
     };
     const handleJourneyDate = (e) => {
       setJourneyDate(e.target.value);
     };
       const handleDestinationCity = (e) => {
         setDestinationCity(e.target.value);
       };
       //console.log(sourceCity)
       const handleSearchSourceStations=async()=>{
          const response=await axios.get(`/search_station?query=${sourceCity}&toLang=${state}`)
         // console.log(response.data);
          setSourceCityStations(response.data)
          setIsSourceCityActive(true);
       };
        



       const handleSearchDestinationStations=async()=>{
          const response = await axios.get(
            `/search_station?query=${destinationCity}&toLang=${state}`
          );
          // console.log(response.data);
          setDestinationCityStations(response.data)
          setIsDestinationCityActive(true);
       };
     
       
       const searchAllTrains=async()=>{
        const response = axios
          .get(
            `/trains?sourceStation=${sourceStation}&destinationStation=${destinationStation}&journeyDate=${journeyDate}&lang=${state}`
          );
          response.then((result) => {
            const data = result.data;
           // console.log(data); 
            setAllTrains(data);
          });
          
        
       };
       
       //console.log(allTrains)
       
      

     

  return (
    <div>
      




      <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6 mt-40">
        <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#565671] rounded-[100px]">
          <input
            type="text"
            value={sourceCity}
            placeholder="Search the source city to select station"
            className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#eeeeee] text-white bg-transparent outline-none"
            onChange={handleSourceCity}
          />
          <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
            <img
              src={search}
              alt="search"
              className="w-[15px] h-[15px] object-contain"
              onClick={handleSearchSourceStations}
            />
          </div>
        </div>
        <div className="lg:flex-1 flex flex-row max-w-[80px] py-2 pl-4 pr-2 h-[52px] bg-[#b8b8c0] rounded-[100px]">
          <div className="w-[52px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center">
            <img
              src={arrow}
              alt="arrow"
              className="w-[15px] h-[15px] object-contain"
            />
          </div>
        </div>

        <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#565671] rounded-[100px]">
          <input
            type="text"
            value={destinationCity}
            placeholder="Search the destination city to select station"
            className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#eeeeee] text-white bg-transparent outline-none"
            onChange={handleDestinationCity}
          />
          <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
            <img
              src={search}
              alt="search"
              className="w-[15px] h-[15px] object-contain"
              onClick={handleSearchDestinationStations}
            />
          </div>
        </div>
        <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#565671] rounded-[100px]">
          <input
            type="date"
            value={journeyDate}
            placeholder="Choose Journey Date"
            className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#eeeeee] text-white bg-transparent outline-none"
            onChange={handleJourneyDate}
          />
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between mb-[35px] gap-6 mt-40 mr-80">
        <div className=" text-black h-[200px]">
          <StationPanel
            title="Choose your source station"
            allStations={sourceCityStations}
            check={isSourceCityActive}
            setStation={setSourceStation}
          />
        </div>

        <div className=" text-black h-[200px]">
          <StationPanel
            title="Choose your destination station"
            allStations={destinationCityStations}
            check={isDestinationCityActive}
            setStation={setDestinationStation}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <CustomButton title="Submit" handleClick={searchAllTrains} />
      </div>
      <div>
        <TrainPanel alltrains={allTrains} lang={state} />
      </div>
    </div>
  );
}

export default SearchForTrain
