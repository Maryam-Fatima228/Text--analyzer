
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import Alert from './components/Alert';
import { useState } from 'react';
// Change Switch to Routes
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [mode,setDarkMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
   } )
  setTimeout(() =>{
    setAlert(null);
  },1500);}
   const togglemode=()=>{
    if(mode==='light'){
      setDarkMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
  }
  else{
    setDarkMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
  }
  
}
  return (
    <>
  
  <Navbar title="TEXTPLAY" about="aboutus" mode={mode} togglemode={togglemode}/>
  <Alert alert={alert}/>

  <div className="container">
    
        <TextForm showAlert={showAlert} heading="Enter your text below" mode={mode}/>

  </div>

    </>
  );
}

export default App;
