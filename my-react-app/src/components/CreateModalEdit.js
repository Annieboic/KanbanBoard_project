import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupText, Input} from 'reactstrap';

function CreateModalEdit({setEditTaskModal,editTaskModal, task, editTask,setTasks}) {


    const toggle = () => setEditTaskModal(!editTaskModal);

    const [editibleTask, setEditibleTask] = useState(task);

    const editTaskId = () => {
        editTask(task._id, {name: editibleTask.name, description: editibleTask.description});
        toggle();

    }

    return (
        <div>

            <Modal isOpen={editTaskModal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <InputGroupText>
                            Name
                        </InputGroupText>

                        <Input
                            value={editibleTask.name}
                            onChange={(e) => setEditibleTask({...editibleTask, name: e.target.value})}
                        />
                    </InputGroup>

                    <br />

                    <InputGroup>
                        <InputGroupText>
                            Description
                        </InputGroupText>

                        <Input
                            value={editibleTask.description}
                            onChange={(e) => setEditibleTask({...editibleTask, description: e.target.value})}
                        />
                    </InputGroup>





                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={editTaskId}>
                        Edit
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CreateModalEdit;