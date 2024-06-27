import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';

function App() {


  return (
    <>
        <Router>
            <Navbar />

            <Routes>
                <Route path='/' />
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/about' element={<AboutUs />} /> 
            </Routes>
        </Router>
    </>
    
  );
}

export default App;
