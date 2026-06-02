import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [input, setInput] = useState("");

    function addStudent() {
      if (!input.trim()) return;

      setStudents([...students, input]);
      setInput("");
    }

  return (
    <div>
      <h1>Seating Chart Generator</h1>

      {/* INPUT BOX */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter student name"
      />
      
      <button onClick={addStudent}>
        Add Student
      </button>
      
      {/* STUDENT LIST */}
      {students.map((student, index) => (
        <div key={index}>
          {student}
        </div>
      ))}
    </div>
  );
}

export default App;