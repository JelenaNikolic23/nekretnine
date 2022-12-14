import './App.css';
import AgentsPage from './components/AgentsPage/AgentsPage';
import ScrollToTopButton from './components/Common/ScrollToTopButton';
import ContactPage from './components/ContactPage/ContactPage';
import HomesPage from './components/HomesPage/HomesPage';
import Footer from './components/Footer';
import LocalsPage from './components/LocalsPage/LocalsPage';
import Header from './components/Navbar';
import HomeOverviewPage from './components/HomeOverviewPage/HomeOverviewPage';
import { Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import SearchingMenu from './components/Common/SearchingMenu';
import NotFoundPage from './components/NotFoundPage';
import LoginPage from './components/LoginPage';
import { useEffect } from 'react';
import LocalOverviewPage from './components/LocalOverviewPage/LocalOverviewPage';
import CreateRealEstate from './components/CreateRealEstate/CreateRealEstate';
import SearchContextProvider from './context/SearchContext';

function App() {

  useEffect(() => {
    document.title = 'SuperNekretnine';
  });

  return (
    <div className="App">
      <SearchContextProvider>
        <Header />
        <SearchingMenu />
        <Routes>
          <Route path="/real-estates/new" exact element={<CreateRealEstate />} />
          <Route path="/homes/:id" exact element={<HomeOverviewPage />} />
          <Route path="/contact" exact element={<ContactPage />} />
          <Route path="/homes" exact element={<HomesPage />} />
          <Route path="/locals/:id" exact element={<LocalOverviewPage />} />
          <Route path="/locals" exact element={<LocalsPage />} />
          <Route path="/agents" exact element={<AgentsPage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/" index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </SearchContextProvider>
    </div>
  );
}

export default App;
