import styled from "styled-components";
import Button from "react-bootstrap/Button";

export const H1 = styled.h1`
  color: black;
  font-family: "SF Pro Text", "Myriad Set Pro", "SF Pro Icons", "Apple Legacy Chevron", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
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