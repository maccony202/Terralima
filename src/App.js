
import React from 'react';
import NavigationBar from './Components/Navbar'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './Components/Pages/LandingPage';
import FarmerPage from './Components/Pages/FarmersPage';
import ContactUs from './Components/Pages/ContactusPage';
import PartnerLogin from './Components/Pages/PartnerLogin';
import SignUp from './Components/Pages/SignupPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/farmers' element={<FarmerPage />}/>
        <Route path='/contact' element={<ContactUs />}/>
        <Route path='/partner-login' element={<PartnerLogin />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
