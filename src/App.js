import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import ViewTodo from "./components/ViewTodo/ViewTodo";
function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <br />
      <br />
      <br />
      <div className="container">
        <AddTodo />
        <br />
        <br />
        <br />
        <ViewTodo />
      </div>
    </div>
  );
}

export default App;
