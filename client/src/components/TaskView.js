import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { H1, H2, H3, H4, H5, H6 } from "../style/styled.js";

const Container = styled.div`
    display: flex;
    flex-flow: column;
    height: 100%;
`

const Header = styled.div`
    flex: 0 0 65px;
`
const Content = styled.div`
    flex: 1 1 auto;
    background-color: pink;
    overflow-y: auto;
`

const Footer = styled.div`
    flex: 0 0 40px;
`


function TaskView() {
    return(
        <div style={{height: "100vh"}}>
            <Container>
                <Header>Header</Header>
                <Content>
                    <div>TaskView</div>
                    <H1>Hello There Header</H1>
                    <H2>Hello There Header</H2>
                    <H3>Hello There Header</H3>
                    <H4>Hello There Header</H4>
                    <H5>Hello There Header</H5>
                    <H6>Hello There Header</H6>
                    <H1>Hello There Header</H1>
                    <H2>Hello There Header</H2>
                    <H3>Hello There Header</H3>
                    <H4>Hello There Header</H4>
                    <H5>Hello There Header</H5>
                    <H6>Hello There Header</H6>
                    <H1>Hello There Header</H1>
                    <H2>Hello There Header</H2>
                    <H3>Hello There Header</H3>
                    <H4>Hello There Header</H4>
                    <H5>Hello There Header</H5>
                    <H6>Hello There Header</H6>
                </Content>
                <Footer>Footer</Footer>
            </Container>
        </div>
    )
}

export default TaskView;