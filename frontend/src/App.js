import './App.css';
import FlatsAndHousesPage from './components/FlatsAndHousesPage/FlatsAndHousesPage';
import Footer from './components/Footer';
import HomePageCarousel from './components/HomePageCarousel';
import Header from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <FlatsAndHousesPage />
      <Footer />
    </div>
  );
}

export default App;
