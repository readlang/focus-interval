import {createSlice} from '@reduxjs/toolkit'
import { loadErrors } from './errorsSlice'
import { path } from "./fetchVariable";

export const userSlice = createSlice({
    name: "user",

    initialState: {
        value: {},
    },

    reducers: {
        loadUser: (state, action) => { state.value = action.payload }
    },
})

export const { loadUser } = userSlice.actions

export default userSlice.reducer

// Explicit log in by typing username and password - creates session cookie
export const userLogIn = (username, password) => (dispatch) => {
    fetch(`${path}/login`, {
        method: 'post',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({username: username, password: password})
    })
    .then(resp =>resp.json())
    .then( data => data.errors ? dispatch(loadErrors(data.errors)) : dispatch(loadUser(data)) )
}

// Log in using saved session cookie on return visit
export const userSessionLogIn = () => (dispatch) => {
    fetch(`${path}/me`)
    .then(resp => resp.json())
    // doesn't load errors into state -  no need to display error if not logged in
    .then(data => data.errors ? null : dispatch(loadUser(data)) ) 
}

// New user signup - creates session cookie
export const userSignUp = (
    username, password, passwordConfirm, email
    ) => (dispatch) => {
    fetch(`${path}/signup`, {
        method: "post",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({username: username, password: password, 
          password_confirmation: passwordConfirm, email: email})
    })
    .then(resp => resp.json())
    .then(data => data.errors ? dispatch(loadErrors(data.errors)) : dispatch(loadUser(data)) )
}

// Explicit log out by clicking log out button - deletes session cookie
export const userLogOut = () => (dispatch) => {
    fetch(`${path}/logout`, {
        method: 'delete',
        headers: {'content-type': 'application/json'}
    })
    .then( dispatch(loadUser({})) )
}

// Edit user profile info
export const userEdit = ( email, interval, preferences ) => (dispatch) => {
    fetch(`${path}/users/current`, {
        method: 'put',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({ email: email, interval: interval, preferences: preferences })
    })
    .then(resp => resp.json())
    .then(data => data.errors ? dispatch(loadErrors(data.errors)) : dispatch(loadUser(data)) )
}