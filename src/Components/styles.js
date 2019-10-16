import { animated } from 'react-spring'
import styled from 'styled-components'


const Container = styled(animated.div)`
    background-color:rgba(200,200,200,1);
    position:absolute;
    top:0px;
    zIndex:2;
    width:0px;
    height:100%;
    will-change: width;
`

const Item = styled(animated.h2)`
    width: 100%;
    border-radius: 5px;
    color:"#fff";
    font-weight:"100";
    text-align: center;
    will-change: transform, opacity;
`

const MainMenuContainer = styled(animated.div)`
    position:absolute;
    top:0px;
    zIndex:2;
    width:60px;
    height:100%;
    will-change: width;
`

const MenuBar = styled(animated.span)`
    width:30px;
    height:2px;
    background-color:#fff;
    margin: auto;
    will-change: opacity;
`
  
  const MenuButton = styled(animated.div)`
    width:30px;
    height:30px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    position:absolute;
    top:30px;
    right:0px;
    cursor:pointer;
    zIndex:1;
`

export { Container, Item, MainMenuContainer, MenuBar, MenuButton }
