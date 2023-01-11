import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
  const[myColor,setColorbtn]=useState({
    color:'black',
  });
  const[alert,setAlert]=useState(null);
  const[mode,setMode]=useState('light'); //Whether darkMode is Enabled or not
  const[btnText,setBtnText]=useState('EnableDarkMode');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setBtnText('EnableLightMode');
      setColorbtn({
        color:'white'
      });
      document.body.style.backgroundColor='#18314A';
      showAlertMessage("Dark Mode has been Enabled","success");
    }
    else{
      setMode('light');
      setBtnText('EnableDarkMode');
      setColorbtn({
        color:'black',
      })
      document.body.style.backgroundColor='white';
      showAlertMessage("Light Mode has been Enabled","success");
    }
  
  }
  const showAlertMessage=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  return (
     <>
     {/* <BrowserRouter> */}
       {/* <Routes> */}
        {/* <Route exact path='/' element={ */}
          {/* <> */}
           <Navbar title="TextConverterApp" aboutText="About us" mode={mode} toggleMode={toggleMode} btnText={btnText} myStyle={myColor}/>
           <div className='container'>
           <Alert alert={alert}/>   
          <TextForm showAlertMessage={alert} heading={"Enter the Text to Analyze below"} mode={mode}/>
        </div>
        {/* </> */}
        {/* }/> */}
        {/* <Route exact path='/aboutus' element={ */}
         {/* <> */}
            {/* <Navbar title="TextConverter-AboutUs" aboutText="About us" mode={mode} toggleMode={toggleMode} btnText={btnText} myStyle={myColor} /> */}
            <div className="container my-4">
            <Alert alert={alert}/>
            {/* <About title="TextConverter Application"/> */}
            </div>
         {/* </> */}
         {/* }/> */}
       {/* </Routes> */}
     {/* </BrowserRouter> */}
     </>
  );
}

export default App;

// {/* <Navbar/>     Default Props are set */} 