import { Link } from 'react-router-dom';

export const Footer = () => {
    const categories = [
        'Electronics',
        'Accessories',
        'Wearables',
        'Furniture',
        'Clothing',
        'Other',
    ];

    return (
        <footer className="relative bg-[#1a202c] text-gray-300 border-t border-gray-800/80 pt-16 pb-12 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFA500]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800/80">
                    
                    {/* Brand Column (Span 4) */}
                    <div className="lg:col-span-4 space-y-5">
                        <div className="flex items-center gap-3.5">
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-ratio from-[#FFA500] to-amber-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500" />
                                <div className="relative w-12 h-12 rounded-xl bg-[#232b3e] border border-gray-700/80 flex items-center justify-center p-2 shadow-lg">
                                    <img
                                        src="/images/image.png"
                                        alt="Brand Logo"
                                        onError={(e) => {
                                            e.currentTarget.style.display = "none";
                                        }}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div>
                                <span className="text-2xl font-black tracking-tight bg-linear-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
                                    DKT's Store
                                </span>
                                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#FFA500]">
                                    Premium Retail
                                </span>
                            </div>
                        </div>

                        <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                            Your premier destination for high-grade products, competitive pricing, and ultra-fast delivery options.
                        </p>

                        {/* Social / Feature Pill Badges */}
                        <div className="flex items-center gap-2 pt-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#232b3e] text-gray-300 border border-gray-700/60">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                Live Support
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#232b3e] text-gray-300 border border-gray-700/60">
                                🚀 Fast Shipping
                            </span>
                        </div>
                    </div>

                    {/* Quick Links Column (Span 2) */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-wider flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFA500]" />
                            Navigation
                        </h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Products', path: '/product' },
                                { name: 'Contact', path: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-[#FFA500] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 group"
                                    >
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-[#FFA500]">›</span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product Categories Column (Span 3) */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-wider flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFA500]" />
                            Categories
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <Link
                                    key={category}
                                    to={`/product?category=${category.toLowerCase()}`}
                                    className="px-3 py-1.5 rounded-xl text-xs font-medium bg-[#232b3e] border border-gray-800 text-gray-300 hover:text-white hover:border-[#FFA500]/50 hover:bg-[#FFA500]/10 transition-all duration-200"
                                >
                                    {category}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Account / Action Column (Span 3) */}
                    <div className="lg:col-span-3">
                        <div className="bg-[#232b3e]/60 backdrop-blur-md border border-gray-800 rounded-2xl p-5 space-y-4 shadow-xl">
                            <h4 className="text-white font-bold text-sm tracking-tight">
                                Join DKT's Rewards
                            </h4>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Create an account today to unlock exclusive member discounts and faster checkout.
                            </p>
                            <div className="flex items-center gap-2 pt-1">
                                <Link
                                    to="/login"
                                    state={{ isSignUp: false }}
                                    className="flex-1 text-center py-2.5 px-3 text-xs font-semibold rounded-xl border border-gray-700 text-gray-200 hover:text-white hover:bg-gray-800 transition-all"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/login"
                                    state={{ isSignUp: true }}
                                    className="flex-1 text-center py-2.5 px-3 text-xs font-extrabold rounded-xl bg-[#FFA500] hover:bg-[#e69500] text-gray-950 shadow-md shadow-[#FFA500]/10 transition-all hover:scale-[1.02] active:scale-95"
                                >
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
                    <p>© {new Date().getFullYear()} DKT's Store. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link to="/privacy" className="hover:text-gray-300 transition-colors">
                            Privacy Policy
                        </Link>
                        <span className="text-gray-800">•</span>
                        <Link to="/terms" className="hover:text-gray-300 transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};