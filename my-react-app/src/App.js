import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import Status from "./components/Status";

function App() {

    const [statuses, setStatuses] = useState([]);
    const [tasks, setTasks] = useState([]);

    const priorities = [1, 2, 3, 4, 5];

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


                        />
                    )}
                </div>
            </div>


        </div>
    );
}

export default App;
