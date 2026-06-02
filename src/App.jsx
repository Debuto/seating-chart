import { useState } from "react";
function App() {
  const [students, setStudents] = useState([
    "Alice",
    "Bob",
    "Charlie",
    "David"
  ]);

  return (
    <div>
      <h1>Seating Chart Generator</h1>

      {students.map(student => (
        <div key={student}>
          {student}
        </div>
      ))}
    </div>
  );
}

export default App;