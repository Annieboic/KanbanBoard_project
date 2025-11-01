import React from 'react';

const Task = ({task}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{task.name}</h5>
                <h6 className="d-flex justify-content-center gap-3 align-items-center
                card-subtitle mb-2 text-body-secondary">

                    <button type="button" className="btn btn-light">↑</button>
                    <span>Priority: {task.priority}</span>

                    <button type="button" className="btn btn-light">↓</button>


                </h6>
                <p className="card-text">{task.description}</p>

                <div className="d-flex justify-content-center gap-2">
                    <button type="button" className="btn btn-secondary">←</button>
                    <button type="button" className="btn btn-secondary">→</button>
                </div>

                <div className="d-flex justify-content-around gap-2 mt-3">
                    <button type="button" className="btn btn-warning">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>




            </div>
        </div>
    );
};

export default Task;