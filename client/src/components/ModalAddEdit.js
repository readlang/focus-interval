import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { H1, H2, H3, H4, H5, H6, H5B, blueUI } from "../style/styled.js";
import { Canvas, Header, ScrollableList, ListItem, Footer, IconButton, OutlineButton, RowButton } from "../style/styled.js";
import { BubbleGroup, BubbleItem, BubbleLine, ButtonRed, InputStyled } from "../style/styled.js";

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
    const [name, setName] = useState(modalEdit.list_name ? modalEdit.list_name : "")
    const [timer, setTimer] = useState(modalEdit.length ? modalEdit.length : "")
    const [details, setDetails] = useState(modalEdit.details ? modalEdit.details : "")

    // useEffect(()=> {
    //     modalEdit.list_name ? name = modalEdit.list_name : null

    // }, [])

    function save() {
        console.log("save")
        setShowModal(false)
    }

    return(
        <Background onClick={()=>setShowModal(false)}>
            <Window onClick={(e)=>e.stopPropagation()}>
                <div style={{display: "flex", justifyContent: "space-between", margin: "0 10px"}}>
                    <IconButton onClick={()=>setShowModal(false)}><H5B style={{color: blueUI}}>Cancel</H5B></IconButton>
                    <H3>{showModal.slice(0,4) === "task" ? "Edit Task" : "Edit List"}</H3>
                    <IconButton onClick={save}><H5B style={{color: blueUI, fontWeight: "bold"}}>Save</H5B></IconButton>
                </div>
                {showModal.slice(0,4) === "task" ? 
                <BubbleGroup>
                    <BubbleItem> <H5B>Name</H5B> <InputStyled type="text" defaultValue={"New Task"} style={{width: "200px"}} /> </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Task Timer</H5B> <div> <InputStyled type="number" pattern="\d*" defaultValue={"15"}/> <span>min</span> </div> </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Details&nbsp;</H5B> <InputStyled type="text" placeholder="optional notes..." style={{width: "100%", fontSize: "16px", fontWeight: "bold"}} />  </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem style={{justifyContent: "center"}}> <ButtonRed><H5B style={{color: "hsl(11, 100%, 50%)"}} >&emsp;Delete Task&emsp;</H5B></ButtonRed> </BubbleItem>
                </BubbleGroup>
                : 
                <BubbleGroup>
                    <BubbleItem> <H5B>List Name</H5B> <InputStyled type="text" defaultValue={"New List"} style={{width: "200px"}} /> </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Details&nbsp;</H5B> <InputStyled type="text" placeholder="optional notes..." style={{width: "100%", fontSize: "16px", fontWeight: "bold"}} />  </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem style={{justifyContent: "center"}}> <ButtonRed><H5B style={{color: "hsl(11, 100%, 50%)"}} >&emsp;Delete List&emsp;</H5B></ButtonRed> </BubbleItem>
                </BubbleGroup>
                }
            </Window>
        </Background>
    )
}

export default ModalAddEdit;