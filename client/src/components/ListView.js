import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { H1, H2, H3, H4, H5, H6, H5B } from "../style/styled.js";

const Canvas = styled.div`
    height: 100vh;
    display: flex;
    flex-flow: column;
`
const Header = styled.div`
    flex: 0 0 65px;
    margin: 0 10px;
    border-bottom: 2px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ScrollableList = styled.div`
    flex: 1 1 auto;
    margin: 0 0 0 10px;
    overflow-y: scroll;
`
const ListItem = styled.div`
    border-bottom: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Footer = styled.div`
    flex: 0 0 40px;
    padding: 0 10px;
    background-color: hsl(100, 0%, 90%);
    border-top: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const IconButton = styled.button`
    border: 0px;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
`
const RowButton = styled.button`
    width: 100%;
    height: 49px;
    border: 0px;
    background-color: rgba(0, 0, 0, 0);
    text-align: left;
`

const listArray = [
    "Start", "Work", "Personal", "Home", "Family", "Long Term", "Work", "Personal", 
    "Home", "Family", "Long Term", "Work", "Personal", "Home", "Family", "Long Term", "END"
]

function ListView() {
    return(
        <Canvas>
            <Header>
                <IconButton onClick={()=>console.log("Go to settings.")}> <i className="bi-list" style={{fontSize: 35, color: 'black'}}></i> </IconButton>
                <H3>Lists</H3>
                <div style={{width: 42}}/> 
            </Header>
            <ScrollableList>
                {listArray.map(x =>  
                    <ListItem > 
                        <RowButton onClick={()=>console.log(`Go to ${x} list.`)}> <H3> {x} </H3> </RowButton>     
                        <IconButton onClick={()=>console.log(`Go to ${x} list edit.`)}> <i className="bi bi-three-dots-vertical" style={{fontSize: 25, color: 'black'}}/> </IconButton>
                    </ListItem> 
                )}    
            </ScrollableList>
            <Footer> 
                <IconButton onClick={()=>console.log("Create new list.")}> 
                    <i className="bi bi-plus-circle-fill" style={{fontSize: 20, color: "hsl(216, 80%, 60%)" }} />  
                    <H5B style={{color: "hsl(216, 80%, 60%)"}}> &nbsp; New List &emsp; &emsp;</H5B> 
                </IconButton> 
            </Footer> 
        </Canvas>
    )
}

export default ListView;