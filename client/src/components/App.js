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
import Timer from "./Timer"

function App() {
  const user = useSelector((state)=>state.user.value)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(userSessionLogIn())
    dispatch(getTasks())
    dispatch(getLists())
  }, [dispatch])

  // the if / else serves two purposes:
  // - it checks if user is logged in (and displays the login screen if not)
  // - it also delays loading other pages that depend on first fetching info from server
  if ( !user.id ) { return <> <UserPage/> <Error /> </>}    /// comment this out to bypass sign in page
  else {                                                    /// comment this out to bypass sign in page            
    return (
    <>
      <Error />
      <Routes>
        <Route path="/" element={<ListView />} />
        <Route path="list/:listId/tasks" element={<TaskView />} />
        <Route path="settings" element={<Settings/>} />
        <Route path="timer" element={<Timer/>} />
      </Routes>
    </>
  )
  }                                                          /// comment this out to bypass sign in page
}

export default App;