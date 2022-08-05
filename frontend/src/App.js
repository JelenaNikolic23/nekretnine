import './App.css';
import AgentsPage from './components/AgentsPage/AgentsPage';
import FlatsAndHousesPage from './components/FlatsAndHousesPage/FlatsAndHousesPage';
import Footer from './components/Footer';
import HomePageCarousel from './components/HomePageCarousel';
import LocalsPage from './components/LocalsPage/LocalsPage';
import Header from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <AgentsPage />
      <Footer />
    </div>
  );
}

export default App;
