import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { arrow, search } from "../assets";
import axios from "axios";
import StationPanel from "../components/StationPanel";
import TrainPanel from "../components/TrainPanel";
import '../components/thirdlistpage.css'
import CustomButton from "../components/CustomButton";
import { franc } from 'franc-min'
const SearchForTrain = () => {

  const { state } = useLocation();
  //console.log(state);

  const [sourceCity, setSourceCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [sourceCityStations, setSourceCityStations] = useState([]);
  const [destinationCityStations, setDestinationCityStations] = useState([]);
  const [isSourceCityActive, setIsSourceCityActive] = useState(false);
  const [isDestinationCityActive, setIsDestinationCityActive] = useState(false);
  const [sourceStation, setSourceStation] = useState("");
  const [destinationStation, setDestinationStation] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [allTrains, setAllTrains] = useState([]);

  const [voicejourneyDate, voiceSetJourneyDate] = useState("");


  //console.log(sourceStation)
  //console.log(destinationStation)
  const handleSourceCity = (e) => {
    e.preventDefault();
    setSourceCity(e.target.value);
  };
  const handleJourneyDate = (e) => {
    e.preventDefault();
    setJourneyDate(e.target.value);
  };
  const handleDestinationCity = (e) => {
    e.preventDefault();
    setDestinationCity(e.target.value);
  };
  //console.log(sourceCity)
  const handleSearchSourceStations = async () => {
    const response = await axios.get(`/search_station?query=${sourceCity}&toLang=${state}`)
    // console.log(response.data);
    setSourceCityStations(response.data)
    setIsSourceCityActive(true);
  };




  const handleSearchDestinationStations = async () => {
    const response = await axios.get(
      `/search_station?query=${destinationCity}&toLang=${state}`
    );
    // console.log(response.data);
    setDestinationCityStations(response.data)
    setIsDestinationCityActive(true);
  };


  const searchAllTrains = async () => {
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





      {/* <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6 mt-40"> */}
      <div className="flex md:flex-row flex-col-reverse justify-center mb-[35px] gap-6 mt-40">
        <div class="container">
          <div class="search-container">
            <input class="input" type="text"
              value={sourceCity}
              placeholder="Search the source city to select station" onChange={handleSourceCity} />
            <svg viewBox="0 0 24 24" class="search__icon">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                </path>
              </g>
            </svg>
            <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
              <img
                src={search}
                alt="search"
                className="w-[15px] h-[15px] object-contain"
                onClick={handleSearchSourceStations}
              />
            </div>
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

        <div class="container">
          <div class="search-container">
            <input class="input" type="text"
              value={destinationCity}
              placeholder="Search the destination city to select station" onChange={handleDestinationCity} />
            <svg viewBox="0 0 24 24" class="search__icon">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                </path>
              </g>
            </svg>
            <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
              <img
                src={search}
                alt="search"
                className="w-[15px] h-[15px] object-contain"
                onClick={handleSearchDestinationStations}
              />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="search-container">
            <input class="input" type="date"
              value={journeyDate}
              placeholder="Choose Journey Date" onChange={handleJourneyDate} />
            <svg viewBox="0 0 24 24" class="search__icon">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                </path>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-center justify-center mb-[45px] space-x-5 mt-40 mr-80 gap-6">
        <div className=" text-black h-[200px]" >
          <StationPanel
            title="Choose your source station"
            allStations={sourceCityStations}
            check={isSourceCityActive}
            setStation={setSourceStation}
          />
        </div>
        <div className=" text-black h-[200px] " >
          <StationPanel
            title="Choose your destination station"
            allStations={destinationCityStations}
            check={isDestinationCityActive}
            setStation={setDestinationStation}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <button onClick={searchAllTrains}>
          Submit
        </button>

      </div>
      <div>
        <TrainPanel alltrains={allTrains} lang={state} />
      </div>
    </div>
  );
}

export default SearchForTrain
