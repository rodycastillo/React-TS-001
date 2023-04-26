import React from 'react'
import { AppContext, iTask } from '../content/AppContext'

const useTasks = () => {

  const {tasks, setTasks} = React.useContext(AppContext);


  const toggleDoneTasks = (i: number): void => {
    const newTasks: iTask[] = [...tasks]
    newTasks[i].done = !newTasks[i].done
    setTasks(newTasks);
  }

  const deleteTask = (i: number):void => {
    const newTasks: iTask[] = [...tasks]
    newTasks.splice(i, 1)
    setTasks(newTasks);
  }

  const addTask = (name: string): void => {
    const newTasks: iTask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  return {
    toggleDoneTasks,
    deleteTask,
    addTask
  }
}

export default useTasks;