import { configureStore } from '@reduxjs/toolkit'

import userReducer from './slices/userSlice'
import errorsReducer from "./slices/errorsSlice"

// import tracksReducer from './slices/tracksSlice'
// import actionsReducer from './slices/actionsSlice'
// import groupsReducer from './slices/groupsSlice'
// import messagesReducer from "./slices/messagesSlice"
// import membersReducer from "./slices/membersSlice"
// import goalsReducer from "./slices/goalsSlice"
// import relationshipsReducer from "./slices/relationshipsSlice"

export default configureStore({
    reducer: {
        user: userReducer,
        errors: errorsReducer,

        // tracks: tracksReducer, 
        // actions: actionsReducer,
        // groups: groupsReducer,
        // messages: messagesReducer,
        // members: membersReducer,
        // goals: goalsReducer,
        // relationships: relationshipsReducer,
    },
})