import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [input, setInput] = useState("");
  const [bulkInput, setBulkInput] = useState("");
  // generated seating chart
  const [seats, setSeats] = useState([]);

  function addStudent() {
    if (!input.trim()) return;

    setStudents(prev => [...prev, input]);
    setInput("");
  }

  function importStudents() {
    const names = bulkInput
      .split("\n")
      .map(name => name.trim())
      .filter(name => name !== "");

    setStudents(prev => [...prev, ...names]);
    setBulkInput("");
  }

  function generateSeating() {
    const shuffled = [...students].sort(() => Math.random() - 0.5);
    setSeats(shuffled);
  }

  return (
    <div>
      <h1>Seating Chart Generator</h1>

      {/* SINGLE INPUT */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addStudent();
          }
        }}
        placeholder="Enter student name"
      />

      <button onClick={addStudent}>
        Add Student
      </button>

      {/* BULK INPUT */}
      <textarea
        value={bulkInput}
        onChange={(e) => setBulkInput(e.target.value)}
        placeholder="Paste names from Excel (one per line)"
      />

      <button onClick={importStudents}>
        Add bulk list of Students
      </button>
      
      <button onClick={generateSeating}>
        Generate Seating Chart
      </button>

      {/* STUDENT LIST */}
      {students.map((student, index) => (
        <div key={index}>
          {student}
        </div>
      ))}

      <button onClick={() => setStudents([])}>
              Clear Students
      </button>
      
      <div className="seat-grid">
      {seats.map((student, index) => (
        <div className="seat-card" key={index}>
          {student}
        </div>
      ))}
    </div>

    

    </div>
  );
}

export default App;