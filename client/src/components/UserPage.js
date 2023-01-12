import {useState} from "react";

import styled from "styled-components";
import logo from "../assets/FI_logo500.png";
import UserLogInForm from "./UserLogInForm"
import UserSignUpForm from "./UserSignUpForm"

const ViewPort = styled.section`
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns: 100vw;
  background-color: rgb(240, 240, 240);
`

const Centered = styled.div`
  justify-self: center;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Sized400 = styled.div`
  height: 320px;
  width: 357px;
  background-color: white;
  padding: 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  
`

const Img = styled.img`
  object-fit: fill;
  height: 280px;
  border-radius: 20px;
`

function UserPage () {
  const [showLogIn, setShowLogIn] = useState(true);

  return(
    <ViewPort>
      <Centered>
          <Sized400 style={{display: "flex", justifyContent: "center" }}><Img src={logo} alt="logo" /> </Sized400>
          <Sized400>{showLogIn ? 
            <UserLogInForm setShowLogIn={setShowLogIn} /> :
            <UserSignUpForm setShowLogIn={setShowLogIn} />}
          </Sized400>
      </Centered>
    </ViewPort>
  )
}

export default UserPage;