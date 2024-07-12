import { Table, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { removeTaskFromList, setSeletedTask } from '../slices/tasksSlices';
import { UpdateTask } from './UpdateTask';
import { useState } from 'react';


export const TasksList = () => {

    const [editTask, setEditTask] = useState(false);

    const { tasksList } = useSelector((state) => state.tasks);

    const dispatch = useDispatch();

    const updateTask = (task) => {
        setEditTask(true);
        dispatch(setSeletedTask(task));
    }

    const deleteTask = (task) => {
        console.log("task deleted");
        dispatch(removeTaskFromList(task));
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
                    {
                        tasksList && tasksList.map((task, index) => {
                            return (
                                <tr key={task.id}>
                                    <td>{index + 1}</td>
                                    <td>{task.title}</td>
                                    <td>
                                        <Form>
                                            <div>
                                                <Form.Check style={{display:"inline"}} type='switch' id='custom-switch' />
                                                <span>&nbsp; &nbsp; Completed</span>
                                            </div>
                                        </Form><br />
                                        <Button className='m-1' variant="secondary" type="submit"
                                            onClick={() => updateTask(task)}>
                                            <i className='bi bi-pencil-square'></i>
                                        </Button>
                                        <Button className='m-1' variant="danger" type="submit"
                                            onClick={() => deleteTask(task)}>
                                            <i className='bi bi-trash3'></i>
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
            <UpdateTask show={editTask}
                onHide={() => setEditTask(false)} />
        </>
    )
}
