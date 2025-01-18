
import Tasklist from "./components/TasksList";
import TaskForm from "./components/TaskForm";
import {tasks as data, tasks} from './data/tasks.js';
import { useState, useEffect} from "react";


function App(){
  

  const [TasksList, setTaskslist] = useState([]);
  useEffect(() => {
    //aca le paso la data que quiero que se muestra en la lista
    setTaskslist(data)
  }, [])

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

  

  return (
   <> 
      <h1>Hola mundo</h1>
      <TaskForm 
        createTask={createTask}
      />
      <Tasklist 
        tasks={TasksList}
        deleteTask={deleteTask}
      
      /> 
    </>
  );
}

export default App;