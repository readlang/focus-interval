import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { H1, H2, H3, H4, H5, H6, H5B, blueUI } from "../style/styled.js";
import { Canvas, Header, ScrollableList, ListItem, Footer, IconButton, OutlineButton, RowButton } from "../style/styled.js";
import ModalAddEdit from "./ModalAddEdit";
import converter from "./converter";
import ModalCurTask from "./ModalCurTask.js";
import ModalAttInt from "./ModalAttInt.js";

const AttentionArea = styled.div`
    margin: 4px 10px 0;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const CurrentArea = styled.div`
    margin: 4px 10px 0;
    border-bottom: 1px solid black;
`

function TaskView() {
    const user = useSelector((state)=>state.user.value)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let listId = parseInt(useParams().listId) // grab param out of url
    let list = useSelector(state => state.lists.userLists).find(x => x.id === listId)  // find the appropriate list out of all the lists
    const tasks = useSelector(state => state.tasks.userTasks).filter(task => (task.list_id === listId))  // find only the tasks related to this list
    
    const [showModal, setShowModal] = useState(false)  // possible states: false, listNew, listEdit, taskNew, taskEdit
    const [modalEdit, setModalEdit] = useState(false)

    const [showModalCur, setShowModalCur] = useState(false)  // The current task modal
    const [showModalAtt, setShowModalAtt] = useState(false)  // The attention interval modal

    const [timerOn, setTimerOn] = useState(false)  // controls whether the timer is running
    const initialAttTimer = user.interval  // takes the initial attention timer out of the user object
    
 
    
    const [attTimer, setAttTimer] = useState(77)  // count down variable in seconds
    const [taskTimer, setTaskTimer] = useState(33)
    
    useEffect(()=>{
        if (initialAttTimer) setAttTimer(initialAttTimer * 60)
    }, [initialAttTimer])

    useEffect(()=>{
        if (tasks[0]) setTaskTimer(tasks[0].length * 60)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[tasks])          /////////////////////////////////this is preventing the number from counting down
    

    useEffect(()=>{
        let intervalId
        if (timerOn) {
            intervalId = setInterval(() => {
                setAttTimer(attTimer => --attTimer)
                setTaskTimer(taskTimer => --taskTimer )
            }, 1000);
            console.log("taskTimer:", taskTimer )
            if (attTimer <= 0) {
                setAttTimer(initialAttTimer)
                setShowModalAtt(true)
            }
            if (taskTimer <= 0) {
                clearInterval(intervalId);
                setTimerOn(false)
                console.log("finished")
                setShowModalAtt(false)
                setShowModalCur(true)
            }
            return function() { clearInterval(intervalId)} // req'd to prevent runaway counter
        } else {
            clearInterval(intervalId)
        }
    }, [timerOn, attTimer, taskTimer, initialAttTimer])
        
    

    if (!list || !tasks) {
        return(<div>Loading User and List information...</div>)
    } else
    return(
        <Canvas>
            <Header>
                <IconButton onClick={()=>navigate("/")}> <i className="bi bi-chevron-left" style={{fontSize: 25, color: `${blueUI}`}}/><H5B style={{color: `${blueUI}`}}>lists</H5B> </IconButton>
                <H3>{list.name}</H3>
                <div style={{width: 77}}/> 
            </Header>

            <AttentionArea>
                <div>
                    <IconButton onClick={()=> setAttTimer(initialAttTimer) }> <i className="bi bi-arrow-clockwise" style={{fontSize: 25, marginRight: "5px"}}/> </IconButton>
                    <div style={{display: "inline-block"}}>
                        <H6>ATTENTION INTERVAL</H6>
                        <div> <H1 style={{display: "inline"}}> {converter(attTimer).disp }</H1> &ensp; <OutlineButton onClick={()=>setAttTimer(attTimer+60)} style={{position: "relative", top: "-5px"}}> <H5> +1m </H5> </OutlineButton> </div> 
                    </div>
                </div>
                <IconButton onClick={()=>setTimerOn(!timerOn)}> 
                    {timerOn ? "pause" : <i className="bi bi-play-btn" style={{fontSize: 35, marginRight: "5px", color: `${blueUI}`}}/> }   
                </IconButton>
            </AttentionArea>

            <CurrentArea>
                <IconButton onClick={()=>setShowModalCur(true)}> <i className="bi bi-check2-circle" style={{fontSize: 25, marginRight: "5px"}}/> </IconButton>
                <div style={{display: "inline-block"}}>
                    <H6>CURRENT TASK</H6>
                    <H3>{tasks[0].name}</H3> {/* this line is causing an error!! the ".name" is undefined*/}
                    <H1 style={{display: "inline"}}> {converter(taskTimer).disp} </H1> &ensp; <OutlineButton onClick={()=>console.log("Add 1 minute.")} style={{position: "relative", top: "-5px"}}> <H5> +1m </H5> </OutlineButton> 
                </div>
            </CurrentArea>

            <ScrollableList>
                <H6 style={{margin: "4px 42px 0"}}>ALL TASKS</H6>
                {tasks.map((element, index) =>  
                    <ListItem key={`${index} ${element.name}`}> 
                        <IconButton onClick={()=>console.log(`Mark ${element.name} complete.`)}> <i className="bi bi-check-circle" style={{fontSize: 25, color: 'black'}}/>  </IconButton>
                        <RowButton  onClick={()=>console.log(`Go to ${element.name} task.`)}  > 
                            <H3> {element.name} </H3>
                            <H5B> {element.length} min </H5B> 
                            <H6> {element.details} </H6>
                        </RowButton>     
                        <IconButton onClick={()=> {setShowModal("taskEdit"); setModalEdit(element)} }> <i className="bi bi-three-dots-vertical" style={{fontSize: 25, color: 'black'}}/> </IconButton>
                    </ListItem> 
                )}    
            </ScrollableList>
            {showModal ? <ModalAddEdit showModal={showModal} setShowModal={setShowModal} modalEdit={modalEdit} setModalEdit={setModalEdit} /> : null }
            {showModalAtt ? <ModalAttInt setShowModalAtt={setShowModalAtt} /> : null }
            {showModalCur ? <ModalCurTask setShowModalCur={setShowModalCur} /> : null }
             

            <Footer> 
                <IconButton onClick={()=>{setShowModal("taskNew"); setModalEdit(listId)}}> 
                    <i className="bi bi-plus-circle-fill" style={{fontSize: 25, color: `${blueUI}` }} />  
                    <H5B style={{color: `${blueUI}`}}> &nbsp; New Task &emsp; &emsp;</H5B> 
                </IconButton>
                <IconButton onClick={()=>console.log("Reorder tasks.")}> <i className="bi bi-arrow-down-up" style={{fontSize: 25, color: `${blueUI}`}} /> </IconButton> 
            </Footer> 
        </Canvas>
    )
}

export default TaskView;