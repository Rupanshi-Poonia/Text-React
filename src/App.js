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

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
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
