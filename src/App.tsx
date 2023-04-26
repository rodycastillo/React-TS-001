import "./App.css";
import FormNewTask from "./components/FormNewTask";
import ListTasks from "./components/ListTasks";

function App(): JSX.Element {
  return (
    <>
      <div className="row p-5">
        <div className="col my-2">
          <FormNewTask />
        </div>
        <div className="col">
          <ListTasks />
        </div>
      </div>
    </>
  );
}

export default App;
