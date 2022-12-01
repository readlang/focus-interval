import { configureStore } from '@reduxjs/toolkit'

import errorsReducer from "./slices/errorsSlice"
import userReducer  from "./slices/userSlice"
import listsReducer from "./slices/listsSlice"
import tasksReducer from "./slices/tasksSlice"

export default configureStore({
    reducer: {
        errors: errorsReducer,
        user: userReducer,
        lists: listsReducer,
        tasks: tasksReducer,
    },
})