import { useState } from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import "./App.css";
import AddForm from "./components/AddForm";

function App() {
  // create state
  // {studentID , studentName }, {},{}
  const [students, setStudent] = useState([
    { id: 1, name: "Kacha", gender: "male" },
  ]);


  function deleteStudent(id) {
    setStudent(students.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <Header title="Home" />
      <main>
        <AddForm students={students} setStudent={setStudent} />
        <StudentList students={students} deleteStudent={deleteStudent} />
      </main>
    </div>
  );
}

export default App;
