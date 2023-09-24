import React,{useState,useEffect} from 'react'
import CustomButton from '../components/CustomButton';
import Entry from './Entry';
import { useNavigate } from 'react-router-dom';
const Home = () => {
 
 const indianLanguages = [
  {name:"en",script:"English"},
   { name: "hi", script: "हिन्दी" },
   { name: "bn", script: "বাংলা" },
   { name: "te", script: "తెలుగు" },
   { name: "mr", script: "मराठी" },
   { name: "ta", script: "தமிழ்" },
   { name: "ur", script: "اُردو" },
   { name: "gu", script: "ગુજરાતી" },
   { name: "kn", script: "ಕನ್ನಡ" },
   { name: "or", script: "ଓଡ଼ିଆ" },
   { name: "pa", script: "ਪੰਜਾਬੀ" },
   { name: "ml", script: "മലയാളം" },
   { name: "as", script: "অসমীয়া" },
   { name: "mai", script: "मैथिली" },
   { name: "sat", script: "ᱥᱟᱱᱛᱟᱲᱤ" },
   { name: "ks", script: "کٲشُر" },
   { name: "ne", script: "नेपाली" },
   { name: "kok", script: "कोंकणी" },
   { name: "sd", script: "سنڌي" },
   { name: "doi", script: "ڈوگری" },
   { name: "brx", script: "बर’" },
 ];
 const navigate=useNavigate();
 const onchangePage=(e)=>{
  console.log(e.target.value)
   navigate(`/choose/?lang=${e.target.value}`, { state: e.target.value});
 };

 const [showIntro, setShowIntro] = useState(true);

 useEffect(() => {
   // Set a timer to switch to the main component after 2 seconds
   const timer = setTimeout(() => {
     setShowIntro(false);
   },1500);

   // Clear the timer when the component unmounts to avoid memory leaks
   return () => {
     clearTimeout(timer);
   };
 }, []);


  return (
    <div  style={{width:'1300px', margin: 'auto' }}> 
     {showIntro ? <Entry/> :
    <div>
      
      <div className="grid grid-cols-3 gap-4 flex-wrap justify-center">
        {indianLanguages.map((lang) => (
          <CustomButton title={lang.script} val={lang.name} handleClick={onchangePage}></CustomButton>
        ))}
      </div>
    </div>}
    </div>
     
  );
}

export default Home
