// export const OnClick = () => {
//   const HandleClick = () => {
//     alert('Button has been clicked');
//   }
//   return (
//     <div>
//         <h1>Click this Button</h1>
//         <button onClick={HandleClick} className="w-2xs border-2 bg-amber-950 text-amber-50">button</button>
//     </div>
//   )
// }
import { useState } from "react";

export const OnClick = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 2500);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 rounded-xl bg-amber-500/10 border border-amber-200 shadow-sm max-w-sm mx-auto my-6 text-center">
      <h1 className="text-center font-bold ">onClick</h1>
      <h1 className="text-xl font-semibold text-amber-950">
        Interactive Button Demo
      </h1>

      <button
        onClick={handleClick}
        className="px-6 py-2.5 rounded-lg bg-amber-900 text-amber-50 font-medium transition-all duration-200 hover:bg-amber-800 active:scale-95 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50"
      >
        Click Me
      </button>

      {clicked && (
        <p className="text-sm font-medium text-amber-900 animate-fade-in">
          ✓ Button has been clicked!
        </p>
      )}
    </div>
  );
};
