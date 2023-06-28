import './App.css';
import SideDrawer from './components/menu/MyDrawer';
import { Routes, Route } from "react-router-dom";
import Beers from './components/pages/Beers';
import Random from './components/pages/Random';
import Search from './components/pages/Search';
import BeerDetails from './components/pages/Beer_Detail';
import SearchResults from './components/pages/Search_Results';

function App() {
  return (
    <div>
      <SideDrawer />
        <Routes>
          <Route path="/" element={<Beers />} />
          <Route path="/random" element={<Random />} />
          <Route path="/search" element={<Search />} />
          <Route path="/beer_details/:identifier" element={<BeerDetails />} />
          <Route path="/search_results/:searchText" element={<SearchResults />} />
        </Routes>
    </div>
  );
}

export default App;
