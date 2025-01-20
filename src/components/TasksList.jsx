import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { tasks } from "../data/tasks";

function Tasklist() {

    const {TasksList} = useContext(TaskContext);

    if(TasksList.length === 0){
        return(
            <div className="text-center text-4xl text-gray-500">No hay tareas</div>
        )
    }


    return(
        <div className="grid grid-cols-4  gap-2">
            {
                TasksList.map((task) => {
                    return(
                        <TaskCard 
                            key={task.id}
                            task={task}/>
                    )
                })
            }

        </div>
    )
}

export default Tasklist;