import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import OrderPage from './pages/OrderPage';
import EventBookingPage from './pages/EventBookingPage';
import WalletPage from './pages/WalletPage';
import PostUsagePage from './pages/PostUsagePage';
import "./App.css"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/event-booking" element={<EventBookingPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/thank-you" element={<PostUsagePage />} />
      </Routes>
    </Router>
  );
}

export default App;
