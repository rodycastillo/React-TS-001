import React from "react";
import { AppContext, iTask } from "../content/AppContext";
import useTasks from "../hooks/useTasks";

const ListTasks = () => {

  const {tasks} = React.useContext(AppContext);

  const {toggleDoneTasks, deleteTask} = useTasks();


  return (
    <>
      {tasks?.map((t: iTask, i: number) => (
        <div key={i} className="card card-body my-2 bg-dark text-white">
          <div
            className="row"
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <div className="col">
              <p style={{ textDecoration: t.done ? "line-through" : "" }}>
                Task: {t.task}
              </p>
              <p>Success: {t.done + ""}</p>
            </div>

            <div className="col">
              <button
                className="btn btn-secondary"
                onClick={() => toggleDoneTasks(i)}
              >
                {" "}
                {t.done ? "Ready" : "No yet"}{" "}
              </button>
              <button
                className="btn btn-danger me-1"
                onClick={() => deleteTask(i)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListTasks;
