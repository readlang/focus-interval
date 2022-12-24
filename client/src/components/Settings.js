import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { H1, H2, H3, H4, H5, H6, H5B, blueUI } from "../style/styled.js";
import { Canvas, Header, ScrollableList, ListItem, Footer, IconButton, OutlineButton, RowButton } from "../style/styled.js";
import { BubbleGroup, BubbleItem, BubbleLine, ButtonRed, InputStyled } from "../style/styled.js";
import { userEdit, userLogOut } from "../slices/userSlice.js";

function Settings() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user.value)

    let prefs = JSON.parse(user.preferences)
    if (prefs === "") {
        prefs = {
            attAlarm: true,
            attCheckIn: true,
            pauseTime: 1,
            taskTimer: 30,
            taskAlarm: true,
            taskCheckIn: true,
            aLotTimer: 30,
            aLittleTimer: 10
        }
    }

    const [attTimer, setAttTimer] = useState( user.interval ) 
    const [attAlarm, setAttAlarm] = useState(prefs.attAlarm)
    const [attCheckIn, setAttCheckIn] = useState(prefs.attCheckIn)
    const [pauseTime, setPauseTime] = useState(prefs.pauseTime)

    const [taskTimer, setTaskTimer] = useState(prefs.taskTimer)
    const [taskAlarm, setTaskAlarm] = useState(prefs.taskAlarm)
    const [taskCheckIn, setTaskCheckIn] = useState(prefs.taskCheckIn)
    const [aLotTimer, setALotTimer] = useState(prefs.aLotTimer)
    const [aLittleTimer, setALittleTimer] = useState(prefs.aLittleTimer)

    function saveClose() {
        const savePrefs = {
            attAlarm: attAlarm,
            attCheckIn: attCheckIn,
            pauseTime: pauseTime,
            taskTimer: taskTimer,
            taskAlarm: taskAlarm,
            taskCheckIn: taskCheckIn,
            aLotTimer: aLotTimer,
            aLittleTimer: aLittleTimer
        }
        dispatch(userEdit(user.email, attTimer, JSON.stringify(savePrefs) ))
        navigate("/")
    }

    return(
        <Canvas>
            <Header>
                <OutlineButton style={{border: "0px"}} onClick={()=>saveClose()}> <i className="bi bi-x-circle" style={{fontSize: 34, color: "black"}}/> </OutlineButton>
                <H3>Settings</H3>
                <div style={{width: 35}}/> 
            </Header>

            <ScrollableList>
                <BubbleGroup>
                    <BubbleItem style={{justifyContent: "center"}}> <H5B>Attention Interval Timer</H5B> </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Timer Amount</H5B> 
                        <div> <InputStyled value={attTimer} onChange={e=>setAttTimer(e.target.value)} type="number" pattern="\d*" /> <span>min</span> </div> 
                    </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Alarm Chime </H5B> <input type="checkbox" checked={attAlarm} onChange={e=>setAttAlarm(e.target.checked)}  style={{transform: "scale(1.5)", margin: "0 20px"}}/> </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Focus Check-In </H5B> <input checked={attCheckIn} onChange={e=>setAttCheckIn(e.target.checked)} type="checkbox" style={{transform: "scale(1.5)", margin: "0 20px"}}/> </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Pause Timer Amount</H5B> <div> <InputStyled value={pauseTime} onChange={e=>setPauseTime(e.target.value)} type="number" pattern="\d*" /> <span>min</span> </div> </BubbleItem>
                </BubbleGroup>

                <BubbleGroup>
                    <BubbleItem style={{justifyContent: "center"}}> <H5B>Current Task Timer</H5B> </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Default Task Timer</H5B> <div> <InputStyled value={taskTimer} onChange={e=>setTaskTimer(e.target.value)} type="number" pattern="\d*" /> <span>min</span> </div>  </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Alarm Chime </H5B> <input checked={taskAlarm} onChange={e=>setTaskAlarm(e.target.checked)} type="checkbox" style={{transform: "scale(1.5)", margin: "0 20px"}}/> </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Task Check-In</H5B> <input checked={taskCheckIn} onChange={e=>setTaskCheckIn(e.target.checked)} type="checkbox" style={{transform: "scale(1.5)", margin: "0 20px"}}/> </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>"A Lot More Time" Amount</H5B> <div> <InputStyled value={aLotTimer} onChange={e=>setALotTimer(e.target.value)} type="number" pattern="\d*" /> <span>min</span> </div> </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>"A Little More Time" Amount</H5B> <div> <InputStyled value={aLittleTimer} onChange={e=>setALittleTimer(e.target.value)} type="number" pattern="\d*" /> <span>min</span> </div> </BubbleItem>
                </BubbleGroup>

                <BubbleGroup>
                    <BubbleItem> <H5B>Signed In As</H5B> <H3>{user.username}</H3></BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Email</H5B> <H3>{user.email}</H3></BubbleItem>
                    <BubbleLine/>
                    <BubbleItem style={{justifyContent: "center"}}> <ButtonRed onClick={()=>dispatch(userLogOut())} ><H5B style={{color: "hsl(11, 100%, 50%)"}} >Sign Out</H5B></ButtonRed> </BubbleItem>
                </BubbleGroup>

                <H5 style={{margin: "30px 10px", textAlign: "center" }}>App crafted with care by Read Langworthy.</H5>                
            </ScrollableList>
        </Canvas>
    )
}

export default Settings;