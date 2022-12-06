import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { H1, H2, H3, H4, H5, H6, H5B, blueUI } from "../style/styled.js";
import { Canvas, Header, ScrollableList, ListItem, Footer, IconButton, RowButton } from "../style/styled.js";
import ModalAddEdit from "./ModalAddEdit";

function ListView() {
    const navigate = useNavigate()
    const lists = useSelector((state) => state.lists.userLists)
    const [showModal, setShowModal] = useState(false)  // possible states: false, listNew, listEdit, taskNew, taskEdit
    const [modalEdit, setModalEdit] = useState(false)

    return(
        <Canvas>
            <Header>
                <IconButton onClick={()=>navigate("/settings")}> <i className="bi-list" style={{fontSize: 35, color: 'black'}}></i> </IconButton>
                <H3>Lists</H3>
                <div style={{width: 42}}/> 
            </Header>

            <ScrollableList>
                {lists.map((element, index) =>  
                    <ListItem key={`${index} ${element.name}`}> 
                        <RowButton onClick={()=>navigate(`list/${element.id}/tasks/`)}> <H3> {element.name} </H3> 
                            <H6>{element.details}</H6>
                        </RowButton>     
                        <IconButton onClick={()=>{setShowModal("listEdit"); setModalEdit(element)} }> 
                            <i className="bi bi-three-dots-vertical" style={{fontSize: 25, color: 'black'}}/> 
                        </IconButton>
                    </ListItem> 
                )}    
            </ScrollableList>
            {showModal ? <ModalAddEdit showModal={showModal} setShowModal={setShowModal} modalEdit={modalEdit} setModalEdit={setModalEdit} /> : null }
            
            <Footer> 
                <IconButton onClick={()=>{setShowModal("listNew"); setModalEdit(false)}}> 
                    <i className="bi bi-plus-circle-fill" style={{fontSize: 25, color: `${blueUI}` }} />  
                    <H5B style={{color: `${blueUI}`}}> &nbsp; New List &emsp; &emsp;</H5B> 
                </IconButton> 
            </Footer> 
        </Canvas>
    )
}

export default ListView;