import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { H1, H2, H3, H4, H5, H6, H5B, blueUI } from "../style/styled.js";
import { Canvas, Header, ScrollableList, ListItem, Footer, IconButton, OutlineButton, RowButton } from "../style/styled.js";

const BubbleGroup = styled.div`
    margin: 25px 10px;
    padding: 0 20px;
    background-color: hsl(0, 0%, 95%);
    border-radius: 10px;
`
const BubbleItem = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const BubbleLine = styled.div`
    height: 1px;
    border-bottom: 1px solid gray;
`
const ButtonRed = styled.button`
    height: 35px;
    width: 100px;
    border: 1px solid hsl(11, 100%, 50%);
    border-radius: 8px;
    background-color: white;
`

function Settings() {
    const navigate = useNavigate()

    return(
        <Canvas>
            <Header>
                <OutlineButton onClick={()=>navigate("/")}> <i className="bi bi-x-lg" style={{fontSize: 20, color: "black"}}/> </OutlineButton>
                <H3>Settings</H3>
                <div style={{width: 35}}/> 
            </Header>

            <ScrollableList>
                <BubbleGroup>
                    <BubbleItem> <H5B>Default Attention Interval</H5B> <H3>5:00</H3></BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Attention Interval Alarm</H5B> 
                        <IconButton onClick={()=>console.log(`Mark complete.`)}> <i className="bi bi-check-circle" style={{fontSize: 25, color: 'black'}}/> </IconButton> 
                    </BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Pause Timer Amount</H5B> <H3>1:00</H3></BubbleItem>
                </BubbleGroup>

                <BubbleGroup>
                    <BubbleItem> <H5B>Default Task Timer</H5B> <H3>30:00</H3></BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Current Task Alarm</H5B> 
                        <IconButton onClick={()=>console.log(`Mark complete.`)}> <i className="bi bi-check-circle" style={{fontSize: 25, color: 'black'}}/> </IconButton> 
                    </BubbleItem>
                </BubbleGroup>

                <BubbleGroup>
                    <BubbleItem> <H5B>A Lot More Time</H5B> <H3>30:00</H3></BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>A Little More Time</H5B> <H3>5:00</H3></BubbleItem>
                </BubbleGroup>

                <BubbleGroup>
                    <BubbleItem> <H5B>Signed In As</H5B> <H3>RolandB</H3></BubbleItem>
                    <BubbleLine/>
                    <BubbleItem style={{justifyContent: "center"}}> <ButtonRed><H5B style={{color: "hsl(11, 100%, 50%)"}} >Sign Out</H5B></ButtonRed> </BubbleItem>
                </BubbleGroup>

                <H5 style={{margin: "30px 10px", textAlign: "center" }}>App crafted with care in Seattle by Read Langworthy.</H5>

                <BubbleGroup>
                    <BubbleItem> <H5B>Signed In As</H5B> <form> <input style={{fontSize: 20, fontWeight: "bold", width: "100px", backgroundColor: "rgba(0, 0, 0, 0", border: "0 solid black"}} type="text" defaultValue={"RolandB"}></input></form></BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Default Timer</H5B> <form> <input type="number" pattern="\d*" defaultValue={"30"}></input></form></BubbleItem>
                    <BubbleLine/>
                    <BubbleItem> <H5B>Alarm On</H5B> <form> <input type="checkbox" style={{fontSize: "30px"}}></input></form> </BubbleItem>
                </BubbleGroup>
                
                
            </ScrollableList>
        </Canvas>
    )
}

export default Settings;