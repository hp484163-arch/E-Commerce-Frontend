import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { About } from './Pages/About';
import { Product } from './Pages/Product';
import { Contact } from './Pages/Contact';
import { Login } from './Pages/Login';
import { AddProduct } from './Pages/AddProduct';

const AppContent = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  const handleLogout = () => {
    setUser(null);
  };

  const hideLayout = location.pathname === '/login';

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {!hideLayout && <Navbar user={user} onLogout={handleLogout} />}

      {/* flex-1 stretches the main page area so the footer stays at the bottom */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/*" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login onLoginSuccess={setUser} />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
};

export const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};