import { useEffect, useState } from "react";
export const UseEffect1 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Cleanup on Amount ");
  });
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 to-purple-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-80">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Count: <span className="text-blue-600">{count}</span>
        </h1>
        <div className="flex gap-3 justify-center">
          <button onClick={() => setCount(count + 1)} className="px-5 py-2.5 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 active:scale-95 transition-all duration-200 shadow-md">Increase</button>
          <button onClick={() => setCount(count - 1)} className="px-5 py-2.5 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 active:scale-95 transition-all duration-200 shadow-md">Decrease</button>
        </div>
      </div>
    </div>
  );
};
