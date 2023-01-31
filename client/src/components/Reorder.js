import { editList } from "../slices/listsSlice"
import { useDispatch } from "react-redux";

// right now this file is not working...

function Reorder(element, index, movement, tasks, list) {
    const dispatch = useDispatch()

    //need some controls on the movement variable here - currently it can be anything!
    
    let newOrder = []
    tasks.forEach(task => newOrder.push(task.id))
    newOrder.splice(index, 1)
    newOrder.splice(index+movement, 0, element.id )
    console.log(element.id, "has moved")
    console.log(newOrder)
    dispatch(editList(list.id, list.name, list.details, JSON.stringify(newOrder)))
}

export default Reorder;