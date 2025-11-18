import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const DeleteModal = ({setDeleteTaskModal, deleteTaskModal, task, deleteTask}) => {

    const toggle = () => setDeleteTaskModal(!deleteTaskModal,deleteTask);
    return (
        <div>

            <Modal isOpen={deleteTaskModal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Delete task</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete this task?

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => deleteTask(task._id)}>
                       Delete
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}


export default DeleteModal;