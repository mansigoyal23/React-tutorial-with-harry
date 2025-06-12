// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link 
// } from "react-router-dom";


let name = "mansi Goyal";

function App() {
  const [mode, setMode] = useState('light');  // set by default light mode

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#091c4e';
      document.body.style.color = '#ffffff';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // By this document.title we can change the title of out page.
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#042743';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
  <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
        {/* phle routes ki jgh Switch use hota tha. But ab React k new verion m Switch ko routes se replace kr diya gya h */}
        {/* <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={ */}
            <TextForm showAlert={showAlert} heading="Enter the text in textarea" mode={mode} /> 
            {/* }
          />
        </Routes> */}
      </div>
    {/* </Router> */}
    {/* // this title is a props. Which pass in Navbar.js */}
  </>
  );
}

export default App;
