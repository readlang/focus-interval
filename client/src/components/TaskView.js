import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { H1, H2, H3, H4, H5, H6, H5B, blueUI } from "../style/styled.js";
import { Canvas, Header, ScrollableList, ListItem, Footer, IconButton, OutlineButton, RowButton } from "../style/styled.js";

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

const taskArray = ["Take out trash", "Write that email", "Plan roadmap", "prepare mockup"]

function TaskView() {
    const navigate = useNavigate()

    return(
        <Canvas>
            <Header>
                <IconButton onClick={()=>navigate("/lists")}> <i className="bi bi-chevron-left" style={{fontSize: 25, color: `${blueUI}`}}/><H5B style={{color: `${blueUI}`}}>lists</H5B> </IconButton>
                <H3>Tasks</H3>
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
                {taskArray.map((element, index) =>  
                    <ListItem key={`${index} ${element}`}> 
                        <IconButton onClick={()=>console.log(`Mark ${element} complete.`)}> <i className="bi bi-check-circle" style={{fontSize: 25, color: 'black'}}/>  </IconButton>
                        <RowButton  onClick={()=>console.log(`Go to ${element} task.`)}  > 
                            <H3> {element} </H3>
                            <H5B> 10:00 </H5B> 
                            <H6>This is the area the notes go.  These are notes...</H6>
                        </RowButton>     
                        <IconButton onClick={()=>console.log(`Go to ${element} task edit.`)}> <i className="bi bi-three-dots-vertical" style={{fontSize: 25, color: 'black'}}/> </IconButton>
                    </ListItem> 
                )}    
            </ScrollableList>

            <Footer> 
                <IconButton onClick={()=>console.log("Create new task.")}> 
                    <i className="bi bi-plus-circle-fill" style={{fontSize: 25, color: `${blueUI}` }} />  
                    <H5B style={{color: `${blueUI}`}}> &nbsp; New Task &emsp; &emsp;</H5B> 
                </IconButton>
                <IconButton onClick={()=>console.log("Reorder tasks.")}> <i className="bi bi-arrow-down-up" style={{fontSize: 25, color: `${blueUI}`}} /> </IconButton> 
            </Footer> 
        </Canvas>
    )
}

export default TaskView;