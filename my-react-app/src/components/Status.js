import React from 'react';
import Task from "./Task";

const Status = ({status,tasks,movePriority,deleteTask}) => {
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


                />
                )}
            </div>



    );
};

export default Status;