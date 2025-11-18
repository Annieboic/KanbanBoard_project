import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import Status from "./components/Status";
import CreateModal from "./components/CreateModal";
import CreateModalEdit from "./components/CreateModalEdit";


function App() {

    const [statuses, setStatuses] = useState([]);
    const [tasks, setTasks] = useState([]);

    const priority = [1, 2, 3, 4, 5]

    const initialTask = {
        name: "",
        description: "",
        status: statuses[0],
        priority: priority[0],
    }

    const [newTask, setNewTask] = useState(initialTask);


    const getStatuses = () => {

        axios.get('https://expressjs-server.vercel.app/statuses')
            .then(function (response) {
                // handle success
                setStatuses(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    const getTasks = () => {

        axios.get('https://expressjs-server.vercel.app/tasks')
            .then(function (response) {
                // handle success
                setTasks(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    const movePriority = (id, priority) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, {priority: priority})
            .then(function (response) {
                // handle success
                getTasks();
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const deleteTask = (id) => {
        axios.delete(`https://expressjs-server.vercel.app/tasks/${id}`)
            .then(function (response) {
                // handle success
                getTasks();
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const createTask = (task) => {
        axios.post(`https://expressjs-server.vercel.app/tasks/`, task)

            .then(function (response) {
                // handle success
                getTasks();
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const editTask = (id, task) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, {...task})

            .then(function (response) {
                // handle success
                getTasks();
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const moveTask = (task, direction) => {
        const statusesStringArray = statuses.map(el => el?.status) //array of strings of statuses ['','','']
        const currentIndex = statusesStringArray.indexOf(task?.status); //1-In progress
        const newIndex = currentIndex + direction; //1 + 1 = 2
        const newStatus = statusesStringArray[newIndex];



        axios.patch(`https://expressjs-server.vercel.app/tasks/${task._id}`, {status: newStatus})

            .then(function (response) {
                // handle success
                getTasks();
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })


    }


    useEffect(() => {
        getStatuses();
        getTasks();


    }, [])


    return (
        <div>

            <h1>Kanban Board</h1>

            <div className="d-flex justify-content-center align-items-center gap-2 mb-3">

                <CreateModal
                    statuses={statuses}
                    tasks={tasks}
                    priority={priority}
                    newTask={newTask}
                    setNewTask={setNewTask}
                    createTask={createTask}
                    initialTask={initialTask}/>


            </div>


            <div className="container text-center">
                <div className="row align-items-start">

                    {statuses.map(status =>

                        <Status
                            key={status._id}
                            status={status}
                            tasks={tasks}
                            movePriority={movePriority}
                            deleteTask={deleteTask}
                            statuses={statuses}
                            priority={priority}
                            editTask={editTask}
                            moveTask={moveTask}


                        />
                    )}
                </div>
            </div>


        </div>
    );
}

export default App;
