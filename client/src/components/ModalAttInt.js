import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { H1, H2, H3, H4, H5, H6, H5B, blueUI } from "../style/styled.js";
import { Canvas, Header, ScrollableList, ListItem, Footer, IconButton, OutlineButton, RowButton } from "../style/styled.js";
import { BubbleGroup, BubbleItem, BubbleLine, ButtonRed, InputStyled } from "../style/styled.js";
import { createTask, editTask, deleteTask } from "../slices/tasksSlice";
import { createList, editList, deleteList } from "../slices/listsSlice";
import chime_high from "../assets/chime_interval_high.mp3";

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

function ModalAttInt({setShowModalAtt, modalEdit, setModalEdit}) {
    const dispatch = useDispatch()
    const user = useSelector((state)=>state.user.value)

    function playsound () {
        let audio = new Audio(chime_high)
        audio.play()
    }

    playsound()

    return(
        <Background onClick={()=>setShowModalAtt(false)}>
            <Window onClick={(e)=>e.stopPropagation()}>
                <div style={{display: "flex", justifyContent: "space-between", margin: "0 10px"}}>
                    &emsp;&emsp;&emsp;
                    <H3>Attention Interval Complete</H3> 
                    <IconButton onClick={()=>setShowModalAtt(false)}><i className="bi bi-x-lg" style={{fontSize: 25, marginRight: "-5px", backgroundColor: "hsl(11, 0%, 85%)", borderRadius: "20px", height: "35px", width: "35px"}}/></IconButton>
                </div>

                <BubbleGroup>
                    <br/><br/>
                    <H3>ARE YOU CURRENTLY FOCUSED?</H3>
                    <br/>
                    <ButtonBig inputColor="hsl(191, 100%, 81%)"><H2>Yes</H2><H4>I'm totally focused</H4> <H5> Lengthen Interval</H5> </ButtonBig>
                    <ButtonBig inputColor="hsl(50, 100%, 65%)"><H2>Kinda</H2><H4>Distracted but recovered</H4> </ButtonBig>
                    <ButtonBig inputColor="hsl(0, 100%, 75%)"><H2>No</H2><H4>I'm totally distracted</H4> <H5> Shorten Interval</H5>  </ButtonBig>
                    <br/><br/>
                </BubbleGroup>
                
            </Window>
        </Background>
    )
}

export default ModalAttInt;