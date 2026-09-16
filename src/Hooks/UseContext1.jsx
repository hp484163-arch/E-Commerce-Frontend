import { createContext, useState } from "react";
// 1. Rename the context object (e.g., StudentContext)
export const StudentContext = createContext();
// 2. Keep your component name unique (e.g., UseContext1 or StudentProvider)
export const UseContext1 = ({ children }) => {
    const [student, setStudent] = useState({
        id: 1,
        name: "hour",
        gender: "male",
    });
    return (
        // 3. Wrap {children} properly inside the Provider
        <StudentContext.Provider value={{ student, setStudent }}>
            {children}
        </StudentContext.Provider>
    );
};