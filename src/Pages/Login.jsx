import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Login = ({ onLoginSuccess }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = useState(Boolean(location.state?.isSignUp));
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const finalName = isSignUp ? username : email.split("@")[0];
    const userData = { email, name: finalName, rememberMe };

    // Simulates an authentication request delay (1.5 seconds)
    setTimeout(() => {
      setIsLoading(false);
      if (onLoginSuccess) {
        onLoginSuccess(userData);
      }
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 bg-slate-950 text-slate-100 overflow-hidden font-sans">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Glassmorphic Auth Card */}
      <div className="relative w-full max-w-md bg-slate-900/60 backdrop-blur-2xl border border-slate-800/80 rounded-3xl p-8 shadow-2xl shadow-black/60 transition-all duration-300">
        
        {/* Top Mode Segmented Switcher */}
        <div className="grid grid-cols-2 p-1 mb-8 bg-slate-950/60 border border-slate-800/80 rounded-2xl">
          <button
            type="button"
            disabled={isLoading}
            onClick={() => setIsSignUp(false)}
            className={`py-2.5 text-xs font-bold rounded-xl transition-all duration-300 ${
              !isSignUp
                ? "bg-slate-800 text-white shadow-md border border-slate-700/50"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Log In
          </button>
          <button
            type="button"
            disabled={isLoading}
            onClick={() => setIsSignUp(true)}
            className={`py-2.5 text-xs font-bold rounded-xl transition-all duration-300 ${
              isSignUp
                ? "bg-slate-800 text-white shadow-md border border-slate-700/50"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form Title & Subtitle */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-black tracking-tight text-white">
            {isSignUp ? "Create an account" : "Welcome back"}
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            {isSignUp
              ? "Join us today to explore our exclusive collection"
              : "Enter your credentials to access your account"}
          </p>
        </div>

        {/* Authentication Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Username (Sign Up Only) */}
          {isSignUp && (
            <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  disabled={isLoading}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="PhayhourChhun"
                  className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl focus:border-[#FFA500] focus:ring-1 focus:ring-[#FFA500] focus:outline-none text-slate-100 placeholder-slate-500 text-sm transition-all disabled:opacity-50"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          )}

          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                required
                disabled={isLoading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="phayhourchhun@example.com"
                className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl focus:border-[#FFA500] focus:ring-1 focus:ring-[#FFA500] focus:outline-none text-slate-100 placeholder-slate-500 text-sm transition-all disabled:opacity-50"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Password with Toggle */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                disabled={isLoading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-11 py-3 bg-slate-950/50 border border-slate-800 rounded-xl focus:border-[#FFA500] focus:ring-1 focus:ring-[#FFA500] focus:outline-none text-slate-100 placeholder-slate-500 text-sm transition-all disabled:opacity-50"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>

              <button
                type="button"
                tabIndex={-1}
                disabled={isLoading}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3.5 text-slate-500 hover:text-slate-300 transition-colors focus:outline-none disabled:pointer-events-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox & Forgot Password */}
          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none text-slate-400 hover:text-slate-200 transition-colors">
              <input
                type="checkbox"
                disabled={isLoading}
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-[#FFA500] focus:ring-[#FFA500]/50 accent-[#FFA500] cursor-pointer"
              />
              <span>Remember me</span>
            </label>
            {!isSignUp && (
              <button
                type="button"
                disabled={isLoading}
                className="text-[#FFA500] hover:text-amber-400 font-semibold transition-colors disabled:opacity-50"
              >
                Forgot password?
              </button>
            )}
          </div>

          {/* Primary Action Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 flex items-center justify-center gap-2 py-3 px-4 bg-[#FFA500] hover:bg-amber-400 disabled:bg-amber-500/50 text-slate-950 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(255,165,0,0.25)] hover:shadow-[0_0_30px_rgba(255,165,0,0.4)] active:scale-95 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50"
          >
            {isLoading ? (
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
                <span>Processing...</span>
              </>
            ) : (
              <span>{isSignUp ? "Create Account" : "Log In"}</span>
            )}
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-8 text-center text-xs text-slate-400 border-t border-slate-800/80 pt-6">
          {isSignUp ? (
            <p>
              Already have an account?{" "}
              <button
                type="button"
                disabled={isLoading}
                onClick={() => setIsSignUp(false)}
                className="text-[#FFA500] font-bold hover:underline ml-1 disabled:opacity-50"
              >
                Log In
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <button
                type="button"
                disabled={isLoading}
                onClick={() => setIsSignUp(true)}
                className="text-[#FFA500] font-bold hover:underline ml-1 disabled:opacity-50"
              >
                Sign Up
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
};