import {createSlice} from '@reduxjs/toolkit'
import {loadErrors } from "./errorsSlice";
import { path } from "./fetchVariable";

export const listsSlice = createSlice({
    name: "lists",
    initialState: {
        userLists: []
    },
    reducers: {
        loadLists: (state, action) => { state.userLists = action.payload },
        addList: (state, action) => {state.userLists.push(action.payload)},
        editListRx: (state, action) => {state.userLists[
            state.userLists.findIndex(x => x.id === action.payload.id)] = action.payload },
        deleteListRx: (state, action) => {state.userLists = state.userLists.filter(x => x.id !== action.payload)}
    },
})

export const { loadLists, addList, editListRx, deleteListRx } = listsSlice.actions

export default listsSlice.reducer

export const getLists = () => (dispatch) => {
    fetch(`${path}/users/current/lists`)
    .then(resp => resp.json())
    .then(data => {
        data.errors ? dispatch(loadErrors(data.errors)) : dispatch(loadLists(data))
    })
}

export const createList = ( userId, name, details, order ) => (dispatch) => {
    fetch(`${path}/lists`, {
        method: 'post',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({ user_id: userId, name: name, details: details, order: order })
    })
    .then(resp => resp.json())
    .then(data => {
        // console.log(data)
        data.errors ? dispatch(loadErrors(data.errors)) : dispatch(addList(data))
    })
}

export const editList = ( listId, name, details, order ) => (dispatch) => {
    fetch(`${path}/lists/${listId}/`, {
        method: 'put',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({ name: name, details: details, order: order  })
    })
    .then(resp => resp.json())
    .then(data => {
        // console.log(data)
        data.errors ? dispatch(loadErrors(data.errors)) : dispatch(editListRx(data))
    })
}

export const deleteList = ( listId ) => (dispatch) => {
    fetch(`${path}/goals/${listId}`, {
        method: 'delete',
        headers: {'content-type': 'application/json'}
    })
    .then(resp => resp.json())
    .then(data => {
        // console.log(data)
        data.errors ? dispatch(loadErrors(data.errors)) : dispatch(deleteListRx(listId))
    })
}
