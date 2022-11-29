import {Routes, Route} from "react-router-dom" 
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {userSessionLogIn} from '../slices/userSlice'

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
  }, [dispatch])

  if ( !user.id ) { return <> <UserPage/> <Error /> </>} 
  else { return (
    <>
      <Error />
      <Routes>
        <Route path="/" element={<ListView />} />
        <Route path="lists" element={<ListView />} />
        <Route path="tasks" element={<TaskView />} />
        <Route path="settings" element={<Settings/>} />
      </Routes>
    </>
  )}
}

export default App;