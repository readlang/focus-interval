import {Routes, Route} from "react-router-dom" 
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {userSessionLogIn} from '../slices/userSlice'
import { getTasks } from "../slices/tasksSlice"
import { getLists } from "../slices/listsSlice"

import Error from "./Error"
import UserPage from "./UserPage"
import ListView from "./ListView"
import TaskView from "./TaskView"
import Settings from "./Settings"

function App() {
  const user = useSelector((state)=>state.user.value)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(userSessionLogIn())
    dispatch(getTasks())
    dispatch(getLists())
  }, [dispatch])

  // if ( !user.id ) { return <> <UserPage/> <Error /> </>}    ///uncomment this later!!
  // else { 
    return (
    <>
      <Error />
      <Routes>
        <Route path="/" element={<ListView />} />
        <Route path="list/:listId/tasks" element={<TaskView />} />
        <Route path="settings" element={<Settings/>} />
      </Routes>
    </>
  )
  // }
}

export default App;