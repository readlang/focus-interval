import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { H1, H2, H3, H4, H5, H6, H5B, blueUI } from "../style/styled.js";
import { Canvas, Header, ScrollableList, ListItem, Footer, IconButton, OutlineButton, RowButton } from "../style/styled.js";
import Modal from "./Modal.js";

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
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let listId = parseInt(useParams().listId) // grab param out of url
    let list = useSelector(state => state.lists.userLists).find(x => x.id === listId)  // find the appropriate list out of all the lists
    console.log(list)
    const tasks = useSelector(state => state.tasks.userTasks).filter(task => (task.list_id === listId))  // find only the tasks related to this list
    console.log(tasks)
    const [showModal, setShowModal] = useState(false)

    if (!list) {
        return(<div>Loading User and List information...</div>)
    } else
    return(
        <Canvas>
            <Header>
                <IconButton onClick={()=>navigate("/")}> <i className="bi bi-chevron-left" style={{fontSize: 25, color: `${blueUI}`}}/><H5B style={{color: `${blueUI}`}}>lists</H5B> </IconButton>
                <H3>{list.list_name}</H3>
                <div style={{width: 77}}/> 
            </Header>

            <AttentionArea>
                <div>
                    <IconButton onClick={()=>console.log("Restart timer.")}> <i className="bi bi-arrow-clockwise" style={{fontSize: 25, marginRight: "5px"}}/> </IconButton>
                    <div style={{display: "inline-block"}}>
                        <H6>ATTENTION INTERVAL</H6>
                        <div> <H1 style={{display: "inline"}}> 3:24</H1> &ensp; <OutlineButton onClick={()=>console.log("Add 1 minute.")} style={{position: "relative", top: "-5px"}}> <H5> +1m </H5> </OutlineButton> </div> 
                    </div>
                </div>
                <IconButton onClick={()=>console.log("Start Timer.")}> <i className="bi bi-play-btn" style={{fontSize: 35, marginRight: "5px", color: `${blueUI}`}}/> </IconButton>
            </AttentionArea>

            <CurrentArea>
                <IconButton onClick={()=>console.log("Mark as complete.")}> <i className="bi bi-check2-circle" style={{fontSize: 25, marginRight: "5px"}}/> </IconButton>
                <div style={{display: "inline-block"}}>
                    <H6>CURRENT TASK</H6>
                    <H3>Roadmap update</H3>
                    <H1 style={{display: "inline"}}>27:15</H1> &ensp; <OutlineButton onClick={()=>console.log("Add 1 minute.")} style={{position: "relative", top: "-5px"}}> <H5> +1m </H5> </OutlineButton> 
                </div>
            </CurrentArea>

            <ScrollableList>
                {tasks.map((element, index) =>  
                    <ListItem key={`${index} ${element.name}`}> 
                        <IconButton onClick={()=>console.log(`Mark ${element.name} complete.`)}> <i className="bi bi-check-circle" style={{fontSize: 25, color: 'black'}}/>  </IconButton>
                        <RowButton  onClick={()=>console.log(`Go to ${element.name} task.`)}  > 
                            <H3> {element.name} </H3>
                            <H5B> {element.length} min </H5B> 
                            <H6>This is the area the notes go.  These are notes...</H6>
                        </RowButton>     
                        <IconButton onClick={()=>console.log(`Go to ${element.name} task edit.`)}> <i className="bi bi-three-dots-vertical" style={{fontSize: 25, color: 'black'}}/> </IconButton>
                    </ListItem> 
                )}    
            </ScrollableList>
            {showModal ? <Modal setShowModal={setShowModal}/> : null }
             

            <Footer> 
                <IconButton onClick={()=>setShowModal(true)}> 
                    <i className="bi bi-plus-circle-fill" style={{fontSize: 25, color: `${blueUI}` }} />  
                    <H5B style={{color: `${blueUI}`}}> &nbsp; New Task &emsp; &emsp;</H5B> 
                </IconButton>
                <IconButton onClick={()=>console.log("Reorder tasks.")}> <i className="bi bi-arrow-down-up" style={{fontSize: 25, color: `${blueUI}`}} /> </IconButton> 
            </Footer> 
        </Canvas>
    )
}

export default TaskView;