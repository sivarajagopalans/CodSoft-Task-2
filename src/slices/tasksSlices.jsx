import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasksList: [],
    selectedTask: {}
}
const taskSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTaskToList: (state, action) => {
            const id = Math.random() * 100;
            let task = { ...action.payload, id };
            state.tasksList.push(task);
        },
        removeTaskFromList: (state, action) => {
            state.tasksList = state.tasksList.filter((task) => {
                return task.id !== action.payload.id
            })
        },
        updateTaskInList: (state, action) => {
            state.tasksList = state.tasksList.map((task) => {
                return task.id === action.payload.id ? action.payload.id : task;
            })
        },
        setSeletedTask: (state, action) => {
            return state.selectedTask = action.payload;
        }
    }
})

export const { addTaskToList, removeTaskFromList, updateTaskInList, setSeletedTask } = taskSlice.actions;
export default taskSlice.reducer;