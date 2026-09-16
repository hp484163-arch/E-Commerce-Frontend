import { useEffect, useState, } from "react"

export const UseEffect2 = () => {
    const [name, setName] = useState("");
    useEffect(() =>{
        console.log("Component mounted");
        return () =>{
            console.log("Cleanup on Unmount");
        };
    },[]);
    const Change = (event) =>{
        setName(event.target.value);
    };
    const Submit = (event) => {
        event.preventDefault(); // prevent page reload
        console.log("Name has Updated", name);
        alert(`Name is Updated: ${name}`);
        setName(""); // reset input field
    };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
    <form 
        onSubmit={Submit} 
        className="w-full max-w-sm rounded-xl bg-white p-6 shadow-md border border-gray-100 flex flex-col gap-4"
    >
        <label htmlFor="name-input" className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Input Name
            <input 
                id="name-input"
                type="text" 
                value={name} 
                onChange={Change}
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
            />
        </label>
        <button type="submit" className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors">
            Submit
        </button>
    </form>
</div>
  )
}
