import './App.css';
import Footer from './components/Footer';
import HomePageCarousel from './components/HomePageCarousel';
import Header from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePageCarousel />
      <Footer />
    </div>
  );
}

export default App;
