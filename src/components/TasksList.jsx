import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { tasks } from "../data/tasks";

function Tasklist() {

    const {TasksList} = useContext(TaskContext);


    return(
        <div>
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