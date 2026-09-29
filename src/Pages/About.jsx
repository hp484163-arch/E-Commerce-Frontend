import { Link } from "react-router-dom";

export const About = () => {
  const stats = [
    { label: "Happy Customers", value: "50K+" },
    { label: "Curated Products", value: "10K+" },
    { label: "Satisfaction Rate", value: "99.8%" },
    { label: "Global Shipping", value: "30+ Countries" },
  ];

  const coreValues = [
    {
      title: "Premium Quality",
      description:
        "Every item in our collection is handpicked and rigorously inspected to ensure superior craftsmanship.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Express Logistics",
      description:
        "Fast, reliable, and trackable global shipping options to get your gear to your doorstep in record time.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Secure Shopping",
      description:
        "End-to-end encrypted checkout and multiple payment methods for complete safety and peace of mind.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "24/7 Dedicated Support",
      description:
        "Our customer support team is always available to answer queries, process returns, and assist you.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen relative bg-slate-950 text-slate-100 overflow-hidden font-sans pt-28 pb-20 px-4 sm:px-6 lg:px-8">

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-[#FFA500]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-24 relative z-10">

        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-semibold text-[#FFA500] backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#FFA500] animate-pulse" />
            About DKT's Store
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Redefining Your <br />
            <span className="bg-linear-to-r from-[#FFA500] via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Online Shopping Experience
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            We bridge the gap between premium product design and effortless shopping. Discover high-quality gear, unrivaled customer care, and seamless digital commerce.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 rounded-2xl text-center hover:border-[#FFA500]/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <p className="text-3xl sm:text-4xl font-black text-white group-hover:text-[#FFA500] transition-colors">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-400 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center bg-slate-900/60 backdrop-blur-2xl border border-slate-800/80 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Driven by Passion, Built for Customer Excellence
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Founded with a commitment to simplicity and quality, DKT's Store started with a simple belief: finding reliable, high-end products online should never be a hassle.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We collaborate with premier brands worldwide to bring you products that empower your day-to-day lifestyle. Quality and satisfaction are built into everything we ship.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-6 flex flex-col justify-center items-center text-center space-y-4">
            <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700/50 flex items-center justify-center p-3 shadow-inner">
              <img
                src="/images/image.png"
                alt="Brand Logo"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-white">DKT's Store Promise</h3>
            <p className="text-xs text-slate-400 max-w-xs">
              Exceptional quality, transparent pricing, and instant support on every order.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Why Shop With Us?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              Our core pillars dictate how we curate, fulfill, and support every product in our catalog.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 rounded-2xl space-y-4 hover:border-[#FFA500]/40 transition-all duration-300 hover:-translate-y-1.5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-[#FFA500]/50 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#FFA500] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative bg-linear-to-r from-amber-500 to-[#FFA500] rounded-3xl p-8 sm:p-12 text-slate-950 shadow-[0_0_30px_rgba(255,165,0,0.25)] flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Ready to Upgrade Your Experience?
            </h3>
            <p className="text-slate-900/80 text-sm font-medium">
              Explore our latest arrivals and exclusive deals today.
            </p>
          </div>
          <Link
            to="/product"
            className="shrink-0 bg-slate-950 hover:bg-slate-900 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </div>
  );
};