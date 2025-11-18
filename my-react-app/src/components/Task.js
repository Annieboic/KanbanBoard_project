import React, {useState} from 'react';
import CreateModalEdit from "./CreateModalEdit";
import status from "./Status";
import DeleteModal from "./DeleteModal";


const Task = ({task, movePriority, deleteTask, statuses, editTask, priority,moveTask, setTasks}) => {


    const [editTaskModal, setEditTaskModal] = useState(false);
    const [deleteTaskModal, setDeleteTaskModal] = useState(false);


    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{task.name}</h5>
                <h6 className="d-flex justify-content-center gap-3 align-items-center
                card-subtitle mb-2 text-body-secondary">

                    <button
                        disabled={task.priority <= 0}
                        onClick={() => movePriority(task._id, task.priority - 1)}
                        type="button" className="btn btn-light">↑
                    </button>
                    <span>Priority: {task.priority}</span>

                    <button
                        disabled={task.priority >= 10}
                        onClick={() => movePriority(task._id, task.priority + 1)}
                        type="button" className="btn btn-light">↓
                    </button>


                </h6>
                <p className="card-text">{task.description}</p>

                <div className="d-flex justify-content-center gap-2">
                    <button type="button" className="btn btn-secondary" disabled={task.status === 'To do' } onClick={()=> moveTask(task, -1)}>←</button>
                    <button type="button" className="btn btn-secondary" disabled={task.status === 'Done' } onClick={()=> moveTask(task , 1)}>→</button>
                </div>

                <div className="d-flex justify-content-around gap-2 mt-3">


                    <button
                        onClick={() => setDeleteTaskModal(true)}
                        type="button" className="btn btn-danger">
                        Delete
                        {deleteTaskModal &&
                        <DeleteModal
                        deleteTask={deleteTask}
                        task={task}
                        setDeleteTaskModal={setDeleteTaskModal
                        }
                        deleteTaskModal={deleteTaskModal}/>}
                    </button>

                    <button type="button" className="btn btn-dark" onClick={() => setEditTaskModal(true)}>
                        Edit

                        {editTaskModal &&
                            <CreateModalEdit
                                setTasks={setTasks}
                                task={task}
                                priority={priority}
                                editTask={editTask}
                                statuses={statuses}
                                setEditTaskModal={setEditTaskModal}
                                editTaskModal={editTaskModal}

                            />}
                    </button>


                </div>


            </div>
        </div>
    );
};

export default Task;