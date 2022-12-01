import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { H1, H2, H3, H4, H5, H6, H5B, blueUI } from "../style/styled.js";
import { Canvas, Header, ScrollableList, ListItem, Footer, IconButton, RowButton } from "../style/styled.js";

const listArray = [
    "Start", "Work", "Personal", "Home", "Family", "Long Term", "Work", "Personal", 
    "Home", "Family", "Long Term", "Work", "Personal", "Home", "Family", "Long Term", "END"
]

function ListView() {
    const navigate = useNavigate()

    return(
        <Canvas>
            <Header>
                <IconButton onClick={()=>navigate("/settings")}> <i className="bi-list" style={{fontSize: 35, color: 'black'}}></i> </IconButton>
                <H3>Lists</H3>
                <div style={{width: 42}}/> 
            </Header>

            <ScrollableList>
                {listArray.map((element, index) =>  
                    <ListItem key={`${index} ${element}`}> 
                        <RowButton onClick={()=>navigate("/tasks")}> <H3> {element} </H3> </RowButton>     
                        <IconButton onClick={()=>console.log(`Go to ${element} list edit.`)}> <i className="bi bi-three-dots-vertical" style={{fontSize: 25, color: 'black'}}/> </IconButton>
                    </ListItem> 
                )}    
            </ScrollableList>
            
            <Footer> 
                <IconButton onClick={()=>console.log("Create new list.")}> 
                    <i className="bi bi-plus-circle-fill" style={{fontSize: 25, color: `${blueUI}` }} />  
                    <H5B style={{color: `${blueUI}`}}> &nbsp; New List &emsp; &emsp;</H5B> 
                </IconButton> 
            </Footer> 
        </Canvas>
    )
}

export default ListView;