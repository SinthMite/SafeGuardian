import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import Header from './Header/Header.jsx';
import Poster from './Home/Poster/Poster.jsx';
import Phone from './assets/Phone.png';
import LowerBody from './Home/LowerBody/LowerBody.jsx';
import Map from './Map/Map.jsx';
import CommunityResources from './CommunityResources/CommunityResources.jsx'
function App() {
  return (
    <>
      <section className='HomePageUpper'>
        <div className='InnerHomePageUpper'>
          <Header />
          <div className='divPosterSpacing'>
            <Routes>
              {/* Route for Poster and ImageDiv */}
              <Route path="/" element={
                <>
                  <Poster />
                  <div className='ImageDiv'>
                    <img src={Phone} alt="phoneGPS" />
                  </div>
                </>
              } />
            </Routes>
          </div>
        </div>
      </section>
      <section className='MapSection'>
        {/* Route for Map */}
        <Routes>
          <Route path="/" element={<Map />} />
        </Routes>
      </section>
      <section className='SectionLowerBody'>
        {/* Route for LowerBody */}
        <Routes>
          <Route path="/" element={<LowerBody />} />
        </Routes>
      </section>
      <Routes>
        <Route path="/CommunityResources" element={<CommunityResources />} />
      </Routes>
    </>
  );
}

export default App;
