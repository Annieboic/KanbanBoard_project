import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupText, Input} from 'reactstrap';
import task from "./Task";

function CreateModal({statuses, newTask, initialTask, setNewTask, priority, createTask}) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    console.log(newTask);

    const onSubmit = () => {
        createTask(newTask);
        toggle();
        setNewTask(initialTask);
    }

    return (
        <div>
            <Button color="danger" onClick={toggle}>
                Add new task
            </Button>

            <Modal isOpen={modal} toggle={toggle}>

                <ModalHeader toggle={toggle}>Create new task</ModalHeader>

                <ModalBody>

                    <InputGroup>
                        <InputGroupText>
                            Name
                        </InputGroupText>
                        <Input
                            value={newTask.name}
                            onChange={(e) => setNewTask({...newTask, name: e.target.value})}
                        />
                    </InputGroup>
                    <br/>

                    <InputGroup>
                        <InputGroupText>
                            Description
                        </InputGroupText>
                        <Input
                            value={newTask.description}
                            onChange={(e) => setNewTask({...newTask, description: e.target.value})}/>
                    </InputGroup>

                    <br/>

                    <select className="form-select" aria-label="Default select example"
                            value={newTask.status}
                            onChange={(e) => setNewTask({...newTask, status: e.target.value})}
                    >
                        <option selected>Choose Task Status</option>

                        {statuses.map(status => (
                            <option value={status.title} key={status._id}>{status.title}</option>
                        ))}

                    </select>

                    <select className="form-select mt-3" aria-label="Default select example"
                            value={newTask.priority}
                            onChange={(e) => setNewTask({...newTask, priority: +e.target.value})}
                    >
                        <option selected>Choose Task Priority</option>

                        {priority.map((el, index) => (
                            <option value={el} key={index}>{el}</option>
                        ))}
                    </select>


                </ModalBody>


                <ModalFooter>
                    <Button color="primary" onClick={onSubmit} disabled={
                        !newTask.name || !newTask.description
                    }
                    >
                        Add
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CreateModal;