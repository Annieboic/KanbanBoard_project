import React from 'react';
import Task from "./Task";

const Status = ({status,tasks}) => {
    return (

            <div className="col">
                {status.title}

                {tasks
                    .filter(task => task.status === status.status)

                    .map(task =>

                <Task
                    key={task._id}
                    task={task}
                />
                )}
            </div>



    );
};

export default Status;