import './App.css';
import FlatsAndHousesPage from './components/FlatsAndHousesPage/FlatsAndHousesPage';
import Footer from './components/Footer';
import HomePageCarousel from './components/HomePageCarousel';
import LocalsPage from './components/LocalsPage/LocalsPage';
import Header from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <LocalsPage />
      <Footer />
    </div>
  );
}

export default App;
