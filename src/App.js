import React, { useState } from 'react';
import Alert from './Components/Alert';
import './App.css';
import Nav from './Components/Navbar'
import TextUtil from './Components/TextUtil';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from './Components/About';

function App() {

  const [alert, setalert] = useState(null);
  const getAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    }
    )
    setTimeout(() => {
      setalert(null)
    }, 2000)
  }


  const [darkMode, setdarkMode] = useState('light');
  const darkModeEnable = () => {
    if (darkMode === 'dark') {
      setdarkMode('light');
      document.body.style.backgroundColor = 'white';
      getAlert("Light Mode Enabled", "success");
    }
    else {
      setdarkMode('dark');
      document.body.style.backgroundColor = 'hsl(238deg 55% 21%)';
      getAlert("Dark Mode Enabled", "success")

    }
  }
  return (
    <>
      
     
        <BrowserRouter>
        <Nav logo="Kunal" mode={darkMode} checkbtn={darkModeEnable}/>
        <Alert message={alert}/>
          <Routes>
              <Route path="/" element={<TextUtil mode={darkMode} getAlert={getAlert} />} />
              <Route path="about" element={<About mode={darkMode} />}/>
          </Routes>
        </BrowserRouter>
        
    </>
  );
}

export default App;
