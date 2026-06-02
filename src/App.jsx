import { useState } from "react";
function App() {
  const [students, setStudents] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>Seating Chart Generator</h1>

      {/* show all students */}
      {students.map(student => (
        <div key={student}>
          {student}
        </div>
      ))}
    </div>
  );
}

export default App;