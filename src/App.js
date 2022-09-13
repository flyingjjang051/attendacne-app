import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addStudents } from "./store/attendacne";
import "./css/layout.css";
import { useState } from "react";
import Student from "./components/Student";
function App() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.count;
  });
  const students = useSelector((state) => {
    return state.students;
  });
  return (
    <div className="App">
      <Header />
      <div className="container contents">
        <p className="total">TOTAL : {count}</p>
      </div>
      <div className="inputBox">
        <input
          type="text"
          placeholder="이름을 입력하세요."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          className="btn"
          onClick={() => {
            //console.log("aa");
            //dispatch(addStudents(Math.random(), name));
            dispatch({
              type: "add",
              payload: { id: Math.random(), name: name },
            });
          }}
        >
          ADD
        </button>
      </div>
      <div className="studentList">
        <ul>
          {students.map((item, idx) => {
            return <Student name={item.name} id={item.id} isHere={item.isHere} />;
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;

