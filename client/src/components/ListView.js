import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { H1, H2, H3, H4, H5, H6 } from "../style/styled.js";

const Header = styled.div`
    height: 65px;
    border-bottom: 2px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
`



function ListView() {
    return(
        <>
        <Header>
        <button>menu</button>
        <H3>Lists</H3>
        <div> &emsp; &emsp; &emsp; </div>
        </Header>
        <div>ListView</div>
        <H1>Hello There Header</H1>
        <H2>Hello There Header</H2>
        <H3>Hello There Header</H3>
        <H4>Hello There Header</H4>
        <H5>Hello There Header</H5>
        <H6>Hello There Header</H6>
        </>
    )
}

export default ListView;