import './App.css';
import Navbar from './components/navbar';
import Gallery from "./components/gallery";
import TextForm from "./components/Textform";
import About from "./components/about";
import Alert from "./components/alert";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState('light');

  const removeclass = () => {
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-danger" )
    document.body.classList.remove("bg-success" )
    document.body.classList.remove("bg-warning" )
    document.body.classList.remove("bg-light" )
    document.body.classList.remove("bg-dark" )

  }

  const toggleMode = (cls) => {
    removeclass();
    console.log(cls)
    document.body.classList.add("bg-" + cls)
    
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743"
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
       document.body.style.backgroundColor = "white"
      showAlert('Light mode has been enabled', 'success');
    }
  };

 

  return (
    <Router>
      <div>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text here" />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/gallery" element={<Gallery onclickbutton={() => console.log('Hello')} />} />
        </Routes>
        
        
      </div>
    </Router>
  );
}
