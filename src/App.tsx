import { Routes, Route } from "react-router-dom";
import './App.scss';
import Header from './Header/Header.js';
import Poster from './Home/Poster/Poster.tsx';
import Phone from './assets/Phone.png';
import LowerBody from './Home/LowerBody/LowerBody.tsx';
import Map from './Map/Map.js';
import CommunityResources from './CommunityResources/CommunityResources.tsx'


interface AppProps {}

const App: React.FC<AppProps> = () => {
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
