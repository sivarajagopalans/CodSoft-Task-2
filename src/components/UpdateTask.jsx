import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { updateTaskInList } from '../slices/tasksSlices';
import { useDispatch, useSelector } from 'react-redux';

export const UpdateTask = (props) => {

    const [title, setTitle] = useState('');
    const [id, setId] = useState(0);

    const { selectedTask } = useSelector((state) => state.tasks);


    const dispatch = useDispatch();


    const submitEdit = (e) => {
        e.preventDefault();
        props.onHide();
        dispatch(updateTaskInList({ id, title }));
        console.log({ id, title });
        console.log("task updated");
    }

    useEffect(() => {
        if (Object.keys(selectedTask).length !== 0) {
            setTitle(selectedTask.title);
            setId(selectedTask.id);
        }
    }, [selectedTask])
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="my-2">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='h4 mb-4'>Task Title</Form.Label>
                            <Form.Control type="text" value={title}
                                onChange={(e) => setTitle(e.target.value)} placeholder="Enter Update Title" />
                        </Form.Group>

                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit"
                        onClick={(e) => submitEdit(e)}>
                        update
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
