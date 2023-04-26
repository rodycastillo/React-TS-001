import React from "react";
import useTasks from "../hooks/useTasks";

type FormElement = React.FormEvent<HTMLFormElement>;

const FormNewTask = () => {
  const [newTask, setNewTask] = React.useState<string>("");
  const taskInput = React.useRef<HTMLInputElement>(null);


  const { addTask  } = useTasks();

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    console.log({ newTask });
    addTask(newTask);
    setNewTask("");
    taskInput.current?.focus();
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <h5>Add New Task:</h5>
          <input
            className="form-control"
            placeholder="write..."
            type="text"
            ref={taskInput}
            value={newTask}
            autoFocus
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="btn btn-success text-center mt-4">save</button>
        </form>
      </div>
    </div>
  );
};

export default FormNewTask;
