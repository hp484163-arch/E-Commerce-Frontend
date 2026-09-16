import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export const Navbar = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Active desktop link styling
  const getLinkClass = ({ isActive }) =>
    `relative py-1 font-medium text-sm transition-colors ${
      isActive
        ? "text-amber-400 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-400 after:rounded-full"
        : "text-slate-300 hover:text-amber-400"
    }`;

  // Active mobile link styling
  const getMobileLinkClass = ({ isActive }) =>
    `block px-4 py-2.5 rounded-xl font-medium text-base transition-all ${
      isActive
        ? "bg-amber-500/10 text-amber-400 font-bold border-l-4 border-amber-400"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  const primaryBtn =
    "inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-xl font-bold text-sm transition-all shadow-sm hover:shadow-amber-500/20 active:scale-95 cursor-pointer";

  const secondaryBtn =
    "inline-flex items-center justify-center bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 px-4 py-2 rounded-xl font-semibold text-sm transition-all active:scale-95 cursor-pointer";

  return (
    <nav className="w-full bg-slate-900/90 backdrop-blur-md text-white border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand Logo & Name */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 group cursor-pointer focus:outline-none"
          >
            <div className="h-10 w-10 overflow-hidden rounded-xl bg-slate-800 border border-slate-700 p-1 flex items-center justify-center group-hover:border-amber-500/50 transition">
              <img
                src="/images/image.png"
                alt="Brand Logo"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors">
              DKT&apos;s Store
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <NavLink to="/" className={getLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={getLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" className={getLinkClass}>
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={getLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Desktop Dynamic Action Area */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2.5 bg-slate-800/60 border border-slate-700/60 pl-1.5 pr-3 py-1 rounded-full">
                  <div className="h-7 w-7 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xs shadow-inner">
                    {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </div>
                  <span className="text-xs font-semibold text-slate-200">
                    {user.name}
                  </span>
                </div>
                <button onClick={onLogout} className={secondaryBtn}>
                  Log out
                </button>
              </div>
            ) : (
              <>
                <NavLink
                  to="/login"
                  state={{ isSignUp: false }}
                  className={secondaryBtn}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/login"
                  state={{ isSignUp: true }}
                  className={primaryBtn}
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 focus:outline-none transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900/95 px-4 pt-3 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <ul className="space-y-1">
            <li>
              <NavLink to="/" onClick={closeMenu} className={getMobileLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu} className={getMobileLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" onClick={closeMenu} className={getMobileLinkClass}>
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu} className={getMobileLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Mobile User & Auth Actions */}
          <div className="pt-4 border-t border-slate-800">
            {user ? (
              <div className="space-y-3">
                <div className="flex items-center gap-3 px-2">
                  <div className="h-9 w-9 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-sm">
                    {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{user.name}</p>
                    <p className="text-xs text-slate-400">Signed in</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    closeMenu();
                    onLogout();
                  }}
                  className={`w-full ${secondaryBtn}`}
                >
                  Log out
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <NavLink
                  to="/login"
                  state={{ isSignUp: false }}
                  onClick={closeMenu}
                  className={`w-full text-center ${secondaryBtn}`}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/login"
                  state={{ isSignUp: true }}
                  onClick={closeMenu}
                  className={`w-full text-center ${primaryBtn}`}
                >
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};