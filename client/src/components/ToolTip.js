import styled from "styled-components";

const Container = styled.div`
    position: relative;
`
const Bubble = styled.div`
    & {
    width: 230px;
    height: 40px;
    padding: 8px;
    text-align: center;
    background-color: white;
    box-shadow: 1px 2px 5px 2px lightgray;
    border-radius: 8px;
    position: absolute;
    bottom: 60px;
    right: -4px;
    z-index: 1;
    }
  &:after {
    border-right: solid 15px transparent;
    border-left: solid 15px transparent;
    border-top: solid 15px white;
    //box-shadow: 1px 2px 5px 2px lightgray;
    transform: translateX(0%);
    position: absolute;
    z-index: 1;
    content: "";
    top: 98%;
    right: 5px;
    height: 0;
    width: 0;
  }
`
function ToolTip({text}) {   
    return(
        <Container>
            <Bubble>
                {text}
            </Bubble>
        </Container>
)}

export default ToolTip;