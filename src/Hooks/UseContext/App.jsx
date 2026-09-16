import StudentComponent from "./StudentComponent";
import { StudentContext } from "./StudentContext";
function App() {
  return (
    <StudentContext>
      <StudentComponent/>
    </StudentContext>
  );
}
export default App;