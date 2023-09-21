
import './App.css';

import { Route, Routes } from "react-router-dom";

import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Choose from './pages/Choose';
import Chatbot from './pages/Chatbot';
import TrainDetails from './pages/TrainDetails';
import NavBar from './components/NavBar';

import SearchForTrain from './pages/SearchForTrain';
{/*
 <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5 bg-slate-200">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/languageSelect" element={<LanguageSelect/>}
          />
          <Route path="/searchtrains" element={<SearchTrains />} />
          
          <Route
            path="/train-details/:id"
            element={<TrainDetails/>}
          />
        </Routes>
      </div>
    </div>

*/}
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchForTrains" element={<SearchForTrain />} />
        <Route path="/trainDetails/:id" element={<TrainDetails/>}/>
        <Route path="/choose" element={<Choose></Choose>}></Route>
        <Route path="/chatbot" element={<Chatbot></Chatbot>}></Route>
     
      </Routes>
    </>
  );
}

export default App;
