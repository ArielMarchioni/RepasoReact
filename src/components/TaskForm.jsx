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
    <div className= " max-w-md mx-auto p-4 rounded-md">
      <form onSubmit={handleSubmit}
      className="bg-slate-800 p-10 mb-4 ">
        <h1 className="text-2xl font-bold text-white mb-3">Crea una Tarea</h1>
        <input type="text" placeholder="Escribe tu tarea" 
        required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            autoFocus
            className=" bg-slate-300 w-full p-3 mb-2 rounded-md"
        />
        <textarea 
        placeholder="Escribe la descipcion de la tarea" 
        required
        name="" 
        id="" 
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className=" bg-slate-300 w-full p-3 mb-2 rounded-md"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white" type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;