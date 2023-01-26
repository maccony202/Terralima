
import React from 'react';
import NavigationBar from './Components/Navbar'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './Components/Pages/LandingPage';
import FarmerPage from './Components/Pages/FarmersPage';
import ContactUs from './Components/Pages/ContactusPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/farmers' element={<FarmerPage />}/>
        <Route path='/contact' element={<ContactUs />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
