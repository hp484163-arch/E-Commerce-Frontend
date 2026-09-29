import { Link } from "react-router-dom";

export const Home = () => {
  const marqueeItems = [
    "⚡ FREE EXPRESS SHIPPING OVER $50",
    "🛡️ 2-YEAR WARRANTY INCLUDED",
    "🔥 NEW SUMMER COLLECTION OUT NOW",
    "✨ 100% AUTHENTIC GUARANTEED",
    "💎 PREMIUM HANDPICKED QUALITY",
    "🔄 30-DAY EASY RETURNS",
  ];

  const categories = [
    {
      name: "Electronics",
      count: "120+ Items",
      icon: "💻",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80",
    },
    {
      name: "Accessories",
      count: "85+ Items",
      icon: "⌚",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
    },
    {
      name: "Footwear",
      count: "200+ Items",
      icon: "👟",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
    },
    {
      name: "Apparel",
      count: "350+ Items",
      icon: "👕",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80",
    },
    {
      name: "Audio Gear",
      count: "90+ Items",
      icon: "🎧",
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80",
    },
    {
      name: "Smart Home",
      count: "60+ Items",
      icon: "🏠",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&auto=format&fit=crop&q=80",
    },
  ];

  const trendingProducts = [
    {
      id: 1,
      name: "Wireless Noise-Canceling Headphones",
      category: "Audio Gear",
      price: "$199.99",
      rating: "4.9",
      reviews: "128",
      badge: "Best Seller",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Minimalist Smartwatch Series 5",
      category: "Accessories",
      price: "$249.00",
      rating: "4.8",
      reviews: "95",
      badge: "Trending",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Ergonomic Mechanical Keyboard",
      category: "Electronics",
      price: "$129.50",
      rating: "5.0",
      reviews: "210",
      badge: "Hot",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      name: "Pro Gaming Urban Backpack",
      category: "Apparel",
      price: "$79.99",
      rating: "4.7",
      reviews: "84",
      badge: "New",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80",
    },
  ];

  const testimonials = [
    {
      quote: "The quality of the products blew me away. Shipping to Phnom Penh took less than 2 days!",
      author: "Sopheap K.",
      role: "Verified Buyer",
      rating: 5,
    },
    {
      quote: "Customer support handled my order change in minutes. DKT's Store is now my go-to shop.",
      author: "Dara V.",
      role: "Tech Enthusiast",
      rating: 5,
    },
    {
      quote: "Sleek gear, top-notch packaging, and smooth checkout. Highly recommended!",
      author: "Elena R.",
      role: "Frequent Shopper",
      rating: 5,
    },
  ];

  const coreFeatures = [
    {
      title: "Lightning Express Shipping",
      desc: "Dispatched within 24 hours with real-time tracking.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Encrypted Payments",
      desc: "100% secure checkout via credit card, ABA, or digital wallets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Guaranteed Authenticity",
      desc: "Directly sourced from verified global brands and manufacturers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Dedicated Support",
      desc: "Friendly assistance available around the clock.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen relative bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 overflow-hidden font-sans pt-24 pb-20">
      
      {/* Self-contained CSS for smooth Marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          display: flex;
          width: max-content;
          animation: marquee-reverse 35s linear infinite;
        }
        .animate-marquee:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ambient background lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-[#FFA500]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-[#FFA500] backdrop-blur-md shadow-sm dark:shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#FFA500] animate-pulse" />
          Next-Gen Commerce Experience
        </div>

        <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-tight max-w-4xl mx-auto">
          Discover Premium Gear Designed For Your <br />
          <span className="bg-linear-to-r from-[#FFA500] via-amber-400 to-amber-500 bg-clip-text text-transparent">
            Modern Lifestyle
          </span>
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
          Explore our curated catalog of high-performance products, daily essentials, and tech accessories with instant delivery.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/product"
            className="w-full sm:w-auto px-8 py-4 bg-[#FFA500] hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(255,165,0,0.25)] hover:shadow-[0_0_30px_rgba(255,165,0,0.4)] active:scale-95 text-center"
          >
            Shop Collection
          </Link>
          <Link
            to="/about"
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white border border-slate-300 dark:border-slate-800 rounded-xl font-bold transition-all active:scale-95 text-center shadow-sm"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* MARQUEE BANNER SECTION 1 */}
      <div className="relative py-4 bg-slate-100/80 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800/80 backdrop-blur-xl overflow-hidden my-12">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-linear-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-linear-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-6 pr-6">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-2 rounded-xl bg-white/80 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/60 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 hover:border-[#FFA500]/50 hover:text-[#FFA500] transition-colors cursor-pointer shrink-0 shadow-xs"
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CORE HIGHLIGHTS / BENEFITS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {coreFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl space-y-3 hover:border-[#FFA500]/50 transition-all duration-300 hover:-translate-y-1 group shadow-xs dark:shadow-none"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-[#FFA500]/50 transition-colors">
                {feat.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#FFA500] transition-colors">
                {feat.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED CATEGORIES GRID */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-6">
          <div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Featured Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Handpicked categories for quality and performance
            </p>
          </div>
          <Link
            to="/product"
            className="text-xs font-bold text-[#FFA500] hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            View All Products &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat, idx) => (
            <Link
              to="/product"
              key={idx}
              className="group relative h-48 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800/80 hover:border-[#FFA500]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-md flex flex-col justify-end p-6"
            >
              {/* Category background image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Dark overlay gradient to ensure high contrast for text in both light and dark themes */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent" />

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white group-hover:text-[#FFA500] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">{cat.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* TRENDING / BEST SELLERS SECTION */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-6">
          <div>
            <div className="inline-block px-3 py-1 rounded-md bg-[#FFA500]/10 text-[#FFA500] text-xs font-bold uppercase tracking-wider mb-2">
              Hot This Week
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Trending Products
            </h2>
          </div>
          <Link
            to="/product"
            className="text-xs font-bold text-[#FFA500] hover:text-amber-400 transition-colors"
          >
            Explore Catalog &rarr;
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((prod) => (
            <div
              key={prod.id}
              className="p-4 bg-white dark:bg-slate-900/60 backdrop-blur-2xl border border-slate-200 dark:border-slate-800/80 rounded-2xl space-y-4 hover:border-[#FFA500]/50 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none"
            >
              <div className="space-y-3">
                <div className="relative h-48 rounded-xl bg-slate-100 dark:bg-slate-950 overflow-hidden border border-slate-200 dark:border-slate-800/80">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#FFA500] text-slate-950 font-extrabold text-[10px] uppercase shadow-md">
                    {prod.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {prod.category}
                  </p>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-[#FFA500] transition-colors">
                    {prod.name}
                  </h3>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between">
                <div>
                  <p className="text-base font-black text-slate-900 dark:text-white">{prod.price}</p>
                  <div className="flex items-center gap-1 text-xs text-amber-500 dark:text-amber-400 mt-0.5">
                    <span>★</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200">{prod.rating}</span>
                    <span className="text-slate-400 dark:text-slate-500">({prod.reviews})</span>
                  </div>
                </div>

                <Link
                  to="/product"
                  className="px-3.5 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-[#FFA500] text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-slate-950 font-bold text-xs rounded-lg transition-colors"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MARQUEE BANNER SECTION 2 */}
      <div className="relative py-6 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 backdrop-blur-xl overflow-hidden my-16">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-linear-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-linear-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-reverse gap-6 pr-6">
          {[...categories, ...categories, ...categories].map((cat, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer shrink-0 shadow-xs"
            >
              <span className="text-lg">{cat.icon}</span>
              <span>{cat.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFA500]" />
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS / REVIEWS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 relative z-10">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Loved By Shoppers Worldwide
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            Read what our satisfied customers have to say about their shopping experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800/80 rounded-2xl space-y-4 flex flex-col justify-between shadow-sm dark:shadow-none"
            >
              <div className="space-y-3">
                <div className="flex gap-1 text-[#FFA500] text-sm">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FFA500]/20 border border-[#FFA500]/40 text-[#FFA500] font-black flex items-center justify-center text-xs">
                  {item.author[0]}
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">{item.author}</h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIP NEWSLETTER BANNER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="bg-white dark:bg-slate-900/60 backdrop-blur-2xl border border-slate-200 dark:border-slate-800/80 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-sm dark:shadow-none">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Unlock <span className="text-[#FFA500]">15% Off</span> Your First Order
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Subscribe to our VIP newsletter for early access to collection drops, exclusive promo codes, and secret sales.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl focus:border-[#FFA500] focus:ring-1 focus:ring-[#FFA500] focus:outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-[#FFA500] hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shrink-0 shadow-lg active:scale-95"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* PROMOTIONAL CTA BOX */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="relative bg-linear-to-r from-slate-100 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border border-slate-300 dark:border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-6 overflow-hidden shadow-sm dark:shadow-none">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FFA500]/10 rounded-full blur-3xl pointer-events-none" />
          
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Ready to Explore DKT's Store?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Join thousands of satisfied shoppers. Enjoy fast shipping, secure payment processing, and dedicated customer support.
          </p>
          <div>
            <Link
              to="/product"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#FFA500] hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-[0_0_25px_rgba(255,165,0,0.3)] hover:scale-105 active:scale-95"
            >
              Browse Shop Now
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};