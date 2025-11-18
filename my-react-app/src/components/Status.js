import React from 'react';
import Task from "./Task";

const Status = ({status,tasks,movePriority,deleteTask, priority, statuses, editTask,moveTask,setTasks}) => {
    return (

            <div className="col">
                {status.title}

                {tasks
                    .sort((a, b) => a.priority - b.priority)
                    .filter(task => task.status === status.status)

                    .map(task =>

                <Task
                    key={task._id}
                    task={task}
                    movePriority={movePriority}
                    deleteTask={deleteTask}
                    priority={priority}
                    editTask={editTask}
                    statuses={statuses}
                    moveTask={moveTask}
                    setTasks={setTasks}



                />
                )}
            </div>



    );
};

export default Status;