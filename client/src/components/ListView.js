import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { H1, H2, H3, H4, H5, H6, H5B } from "../style/styled.js";

const Header = styled.div`
    position: sticky;
    top: 0px;
    background-color: white;
    /* width: 100%; */
    margin: 0 10px;
    height: 65px;
    border-bottom: 2px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ScrollableList = styled.div`
    margin: 0 10px;
    /* height: 400px; */
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`
const ListItem = styled.div`
    height: 50px;
    border-bottom: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const BottomDiv = styled.div`
    position: fixed;
    bottom: 0px;
    height: 40px;
    width: 100%;
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
    height: 100%;
    border: 0px;
    background-color: rgba(0, 0, 0, 0);
    text-align: left;
`


const listArray = ["Work", "Personal", "Home", "Family", "Long Term", "Work", "Personal", "Home", "Family", "Long Term", "Work", "Personal", "Home", "Family", "Long Term"]

function ListView() {
    return(
        <>
            <Header>
                <IconButton> <i class="bi-list" style={{fontSize: 35, color: 'black'}}></i> </IconButton>
                <H3>Lists</H3>
                <div style={{width: 42}}/> 
            </Header>
            <ScrollableList>
                {listArray.map(x =>  
                    <ListItem> 
                        <RowButton> <H3> {x} </H3> </RowButton>     
                        <IconButton> <i class="bi bi-three-dots-vertical" style={{fontSize: 25, color: 'black'}}/> </IconButton>
                    </ListItem> 
                )}    
            </ScrollableList>
            <BottomDiv> 
                <IconButton> 
                    <i class="bi bi-plus-circle-fill" style={{fontSize: 20, color: "hsl(216, 80%, 60%)" }} />  
                    <H5B style={{color: "hsl(216, 80%, 60%)"}}> &nbsp; New List </H5B> 
                </IconButton> 
            </BottomDiv> 
        </>
    )
}

export default ListView;