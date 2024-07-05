import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';


export const TasksList = () => {
    const [editTask, setEditTask] = useState(false)
    const updateTask = () => {
        console.log("task updated");
        setEditTask(true);

    }
    const deleteTask = () => {
        console.log("task deleted");

    }
    const submitEdit=()=>{
        setEditTask(false);
    }
    return (
        <>
            <Table striped bordered hover>
                <thead className='text-center align-middle'>
                    <tr>
                        <th>Task Number</th>
                        <th>Task Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center align-middle'>
                    <tr>
                        <td>1</td>
                        {editTask ? <td>
                            <Form.Control className='edit-input' type="text" style={{width:"70px",display:"inline",border:"none",outline:"none",background:"transparent"}} />
                            <Button variant="secondary" className='m-2'
                            onClick={() => submitEdit()} type="submit"><i className='bi bi-check-lg'></i>
                            </Button></td> : <td>wakeup</td>}
                        <td >
                            <Button className='m-1' variant="secondary" type="submit"
                                onClick={() => updateTask()}>
                                <i className='bi bi-pencil-square'></i>
                            </Button>
                            <Button className='m-1' variant="danger" type="submit"
                                onClick={() => deleteTask()}>
                                <i className='bi bi-trash3'></i>
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}
