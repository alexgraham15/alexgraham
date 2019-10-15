import React, { Component } from 'react'
import '../CSS/Menu.css'
import styled from 'styled-components'

const Options = [
  {name:'About Me',
  link:'/AboutMe'},
  {name:'Projects',
  link:'/Projects'},
  {name:'CV',
  link:'/CV'},
  {name:'Contact',
  link:'/Contact'}
]

const MenuBar = styled.span({
  width:"30px",
  height:"2px",
  backgroundColor:"#fff",
  margin: "auto",
  transform: "rotate(0deg) translateY(0px)",
  transition: "width 1s, transform 1s ease"
})

const MenuButton = styled.div({
  animation: "${keyframes`${fadeIn}`} 3s forwards",
  width:"30px",
  height:"30px",
  display:"flex",
  flexDirection:"column",
  justifyContent: "flex-start",
  position: "absolute",
  top:"30px",
  right:"0px",
  cursor:"pointer",
  zIndex:"1",
  [`:hover ${MenuBar}:nth-child(1)`]: {
    transform: "rotate(45deg) translateY(10px)",
    transition: "width 1s, transform 1s ease",
    width:"40px",
    height:"2px"
  },
  [`:hover ${MenuBar}:nth-child(2)`]: {
    transform: "rotate(-45deg) translateY(-10px)",
    transition: "width 1s, transform 1s ease",
    width:"40px",
    height:"2px"
  }
})

const MainMenuContainer = styled.div({
  position:"absolute",
  top:"0px",
  left:"-280px",
  zIndex:"2",
  width:"350px",
  height:"100%",
  transition: "left 1.5s ease",
})
const MenuOptionContainer = styled.div({
  backgroundColor:"rgba(200,200,200,1)",
  position:"absolute",
  top:"0px",
  left:"0px",
  zIndex:"2",
  width:"280px",
  height:"100%"
})
const MenuOption = styled.h2({
  color:"#fff",
  fontWeight:"100"
})



class Menu extends Component {
   handleMenuSelect(link) {
    this.props.history.push(`${link}`)
  }
  onMenuOpen(){
    switch (this.props.nav.menu){
      case true: {
        this.menuVisable = "nav--open"
        return this.props.nav.menuClose()
      }
      case false: {
        this.menuVisable = ""
        return this.props.nav.menuOpen()
      }
    } 
  }
  render(){
    return (
      <MainMenuContainer className={this.menuVisable}>
        <MenuOptionContainer className="menu">
          {Options.map(item => (
            <MenuOption key={item.name} onClick={() => this.handleMenuSelect(item.link)}>{item.name}</MenuOption>
          ))}
        </MenuOptionContainer>
        <MenuButton onClick={this.onMenuOpen.bind(this)}>   
          <MenuBar />
          <MenuBar />
        </MenuButton>
      </MainMenuContainer>
    )
  }
}
export default Menu


