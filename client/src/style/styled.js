import styled from "styled-components";
import Button from "react-bootstrap/Button";

export const Canvas = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column;
`
export const Header = styled.div`
  flex: 0 0 70px;
  margin: 0 10px;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ScrollableList = styled.div`
  flex: 1 1 auto;
  margin: 0 0 0 10px;
  overflow-y: scroll;
`
export const ListItem = styled.div`
  & {border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  }
  &:hover {
    cursor: grab;
  }
  &:active {
    cursor: grabbing;
  }
`
export const Footer = styled.div`
  flex: 0 0 70px;
  padding: 0 10px;
  background-color: hsl(100, 0%, 90%);
  border-top: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const IconButton = styled.button`
  border: 0px;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  display: inline-flex;
`
export const OutlineButton = styled(IconButton)`
  border: 1px solid black;
  border-radius: 5px;
`
export const RowButton = styled.button`
  width: 100%;
  min-height: 49px;
  padding: 6px;
  border: 0px;
  background-color: rgba(0, 0, 0, 0);
  text-align: left;
`
export const blueUI = "hsl(211, 100%, 50%)"

export const H1 = styled.h1`
  color: black;
  font-family: "SF Pro Text", "Myriad Set Pro", 
    "SF Pro Icons", "Apple Legacy Chevron", 
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 40px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 1px;
`
export const H2 = styled(H1)`
  font-size: 32px;
`
export const H3 = styled(H1)`
  font-size: 20px;
`
export const H4 = styled(H1)`
  font-size: 20px;
  font-weight: lighter;
`
export const H5 = styled(H1)`
  font-size: 16px;
  font-weight: lighter;
`
export const H6 = styled(H1)`
  font-size: 12px;
  font-weight: lighter;
`
export const H5B = styled(H1)`
  font-size: 16px;
  font-weight: normal;
  margin: 1px 0 0 0;
`
export const BubbleGroup = styled.div`
  margin: 25px 10px;
  padding: 0 20px;
  background-color: hsl(0, 0%, 95%);
  border-radius: 10px;
`
export const BubbleItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const BubbleLine = styled.div`
  height: 1px;
  border-bottom: 1px solid gray;
`
export const ButtonRed = styled.button`
  height: 35px;
  width: auto;
  border: 1px solid hsl(11, 100%, 50%);
  border-radius: 8px;
  background-color: white;
`
export const InputStyled = styled.input`
  font-size: 20px;
  font-weight: bold;
  width: 45px;
  text-align: right;
  background-color: rgba(0,0,0,0);
  border: 0 solid black;
`



// -- Delete the stuff below? -- //

// TrackPage, GroupPage
export const CardButton = styled(Button)`
  width: 450px;
  margin: 5px 0px;
  padding: 20px 30px;
  color: hsl(0, 0%, 25%);
  text-align: left;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
`
// ActionPage, Calendar, FriendCard, FriendPage, GoalPage, GroupPage, TrackPage,
export const Card = styled.div`
  width: 450px;
  height: auto;
  margin: 10px 0px;
  padding: 20px 40px;
  color: hsl(0, 0%, 25%);
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: .25rem;
  border: 1px solid #6c757d;
`
// Calendar only variation
export const CalCard = styled(Card)`
  padding: 10px;
`

// FriendPage, GoalPage, GroupPage, TrackPage,
export const EditButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
`

// Many components for everything below
export const Background = styled.div`
	background-color: hsl(0, 0%, 90%);
  min-height: ${window.innerHeight -76}px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Page = styled.div`
  background-color: hsl(0, 0%, 95%);
  width: 1000px;
  min-height: ${window.innerHeight -76-100}px;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`
export const BackButton = styled(Button)`
    float: right;
`
export const TwoColumn = styled.div`
  display: flex;
  justify-content: space-between;
`