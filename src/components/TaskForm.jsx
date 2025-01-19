import React , {useState, useContext} from "react";
import { TaskContext } from "../context/TaskContext";



function TaskForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const {createTask} = useContext(TaskContext);

     const valor = useContext(TaskContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description);

        createTask({title, description});	

        setTitle('');
        setDescription('');
    }
    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Escribe tu tarea" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            autoFocus
        />
        <textarea 
        placeholder="Escribe la descipcion de la tarea" 
        name="" 
        id="" 
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        ></textarea>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;