import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Navbar } from './Components/Navbar';
import { About } from './Pages/About';
import { Product } from './Pages/Product';
import { Contact } from './Pages/Contact';
import { Login } from './Pages/Login';
import { AddProduct } from './Pages/AddProduct';
// Inner component to access the current URL path via useLocation
const AppContent = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const handleLogout = () => {
    setUser(null);
  };
  // Hide Navbar when on the /login route
  const hideNavbar = location.pathname === '/login';
  return (
    <>
      {!hideNavbar && <Navbar user={user} onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/*" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login onLoginSuccess={setUser} />} />
        <Route path="/add-product" element={<AddProduct/>}/>
      </Routes>
    </>
  );
};
export const App = () => {
  return (
    <Router>
      <AppContent/>
    </Router>
  )
}

// import { DrinkDashboard } from "./Components/DrinkDashboard"

// export const App = () => {
//   return (
//     <div>
//       <DrinkDashboard/>
//     </div>
//   )
// }
