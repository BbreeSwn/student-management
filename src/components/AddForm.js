import "./AddForm.css";
import { useState } from "react";

function AddForm(props) {
  const { students, setStudent } = props;
  const [name, setName] = useState("");
  const [gender, setGender] = useState("female");

  function saveStudent(e) {
    e.preventDefault();
    if (!name) {
      alert("Please insert student name");
    } else {
      const newStudent = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        gender:gender
      };
      setStudent([...students, newStudent]);
      setName("");
      setGender("female")
    }
  }
  return (
    <section className="container">
      <form onSubmit={saveStudent}>
        <label>Student name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit" className="btn-add">
          Save
        </button>
      </form>
    </section>
  );
}

export default AddForm;
