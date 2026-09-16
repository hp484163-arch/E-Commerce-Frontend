import { useState } from "react";

export const App1V2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("CPH");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("12345");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error, setError] = useState("");

  const handleAuth = (e) => {
    e.preventDefault();
    setError("");

    if (isLoggedIn) {
      // Handle Logout
      setIsLoggedIn(false);
      setEmail("");
      setPassword("");
      return;
    }

    // Client-side Validation
    if (!email.includes("@") || password.length < 6) {
      setError("Please enter a valid email and a password of at least 6 characters.");
      return;
    }

    // Simulate Network Request
    setIsAuthenticating(true);
    setTimeout(() => {
      const extractedName = email.split("@")[0] || "User";
      setName(extractedName.charAt(0).toUpperCase() + extractedName.slice(1));
      setIsLoggedIn(true);
      setIsAuthenticating(false);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 flex items-center justify-center px-4 overflow-hidden selection:bg-indigo-500 selection:text-white">
      {/* Dynamic Ambient Background Glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 blur-3xl rounded-full pointer-events-none transition-all duration-1000 ${
          isLoggedIn
            ? "bg-linear-to-tr from-emerald-600/30 via-teal-600/20 to-cyan-500/30"
            : "bg-linear-to-tr from-indigo-600/30 via-purple-600/20 to-pink-500/30 animate-pulse"
        }`}
      />

      {/* Main Glassmorphic Card */}
      <div className="relative w-full max-w-md bg-slate-900/60 backdrop-blur-2xl border border-slate-800/80 rounded-3xl p-8 shadow-2xl transition-all duration-500 hover:border-slate-700/80">
        
        {/* Dynamic Avatar Ring */}
        <div className="relative mx-auto mb-6 w-24 h-24 flex items-center justify-center">
          <div
            className={`absolute inset-0 rounded-full blur-md transition-all duration-700 ${
              isLoggedIn
                ? "bg-emerald-500/50 scale-100"
                : "bg-indigo-500/50 scale-95"
            }`}
          />
          <div
            className={`relative w-full h-full rounded-full border-2 flex items-center justify-center bg-slate-900/90 shadow-inner transition-all duration-500 ${
              isLoggedIn ? "border-emerald-500/50" : "border-indigo-500/50"
            }`}
          >
            <span className="text-4xl transition-transform duration-300 hover:scale-125 cursor-default">
              {isLoggedIn ? "⚡" : "✨"}
            </span>
          </div>
        </div>

        {/* Dynamic Header */}
        <div className="text-center transition-all duration-300">
          {isLoggedIn ? (
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight bg-linear-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent mb-2">
                Welcome back, {name}
              </h1>
              <p className="text-slate-400 text-sm mb-8">
                Your workspace is ready and secure.
              </p>
            </div>
          ) : (
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-2">
                Access Portal
              </h1>
              <p className="text-slate-400 text-sm mb-6">
                Authenticate with your credentials to enter.
              </p>
            </div>
          )}
        </div>

        {/* Validation Error Notice */}
        {error && !isLoggedIn && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs text-center font-medium animate-headshake">
            {error}
          </div>
        )}

        {/* Form Controls */}
        <form onSubmit={handleAuth} className="space-y-4">
          {!isLoggedIn && (
            <>
              {/* Email Field */}
              <div className="space-y-1 text-left">
                <label className="text-xs font-medium text-slate-300 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-1 text-left">
                <label className="text-xs font-medium text-slate-300 ml-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-16 bg-slate-950/50 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Options Row */}
              <div className="flex items-center justify-between text-xs pt-1 px-1">
                <label className="flex items-center gap-2 cursor-pointer text-slate-400 hover:text-slate-200">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900"
                  />
                  <span>Remember session</span>
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => e.preventDefault()}
                  className="text-indigo-400 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
            </>
          )}

          {/* Dynamic Submit / Action Button */}
          <button
            type="submit"
            disabled={isAuthenticating}
            className={`group relative w-full py-3.5 rounded-2xl text-white font-medium text-sm tracking-wide overflow-hidden shadow-lg transition-all duration-300 active:scale-[0.98] cursor-pointer mt-2 ${
              isLoggedIn
                ? "bg-rose-600 hover:bg-rose-500 shadow-rose-900/30"
                : "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-900/30"
            }`}
          >
            <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            
            <span className="relative flex items-center justify-center gap-2">
              {isAuthenticating ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : isLoggedIn ? (
                "Terminate Session"
              ) : (
                "Authenticate & Continue"
              )}
            </span>
          </button>
        </form>

        {/* Live Status Badge */}
        <div className="mt-6 flex justify-center">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 ${
              isLoggedIn
                ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-400"
                : "bg-slate-800/40 border-slate-700/50 text-slate-400"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  isLoggedIn ? "bg-emerald-400" : "bg-slate-500"
                }`}
              />
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${
                  isLoggedIn ? "bg-emerald-500" : "bg-slate-500"
                }`}
              />
            </span>
            {isLoggedIn ? "Session Active" : "Logged Out"}
          </div>
        </div>

        {/* Footer */}
        <p className="text-[11px] text-slate-500 tracking-wider text-center mt-8 uppercase font-medium">
          © 2026 CPH • Secure Systems
        </p>
      </div>
    </div>
  );
};