import { editList } from "../slices/listsSlice"
import { useDispatch } from "react-redux";

// inputs - tasks: array of objs, list: obj
// returns - tasksOrdered: array of objs in order
function Sorter(tasks, list) {
    const dispatch = useDispatch()

    // assign the order variable to equal the saved order
    let order = []
    if (list && list.order !== null ) {
        if (list.order !== "") {
            try {
                JSON.parse(list.order)
            } catch (error) {
                console.log("JSON error:", error)
            }
            order = JSON.parse(list.order)
        } else {
            // if list.order is empty, load up order array with tasks in default order, then save this back to DB
            tasks.forEach(task => order.push(task.id))
            dispatch(editList(list.id, list.name, list.details, JSON.stringify(order)))
        }
    }

    // make a copy of tasks so you can modify it
    let tasksCopy = [...tasks]

    // this will be returned in the end
    let tasksOrdered = []
    let orderRemoveIds = []

    function orderizer(id) {
        if (tasksCopy.find(ele => ele.id === id)) {
            tasksOrdered.push( tasksCopy.find(ele => ele.id === id ))
            let index = tasksCopy.findIndex(x => x.id === id)
            tasksCopy.splice( index , 1 ) //deletes the correct task out of array
        } else {
            console.log(`Can't find task with id: ${id}`)
            orderRemoveIds.push(id)
        }
    }

    if (order.length === 0) {
        console.log("order not present, returning original order")
        tasksOrdered = tasksCopy
    } else {
        order.forEach( id => orderizer(id) )
        // map through the remainging in tasksCopy - output any not contained in "order"
        tasksCopy.map(ele => tasksOrdered.push(ele))
        if (orderRemoveIds.length !== 0) {
            orderRemoveIds.forEach(id => order.splice(order.findIndex(x => x === id) , 1))
            console.log(order)
            dispatch(editList(list.id, list.name, list.details, JSON.stringify(order)))
        }
    }

    if (tasksCopy.length !== 0 && list && list.id != null) {
    
        tasksCopy.forEach(task => order.push(task.id))
        dispatch(editList(list.id, list.name, list.details, JSON.stringify(order)))
    }

    return tasksOrdered
}

export default Sorter;