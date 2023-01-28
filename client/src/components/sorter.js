// inputs - tasks: array of objs, list: obj
// returns - tasksOrdered: array of objs in order
function sorter(tasks, list) {

    // assign the order variable to equal the saved order
    let order = []
    if (list && list.order !== null && list.order !== "") {
        try {
            JSON.parse(list.order)
        } catch (error) {
            console.log("JSON error:", error)
        }
        order = JSON.parse(list.order)
    }

    // make a copy of tasks so you can modify it
    let tasksCopy = [...tasks]

    // this will be returned in the end
    let tasksOrdered = []

    function orderizer(id) {
        if (tasksCopy.find(ele => ele.id === id)) {
            tasksOrdered.push( tasksCopy.find(ele => ele.id === id ))
            let index = tasksCopy.findIndex(x => x.id === id)
            tasksCopy.splice( index , 1 )
        } 
    }

    if (order.length === 0) {
        console.log("order not present, returning original order")
        tasksOrdered = tasksCopy
    } else {
        order.forEach( id => orderizer(id) )
        // map through the remainging in tasksCopy - output any not contained in "order"
        tasksCopy.map(ele => tasksOrdered.push(ele))
    }

    return tasksOrdered
}

export default sorter;


// let tasks = [
//     {name: "task five", id: 5},
//     {name: "task three", id: 3},
//     {name: "task one", id: 1}
// ]
// let json = "[3,4]"
// let list = {name: "read", order: json}

// console.log( tasks )
// console.log( sorter(tasks, list))


