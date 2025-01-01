import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import Header from './components/header/Header';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import FavoritePage from './pages/favorite/FavoritePage';
import CartPage from './pages/cart/CartPage';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignupPage';
import AccountPage from './pages/account/AccountPage';
import SaleBanner from './components/SaleBanner';

const App = () => {
  return (
    <div className='w-full h-full'>
        <Header />
        <Navbar />
        <SaleBanner />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/account/:tab" element={<AccountPage />} />
        </Routes>
        <Footer />
    </div>
  );
};

export default App;
