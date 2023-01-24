import {createSlice} from '@reduxjs/toolkit'
import {loadErrors } from "./errorsSlice";
import { path } from "./fetchVariable";

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
    fetch(`${path}/users/current/tasks`, {
        credentials: 'include'
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.errors ? dispatch(loadErrors(data.errors)) : dispatch(loadTasks(data))
    })
}

export const createTask = ( listId, name, details, length, status ) => (dispatch) => {
    fetch(`${path}/tasks`, {
        method: 'post',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({ list_id: listId, name: name, details: details, length: length, status: status }),
        credentials: 'include'
    })
    .then(resp => resp.json())
    .then(data => {   // something breaking down here - not valid JSON...
        console.log(data)
        data.errors ? dispatch(loadErrors(data.errors)) : dispatch(addTask(data))
    })
}

export const editTask = ( taskId, listId, name, details, length, status ) => (dispatch) => {
    fetch(`${path}/tasks/${taskId}/`, {   // something breaking down here - 405 error
        method: 'put',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({ list_id: listId, name: name, details: details, length: length, status: status }),
        credentials: 'include'
    })
    .then(resp => resp.json())
    .then(data => {
        // console.log(data)
        data.errors ? dispatch(loadErrors(data.errors)) : dispatch(editTaskRx(data))
    })
}

export const deleteTask = ( taskId ) => (dispatch) => {
    fetch(`${path}/tasks/${taskId}`, {   // something breaking down here - 405 error
        method: 'delete',
        headers: {'content-type': 'application/json'},
        credentials: 'include'
    })
    .then(resp => resp.json())
    .then(data => {
        // console.log(data)
        data.errors ? dispatch(loadErrors(data.errors)) : dispatch(deleteTaskRx(taskId))
    })
}
