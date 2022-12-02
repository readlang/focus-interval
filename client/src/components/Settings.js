import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { H1, H2, H3, H4, H5, H6, H5B, blueUI } from "../style/styled.js";
import { Canvas, Header, ScrollableList, ListItem, Footer, IconButton, OutlineButton, RowButton } from "../style/styled.js";
import { BubbleGroup, BubbleItem, BubbleLine, ButtonRed, InputStyled } from "../style/styled.js";

function Settings() {
    const navigate = useNavigate()
    const [aiTimer, setAiTimer] = useState(15)
    const [aiAlarm, setAiAlarm] = useState(true)
    const [pause, setPause] = useState(1)
    const [taskTimer, setTaskTimer] = useState(30)
    const [taskAlarm, setTaskAlarm] = useState(true)
    const [lotMore, setLotMore] = useState(30)
    const [littleMore, setLittleMore] = useState(15)

    return(
        <Canvas>
            <Header>
                <OutlineButton onClick={()=>navigate("/")}> <i className="bi bi-x-lg" style={{fontSize: 20, color: "black"}}/> </OutlineButton>
                <H3>Settings</H3>
                <div style={{width: 35}}/> 
            </Header>

            <ScrollableList>
                <BubbleGroup>
                    <BubbleItem> <H5B>Default Attention Interval</H5B> <div> <InputStyled type="number" pattern="\d*" defaultValue={"15"}/> <span>min</span> </div> </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Attention Interval Alarm</H5B> <input type="checkbox" style={{transform: "scale(1.5)", margin: "0 20px"}}/> </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Pause Timer Amount</H5B> <div> <InputStyled type="number" pattern="\d*" defaultValue={"1"}/> <span>min</span> </div> </BubbleItem>
                </BubbleGroup>

                <BubbleGroup>
                    <BubbleItem> <H5B>Default Task Timer</H5B> <div> <InputStyled type="number" pattern="\d*" defaultValue={"30"}/> <span>min</span> </div>  </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Current Task Alarm</H5B> <input type="checkbox" style={{transform: "scale(1.5)", margin: "0 20px"}}/> </BubbleItem>
                </BubbleGroup>

                <BubbleGroup>
                    <BubbleItem> <H5B>A Lot More Time</H5B> <div> <InputStyled type="number" pattern="\d*" defaultValue={"30"}/> <span>min</span> </div> </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>A Little More Time</H5B> <div> <InputStyled type="number" pattern="\d*" defaultValue={"15"}/> <span>min</span> </div> </BubbleItem>
                </BubbleGroup>

                <BubbleGroup>
                    <BubbleItem> <H5B>Signed In As</H5B> <H3>RolandB</H3></BubbleItem>
                    <BubbleLine/>
                    <BubbleItem style={{justifyContent: "center"}}> <ButtonRed><H5B style={{color: "hsl(11, 100%, 50%)"}} >Sign Out</H5B></ButtonRed> </BubbleItem>
                </BubbleGroup>

                <H5 style={{margin: "30px 10px", textAlign: "center" }}>App crafted with care in Seattle by Read Langworthy.</H5>                
            </ScrollableList>
        </Canvas>
    )
}

export default Settings;