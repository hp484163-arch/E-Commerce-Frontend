// import { useState } from "react";
// export const OnChange = () => {
//   const [value, setValue] = useState("");
//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };
//   return (
//     <div className="flex flex-col gap-2 p-4">
//       <label htmlForm="text-input" className="text-sm font-medium">
//         Enter Text:
//       </label>
//       <input
//         id="text-input"
//         className="w-full max-w-md border-2 border-gray-400 bg-amber-200 p-2 rounded"
//         type="text"
//         value={value}
//         onChange={handleChange}
//       />
//       <p>You typed: {value}</p>
//     </div>
//   );
// };

import { useState } from "react";

export const OnChange = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <div className="flex flex-col gap-4 p-6 rounded-2xl bg-amber-500/10 border border-amber-200 shadow-sm max-w-md mx-auto my-6 backdrop-blur-sm">
      <h1 className="text-center font-bold ">onchange</h1>
      <div className="flex justify-between items-center">
        <label htmlFor="text-input" className="text-sm font-semibold text-amber-950">
          Live Input Field
        </label>
        <span className="text-xs text-amber-800/70 font-mono">
          {value.length} characters
        </span>
      </div>

      <div className="relative flex items-center">
        <input
          id="text-input"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Start typing..."
          className="w-full px-4 py-2.5 rounded-xl border border-amber-300 bg-white/80 text-amber-950 placeholder-amber-800/40 shadow-inner transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
        />
        {value && (
          <button
            onClick={handleClear}
            type="button"
            className="absolute right-3 text-amber-700/60 hover:text-amber-900 text-xs font-semibold px-1.5 py-0.5 rounded hover:bg-amber-200/50 transition-colors"
          >
            Clear
          </button>
        )}
      </div>

      <div className="min-h-10 p-3 rounded-lg bg-amber-100/60 border border-amber-200/50">
        <p className="text-xs font-medium text-amber-800 uppercase tracking-wider mb-1">
          Output Preview
        </p>
        <p className="text-sm font-medium text-amber-950 wrap-break-word">
          {value || <span className="italic text-amber-800/50">Nothing typed yet...</span>}
        </p>
      </div>
    </div>
  );
};