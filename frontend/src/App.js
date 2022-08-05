import './App.css';
import AgentsPage from './components/AgentsPage/AgentsPage';
import ScrollToTopButton from './components/Common/ScrollToTopButton';
import ContactPage from './components/ContactPage/ContactPage';
import FlatsAndHousesPage from './components/FlatsAndHousesPage/FlatsAndHousesPage';
import Footer from './components/Footer';
import HomePageCarousel from './components/HomePageCarousel';
import LocalsPage from './components/LocalsPage/LocalsPage';
import Header from './components/Navbar';
import RealEstateOverviewPage from './components/RealEstateOverviewPage/RealEstateOverviewPage';

function App() {
  return (
    <div className="App">
      <Header />
      <RealEstateOverviewPage />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
