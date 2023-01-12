import { useState } from "react";
import styled from "styled-components";
import { IconButton, H5B } from "../style/styled.js";

const ContainingBlock = styled.div`
    // required for absolute to work correctly below
    position: relative;
`
const Background = styled.div`
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.2); /* Black w/ opacity */
`
const FloatingDelete = styled.button`
    position: absolute;
    top: 22px;
    right: 2px;
    z-index: 2;
    padding: 1px;
    width: 145px;
    height: 30px;
    border: 1.5px solid red;
    background-color: white;
    border-radius: 10px 3px 10px 10px;
`

function DeleteConfirm({deleteItem}) {
    const [showConf, setShowConf] = useState(false);

    return(
        <ContainingBlock>
            <IconButton onClick={()=>setShowConf(true) } > <H5B style={{color: "red"}}>Delete</H5B>  </IconButton>
            {showConf ? 
                <>
                    <Background onClick={()=>setShowConf(false)}/>
                    <FloatingDelete onClick={deleteItem}>
                        <H5B style={{color: "red", fontWeight: "bold" }}>Confirm Delete?</H5B>
                    </FloatingDelete> 
                </>
            : null} 
        </ContainingBlock>
    )
}

export default DeleteConfirm;