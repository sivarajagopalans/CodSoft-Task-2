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
    }
})

export const{addTaskToList} =taskSlice.actions;
export default taskSlice.reducer;