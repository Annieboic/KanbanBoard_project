import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import Status from "./components/Status";

function App() {

    const [statuses, setStatuses] = useState([]);
    const [tasks, setTasks] = useState([]);




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
                console.log(response);
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



    useEffect(() => {
        getStatuses();
        getTasks();


    },[])


    return (
        <div className="App">

            <h1>Kanban Board</h1>

            <div className="container text-center">
                <div className="row align-items-start">

                    {statuses.map(status =>

                        <Status
                            key={status._id}
                            status={status}
                            tasks={tasks}
                            movePriority={movePriority}
                            deleteTask={deleteTask}


                        />
                    )}
                </div>
            </div>


        </div>
    );
}

export default App;
