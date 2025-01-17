import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import Header from './components/header/Header';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import SaleBanner from './components/SaleBanner';

const App = () => {
  return (
    <div className='w-full h-full'>
        <Header />
        <Navbar />
        <SaleBanner />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
    </div>
  );
};

export default App;
