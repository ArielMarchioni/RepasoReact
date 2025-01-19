import {createContext, useState, useEffect} from 'react';
import {tasks as data} from '../data/tasks';



export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [TasksList, setTaskslist] = useState([]);

  function createTask(tasks){
    setTaskslist([...TasksList, { 
      id: TasksList.length + 1,
      title: tasks.title,
      description: tasks.description
    } ])   

  }

  function deleteTask(taskId){
    setTaskslist(TasksList.filter(task => task.id !== taskId))
   
  }

  useEffect(() => {
    //aca le paso la data que quiero que se muestra en la lista
    setTaskslist(data)
  }, [])



    return (
       <TaskContext.Provider value={{TasksList, createTask, deleteTask}}>
        {props.children}
        </TaskContext.Provider>
    );
}

