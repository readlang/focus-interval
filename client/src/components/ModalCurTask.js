import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { H1, H2, H3, H4, H5, H6, H5B, blueUI } from "../style/styled.js";
import { Canvas, Header, ScrollableList, ListItem, Footer, IconButton, OutlineButton, RowButton } from "../style/styled.js";
import { BubbleGroup, BubbleItem, BubbleLine, ButtonRed, InputStyled } from "../style/styled.js";
import { createTask, editTask, deleteTask } from "../slices/tasksSlice";
import { createList, editList, deleteList } from "../slices/listsSlice";
import chime_low from "../assets/chime_task_low.mp3";

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
    text-align: center;
`
const ButtonBig = styled.button`
    border: 0px;
    border-radius: 8px;
    width: 100%;
    height: 90px;
    background-color: ${props => props.inputColor || "magenta"};
    margin: 7px;
    padding: 4px;
`

function ModalCurTask({setShowModalCur, modalEdit, setModalEdit}) {
    const dispatch = useDispatch()
    const user = useSelector((state)=>state.user.value)

    function playsound () {
        let audio = new Audio(chime_low)
        audio.loop = false;
        audio.play()
    }

    playsound()

    return(
        <Background onClick={()=>setShowModalCur(false)}>
            <Window onClick={(e)=>e.stopPropagation()}>
                <div style={{display: "flex", justifyContent: "space-between", margin: "0 10px"}}>
                    &emsp;&emsp;&emsp;
                    <H3>Task Timer Complete</H3> 
                    <IconButton onClick={()=>setShowModalCur(false)}><i className="bi bi-x-lg" style={{fontSize: 25, marginRight: "-5px", backgroundColor: "hsl(11, 0%, 85%)", borderRadius: "20px", height: "35px", width: "35px"}}/></IconButton>
                </div>

                <BubbleGroup>
                    <br/><br/>
                    <H3>READY TO MOVE ON?</H3>
                    <br/>
                    <ButtonBig inputColor="hsl(191, 100%, 81%)"><H2>Yes</H2><H4>Current Task Complete</H4> <H5> Move to next task</H5> </ButtonBig>
                    <ButtonBig inputColor="hsl(150, 100%, 87%)"><H2>Yes, But</H2><H4>Current Task Not Complete</H4> <H5> Move to next task</H5> </ButtonBig>
                    <ButtonBig inputColor="hsl(85, 100%, 75%)"><H2>Almost</H2><H4>Need A Little More Time</H4> <H5> stay on current</H5> </ButtonBig>
                    <ButtonBig inputColor="hsl(50, 100%, 65%)"><H2>No</H2><H4>Need A Lot More Time</H4> <H5> stay on current</H5></ButtonBig>
                    <ButtonBig inputColor="hsl(0, 100%, 75%)"><H2>Help</H2><H4>I'm totally distracted</H4> <H5> take a moment</H5>  </ButtonBig>
                    <br/><br/>
                </BubbleGroup>
                
            </Window>
        </Background>
    )
}

export default ModalCurTask;