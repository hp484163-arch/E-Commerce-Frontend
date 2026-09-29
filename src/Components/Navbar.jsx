import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export const Navbar = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage or system preference on initial load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Sync theme with <html> tag and localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Desktop Link: Animated expanding underline
  const getLinkClass = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-medium transition-colors group ${
      isActive
        ? "text-slate-900 dark:text-white"
        : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
    }`;

  // Mobile Link: Soft background fill with brand border
  const getMobileLinkClass = ({ isActive }) =>
    `flex items-center px-4 py-3 rounded-xl font-medium text-sm transition-all ${
      isActive
        ? "bg-[#FFA500]/10 text-[#FFA500]"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white"
    }`;

  const primaryBtn =
    "inline-flex items-center justify-center bg-[#FFA500] hover:bg-amber-400 text-slate-950 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-[0_0_15px_rgba(255,165,0,0.2)] hover:shadow-[0_0_20px_rgba(255,165,0,0.4)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50";

  const secondaryBtn =
    "inline-flex items-center justify-center bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-500/50";

  return (
    <div className="fixed top-0 inset-x-0 z-50 p-4 pointer-events-none">
      <nav className="mx-auto max-w-7xl bg-white/80 dark:bg-slate-950/70 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/60 rounded-2xl shadow-2xl pointer-events-auto transition-colors duration-300">
        <div className="px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 gap-6">
            
            {/* Brand */}
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-3 group focus:outline-none rounded-xl focus-visible:ring-2 focus-visible:ring-[#FFA500]"
            >
              <div className="h-9 w-9 overflow-hidden rounded-xl bg-linear-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-300 dark:border-slate-700/50 p-1 flex items-center justify-center group-hover:border-[#FFA500]/50 transition-colors shadow-inner">
                <img
                  src="/images/image.png"
                  alt="Brand Logo"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white group-hover:text-[#FFA500] transition-colors">
                DKT's Store
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Product', 'Contact'].map((item) => (
                <li key={item}>
                  <NavLink 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className={getLinkClass}
                  >
                    {({ isActive }) => (
                      <>
                        {item}
                        <span 
                          className={`absolute bottom-0 left-0 h-0.5 bg-[#FFA500] rounded-full transition-all duration-300 ${
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-linear-to-tr from-amber-600 to-[#FFA500] text-slate-950 flex items-center justify-center font-bold text-xs shadow-md">
                      {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      {user.name}
                    </span>
                  </div>
                  <div className="h-4 w-px bg-slate-200 dark:bg-slate-800" />
                  <button onClick={onLogout} className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors px-2 py-1">
                    Log out
                  </button>
                </div>
              ) : (
                <>
                  <NavLink to="/login" state={{ isSignUp: false }} className={secondaryBtn}>
                    Log in
                  </NavLink>
                  <NavLink to="/login" state={{ isSignUp: true }} className={primaryBtn}>
                    Sign up
                  </NavLink>
                </>
              )}
            </div>

            {/* Mobile Actions Header */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Mobile Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 focus:outline-none transition-colors"
              >
                {isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Hamburger Button */}
              <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="p-2 -mr-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 focus:outline-none transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
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

        {/* Mobile Menu Popover */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200/80 dark:border-slate-800/60 p-4 animate-in slide-in-from-top-4 fade-in duration-200">
            <ul className="space-y-1 mb-6">
              {['Home', 'About', 'Product', 'Contact'].map((item) => (
                <li key={item}>
                  <NavLink 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    onClick={closeMenu}
                    className={getMobileLinkClass}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
              {user ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-linear-to-tr from-amber-600 to-[#FFA500] text-slate-950 flex items-center justify-center font-bold">
                      {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">{user.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Account verified</p>
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
                    Log in
                  </NavLink>
                  <NavLink
                    to="/login"
                    state={{ isSignUp: true }}
                    onClick={closeMenu}
                    className={`w-full text-center ${primaryBtn}`}
                  >
                    Sign up
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};