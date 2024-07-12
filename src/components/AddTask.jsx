import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addTaskToList } from '../slices/tasksSlices';

export const AddTask = () => {

    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const addTask = (e) => {
        e.preventDefault();
        console.log({ title });
        dispatch(addTaskToList({ title }));
        setTitle("");
    }
    return (
        <>
            <Form className="my-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='h3 mb-4 text-black'>Task Title</Form.Label>
                    <Form.Control type="text" value={title}
                        onChange={(e) => setTitle(e.target.value)} placeholder="Enter Task Title" />
                </Form.Group>
                <div className='text-end mt-5'>
                    <Button variant="primary" type="submit" onClick={(e) => addTask(e)}>
                        Add Task
                    </Button>
                </div>
            </Form>
        </>
    )
}
