import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap'

export const TasksList = () => {
    const [editTask, setEditTask] = useState(false)
    const updateTask = () => {
        console.log("task updated");

    }
    const deleteTask = () => {
        console.log("task deleted");

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
                        <td>wakeup</td>
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
