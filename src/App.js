import AllTodosComponent from "./components/AllTodosComponent";
import Navbar from "./components/Navbar";
import OperationBar from "./components/OperationBar";
import TodoAddBar from "./components/TodoAddBar";

function App() {
  return (
    <>
      <div className="min-h-[100dvh] bg-light-primary dark:bg-dark-primary">
        <Navbar />
        <TodoAddBar />
        <OperationBar />
        <AllTodosComponent />
      </div>
    </>
  );
}

export default App;
