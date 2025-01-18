import TaskCard from "./TaskCard";


function Tasklist({tasks, deleteTask}) {


    return(
        <div>
            {
                tasks.map((task) => {
                    return(
                        <TaskCard 
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                        />
                    )
                })
            }

        </div>
    )
}

export default Tasklist;