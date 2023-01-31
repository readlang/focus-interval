// this fn holds the logic for moving a task in the order
function Reorder(element, index, movement, tasks) {
    // might need some controls on the movement variable - currently it can be larger than the total list
    
    let newOrder = []
    tasks.forEach(task => newOrder.push(task.id))
    newOrder.splice(index, 1)
    newOrder.splice(index+movement, 0, element.id )
    return(newOrder)
}

export default Reorder;