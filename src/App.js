
import React from 'react';
import NavigationBar from './Components/Navbar'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './Components/Pages/LandingPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<LandingPage />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
