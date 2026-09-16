import { NavLink } from "react-router-dom";
export const Footer = () => {
  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-amber-400 font-semibold transition-colors"
      : "hover:text-amber-400 transition-colors";

  return (
    <footer className="w-full bg-slate-600 text-slate-300 border-t border-slate-700 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="h-20 w-20 overflow-hidden rounded-lg bg-slate-700 flex items-center justify-center">
              <img 
                src="/images/image.png" 
                alt="Brand Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              DKT's Store
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Your trusted destination for quality products. Dedicated to offering the best shopping experience.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold text-base">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <NavLink to="/" className={getLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={getLinkClass}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" className={getLinkClass}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={getLinkClass}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold text-base">Customer Care</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href="#faq" className="hover:text-amber-400 transition-colors">
                FAQ & Help
              </a>
            </li>
            <li>
              <a href="#shipping" className="hover:text-amber-400 transition-colors">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold text-base">Newsletter</h3>
          <p className="text-sm text-slate-400">
            Subscribe to get updates on special offers and new items.
          </p>
          <form 
            onSubmit={(e) => e.preventDefault()} 
            className="flex flex-col sm:flex-row gap-2 mt-1"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-slate-700 text-white placeholder-slate-400 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 border border-slate-600 flex-1"
            />
            <button 
              type="submit"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-lg font-semibold text-sm transition-colors cursor-pointer shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-700/60 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <p>© {new Date().getFullYear()} DKT's Store. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-amber-400 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-amber-400 transition-colors">Terms</a>
            <a href="#cookies" className="hover:text-amber-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
  

