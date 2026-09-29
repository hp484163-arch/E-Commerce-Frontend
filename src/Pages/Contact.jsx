import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const contactDetails = [
    {
      title: "Email Us",
      value: "support@dktstore.com",
      description: "Our support team typically responds within 2 hours.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Call Us",
      value: "+855 (0) 23 888 999",
      description: "Available Monday through Friday, 8am – 6pm.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: "Headquarters",
      value: "Phnom Penh, Cambodia",
      description: "Monivong Blvd, Sangkat Boeng Keng Kang I",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen relative bg-slate-950 text-slate-100 overflow-hidden font-sans pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      
      {/* Ambient background glow orbs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-[#FFA500]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">

        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-semibold text-[#FFA500] backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#FFA500] animate-pulse" />
            Get in Touch
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            We'd Love to <br />
            <span className="bg-linear-to-r from-[#FFA500] via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Hear From You
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Have a question about an order, feedback on our items, or need technical help? Send us a message and we will respond promptly.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactDetails.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-900/60 backdrop-blur-2xl border border-slate-800/80 rounded-2xl space-y-3 hover:border-[#FFA500]/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-[#FFA500]/50 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {item.title}
                    </h2>
                    <p className="text-base font-bold text-white group-hover:text-[#FFA500] transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-14">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Extra Banner */}
            <div className="p-6 bg-linear-to-br from-slate-900/80 to-slate-950/80 border border-slate-800/80 rounded-2xl space-y-2">
              <h3 className="text-sm font-bold text-white">Need immediate resolution?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Check our <a href="/about" className="text-[#FFA500] font-semibold hover:underline">About & FAQ page</a> for instant answers to frequent shipping and store policy questions.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-3 bg-slate-900/60 backdrop-blur-2xl border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#FFA500]/10 border border-[#FFA500]/30 text-[#FFA500] flex items-center justify-center mx-auto shadow-lg shadow-[#FFA500]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white">Message Sent!</h3>
                <p className="text-sm text-slate-400 max-w-md mx-auto">
                  Thank you for reaching out. We have received your inquiry and will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl transition-all border border-slate-700"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-2xl font-black text-white tracking-tight">
                  Send a Message
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Phayhour Chhun"
                      className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl focus:border-[#FFA500] focus:ring-1 focus:ring-[#FFA500] focus:outline-none text-slate-100 placeholder-slate-500 text-sm transition-all disabled:opacity-50"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="phayhour@example.com"
                      className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl focus:border-[#FFA500] focus:ring-1 focus:ring-[#FFA500] focus:outline-none text-slate-100 placeholder-slate-500 text-sm transition-all disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    disabled={isSubmitting}
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Inquiry about order #4092"
                    className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl focus:border-[#FFA500] focus:ring-1 focus:ring-[#FFA500] focus:outline-none text-slate-100 placeholder-slate-500 text-sm transition-all disabled:opacity-50"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl focus:border-[#FFA500] focus:ring-1 focus:ring-[#FFA500] focus:outline-none text-slate-100 placeholder-slate-500 text-sm transition-all disabled:opacity-50 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#FFA500] hover:bg-amber-400 disabled:bg-amber-500/50 text-slate-950 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(255,165,0,0.25)] hover:shadow-[0_0_30px_rgba(255,165,0,0.4)] active:scale-95 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-slate-950"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};