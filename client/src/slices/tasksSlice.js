import {createSlice} from '@reduxjs/toolkit'
import {loadErrors } from "./errorsSlice";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        userTasks: []
    },
    reducers: {
        loadTasks: (state, action) => { state.userTasks = action.payload },
        addTask: (state, action) => {state.userTasks.push(action.payload)},
        editTaskRx: (state, action) => {state.userTasks[
            state.userTasks.findIndex(x => x.id === action.payload.id)] = action.payload },
        deleteTaskRx: (state, action) => {state.userTasks = state.userTasks.filter(x => x.id !== action.payload)}
    },
})

export const { loadTasks, addTask, editTaskRx, deleteTaskRx } = tasksSlice.actions

export default tasksSlice.reducer

export const getTasks = () => (dispatch) => {
    fetch(`/users/current/tasks`)
    .then(resp => resp.json())
    .then(data => {
        data.errors ? dispatch(loadErrors(data.errors)) : dispatch(loadTasks(data))
    })
}

export const createTask = ( listId, name, length, status ) => (dispatch) => {
    fetch("/tasks", {
        method: 'post',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({ list_id: listId, name: name, length: length, status: status })
    })
    .then(resp => resp.json())
    .then(data => {
        // console.log(data)
        data.errors ? dispatch(loadErrors(data.errors)) : dispatch(addTask(data))
    })
}

export const editTask = ( taskId, listId, name, length, status ) => (dispatch) => {
    fetch(`/tasks/${taskId}/`, {
        method: 'put',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({ list_id: listId, name: name, length: length, status: status })
    })
    .then(resp => resp.json())
    .then(data => {
        // console.log(data)
        data.errors ? dispatch(loadErrors(data.errors)) : dispatch(editTaskRx(data))
    })
}

export const deleteTask = ( taskId ) => (dispatch) => {
    fetch(`/goals/${taskId}`, {
        method: 'delete',
        headers: {'content-type': 'application/json'}
    })
    .then(resp => resp.json())
    .then(data => {
        // console.log(data)
        data.errors ? dispatch(loadErrors(data.errors)) : dispatch(deleteTaskRx(taskId))
    })
}
