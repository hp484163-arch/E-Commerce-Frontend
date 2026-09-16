import { useContext } from "react";
import { Context } from "./StudentContext";
const StudentComponent = () => {
  const { student, setStudent } = useContext(Context);
  const updateStudent = () => {
    setStudent({...student,name: "Thon Thannarong",Age: 20,grade: "B"});
  };
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
      <button onClick={updateStudent}>
        Upgrade Grade
      </button>
    </div>
  );
};
export default StudentComponent;

