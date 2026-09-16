import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-[#232b3e] text-gray-300 border-t border-gray-800/50 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {/* Brand Section */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-15 h-15 rounded-xl bg-gray-800/80 border border-gray-700/60 flex items-center justify-center p-1.5 shadow-sm">
                            <img
                                src="/images/image.png"
                                alt="Brand Logo"
                                onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                }}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="text-xl font-extrabold text-white tracking-tight">
                            DKT's Store
                        </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Your destination for premium products, affordable, and fast local service.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                        Quick Links
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/" className="hover:text-[#FFA500] transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-[#FFA500] transition-colors">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/product" className="hover:text-[#FFA500] transition-colors">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-[#FFA500] transition-colors">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                        Product Categories
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <Link to="/product">
                            <li className="hover:text-white cursor-pointer transition-colors">Electronics</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Accessories</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Wearables</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Furniture</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Clothing</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Other</li>
                        </Link>
                    </ul>
                </div>

                {/* Account & Action */}
                <div>
                    <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                        Get Started
                    </h4>
                    <p className="text-sm text-gray-400 mb-4">
                        Join DKT's Store today to place orders faster and earn rewards.
                    </p>
                    <div className="flex gap-2">
                        <Link
                            to="/login"
                            className="px-4 py-2 text-xs font-semibold rounded-lg border border-gray-600 text-white hover:bg-gray-800 transition-colors"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#FFA500] hover:bg-[#e69500] text-gray-950 transition-colors shadow-sm"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
                <p>© {new Date().getFullYear()} DKT's Store. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#privacy" className="hover:text-gray-300 transition-colors">
                        Privacy Policy
                    </a>
                    <a href="#terms" className="hover:text-gray-300 transition-colors">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}