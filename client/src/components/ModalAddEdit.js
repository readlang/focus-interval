import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { H1, H2, H3, H4, H5, H6, H5B, blueUI } from "../style/styled.js";
import { Canvas, Header, ScrollableList, ListItem, Footer, IconButton, OutlineButton, RowButton } from "../style/styled.js";
import { BubbleGroup, BubbleItem, BubbleLine, ButtonRed, InputStyled } from "../style/styled.js";
import { createTask, editTask, deleteTask } from "../slices/tasksSlice";
import { createList, editList, deleteList } from "../slices/listsSlice";

const Background = styled.div`
    display: flex; 
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.6); /* Black w/ opacity */
`
const Window = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px 10px;
    border: 1px solid #888;
    width: 95%;
    border-radius: 10px;
`

function ModalAddEdit({showModal, setShowModal, modalEdit, setModalEdit}) {
    const dispatch = useDispatch()
    const user = useSelector((state)=>state.user.value)

    const [name, setName] = useState(modalEdit.name ? modalEdit.name : "")
    const [timer, setTimer] = useState(modalEdit.length ? modalEdit.length : "15")
    const [details, setDetails] = useState(modalEdit.details ? modalEdit.details : "")



    function save() {
        console.log("save")
        switch (showModal) {
            case "listNew":
                dispatch(createList(user.id, name, details))
                break;
            case "listEdit":
                dispatch(editList(modalEdit.id, name, details))     
                break;
            case "taskNew":
                dispatch(createTask(modalEdit, name, details, timer, "incomplete"))
                break;
            case "taskEdit":
                dispatch(editTask( modalEdit.id, modalEdit.list_id, name, details, timer, "incomplete" ))
                break;
            default:
                console.log("error: none saved")
            break;
        }
        setShowModal(false)
    }

    function deleteItem() {
        console.log("delete")
        setShowModal(false)
    }

    return(
        <Background onClick={()=>setShowModal(false)}>
            <Window onClick={(e)=>e.stopPropagation()}>
                <div style={{display: "flex", justifyContent: "space-between", margin: "0 10px"}}>
                    <IconButton onClick={()=>setShowModal(false)}><H5B style={{color: blueUI}}>Cancel</H5B></IconButton>
                    <H3>{showModal.slice(0,4) === "task" ? "Edit Task" : "Edit List"}</H3>   {/* doesn't seem to be working here */}
                    <IconButton onClick={save}><H5B style={{color: blueUI, fontWeight: "bold"}}>Save</H5B></IconButton>
                </div>
                {showModal.slice(0,4) === "task" ? 
                <BubbleGroup>
                    <BubbleItem> <H5B>Name&nbsp;</H5B> <InputStyled type="text" placeholder="New Task" style={{width: "100%"}} 
                        value={name} onChange={e=>setName(e.target.value)} /> </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Task Timer</H5B> <div> <InputStyled type="number" pattern="\d*"  
                        value={timer} onChange={e=>setTimer(e.target.value)} /> <span>min</span> </div> </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Details&nbsp;</H5B> <InputStyled type="text" placeholder="optional notes..." style={{width: "100%", fontSize: "16px", fontWeight: "bold"}} 
                        value={details} onChange={e=>setDetails(e.target.value)} />  </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem style={{justifyContent: "center"}}> <ButtonRed onClick={deleteItem}><H5B style={{color: "hsl(11, 100%, 50%)"}} >&emsp;Delete Task&emsp;</H5B></ButtonRed> </BubbleItem>
                </BubbleGroup>
                : 
                <>
                    <BubbleGroup>
                        <BubbleItem> <H5B>List Name</H5B> <InputStyled type="text" placeholder="New List" style={{width: "200px"}} 
                            value={name} onChange={e=>setName(e.target.value)} /> </BubbleItem>
                        <BubbleLine/>
                        <BubbleItem> <H5B>Details&nbsp;</H5B> <InputStyled type="text" placeholder="optional notes..." style={{width: "100%", fontSize: "16px", fontWeight: "bold"}} 
                            value={details} onChange={e=>setDetails(e.target.value)} />  </BubbleItem>
                        <BubbleLine/>
                        <BubbleItem style={{justifyContent: "center"}}> 
                           <ButtonRed style={{borderColor: blueUI}} ><H5B style={{color: blueUI }} > &emsp;Save List&emsp;</H5B></ButtonRed>  
                        </BubbleItem>
                    </BubbleGroup>
                    <BubbleGroup style={{width: "230px", margin: "25px auto"}}>
                        <BubbleItem style={{justifyContent: "center"}}> 
                            <H5B > Delete List & Tasks&ensp;</H5B>
                            <ButtonRed style={{height:"40px", width: "40px", borderRadius: "20px"}}>
                                <i className="bi bi-trash3" style={{fontSize: 20, color: "red"}}/>
                            </ButtonRed>
                        </BubbleItem>
                    </BubbleGroup>
                </>
                }
            </Window>
        </Background>
    )
}

export default ModalAddEdit;