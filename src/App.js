import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/layout.css";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container contents">
        <p className="total">TOTAL : 0</p>
      </div>
      <div className="inputBox">
        <input type="text" placeholder="이름을 입력하세요." />
        <button className="btn">ADD</button>
      </div>
      <div className="studentList"></div>
      <Footer />
    </div>
  );
}

export default App;

