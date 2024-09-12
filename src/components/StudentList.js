import "./StudentList.css";
import Item from "./Item";
import { useState } from "react";

export default function StudentList(props) {
  const [show, setShow] = useState(true); // true แสดงเนื้อหา , false ซ่อนเนื้อหา
const {students,deleteStudent} = props
  return (
    <>
      <ul>
        <div className="header">
          <h1>Student Total = ({students.length})</h1>
          <button onClick={() => setShow(!show)}>
            {show ? "Hide" : "Show"}
          </button>
        </div>

        {/* ถ้า state show เป็นจริง จะแสดงค่า  students.map */}
        {show &&
          students.map((data) => (
            <Item key={data.id} data={data} deleteStudent={deleteStudent} />
          ))}
      </ul>
    </>
  );
}
