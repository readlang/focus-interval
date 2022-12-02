import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { H1, H2, H3, H4, H5, H6, H5B, blueUI } from "../style/styled.js";
import { Canvas, Header, ScrollableList, ListItem, Footer, IconButton, RowButton } from "../style/styled.js";

function ListView() {
    const navigate = useNavigate()
    const lists = useSelector((state) => state.lists.userLists)

    return(
        <Canvas>
            <Header>
                <IconButton onClick={()=>navigate("/settings")}> <i className="bi-list" style={{fontSize: 35, color: 'black'}}></i> </IconButton>
                <H3>Lists</H3>
                <div style={{width: 42}}/> 
            </Header>

            <ScrollableList>
                {lists.map((element, index) =>  
                    <ListItem key={`${index} ${element.list_name}`}> 
                        <RowButton onClick={()=>navigate(`list/${element.id}/tasks/`)}> <H3> {element.list_name} </H3> </RowButton>     
                        <IconButton onClick={()=>console.log(`Go to ${element.list_name} list edit.`)}> 
                            <i className="bi bi-three-dots-vertical" style={{fontSize: 25, color: 'black'}}/> 
                        </IconButton>
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