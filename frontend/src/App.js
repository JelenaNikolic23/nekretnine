import './App.css';
import AgentsPage from './components/AgentsPage/AgentsPage';
import ScrollToTopButton from './components/Common/ScrollToTopButton';
import ContactPage from './components/ContactPage/ContactPage';
import FlatsAndHousesPage from './components/FlatsAndHousesPage/FlatsAndHousesPage';
import Footer from './components/Footer';
import LocalsPage from './components/LocalsPage/LocalsPage';
import Header from './components/Navbar';
import RealEstateOverviewPage from './components/RealEstateOverviewPage/RealEstateOverviewPage';
import { Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/contact" exact element={<ContactPage />} />
        <Route path="/houses-and-flats" exact element={<FlatsAndHousesPage />} />
        <Route path="/locals" exact element={<LocalsPage />} />
        <Route path="/agents" exact element={<AgentsPage />} />
        <Route path="/" exact element={<HomePage />} />
        <Route component={<HomePage />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
