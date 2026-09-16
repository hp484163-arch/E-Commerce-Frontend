import { useState } from "react";
export const App1 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name] = useState("CPH.");
  const Loading = () => {
    setIsLoggedIn((pre) => !pre);
  };
  return (
    <div>
      <button onClick={Loading} className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg">
        {isLoggedIn ? "Log out" : "Log in / Sign up"}
      </button>
      {isLoggedIn ? (
        <div>
          <h1 style={{color: "red" }}>Welcome {name}</h1>
        </div>
      ) : (
        <h1 style={{color: "blue" }}>Please Log in / Sign up</h1>
      )}
    </div>
  );
};
