/* eslint-disable react-refresh/only-export-components */
import { createContext, useState} from "react";
export const Context = createContext();
export const StudentContext = ({ children }) => {
    const [student, setStudent] = useState({
        name: "Chhun Phayhour",
        age: 19,
        grade: "A",
    });
    return (
        <Context.Provider value={{student, setStudent}}>
          {children}
        </Context.Provider>
    );
};