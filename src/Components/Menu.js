import React, { useState, useRef } from 'react'
import { useTransition, useSpring, useChain, config } from 'react-spring'
import { Container, Item, MainMenuContainer, MenuBar, MenuButton } from './styles'

const Options = [
  {name:'About Alex',
  link:'/AboutAlex'},
  {name:'Projects',
  link:'/Projects'},
  {name:'CV',
  link:'/CV'},
  {name:'Contact',
  link:'/Contact'}
]

export default function Menu(props) {
  const [open, set] = useState(props.nav.menu)

  const springRef = useRef()
  const { mainWidth, size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.slow,
    from: { size: '0px', mainWidth: '60px'},
    to: { size: open ? '280px' : '0px', mainWidth:  open ? '350px' : '60px'}
  })

  const menuBarTopRef = useRef()
  const menuBarTop = useSpring({
    ref: menuBarTopRef,
    config: config.slow,
    from: { transform: open ? "rotate(45deg) translateY(10px) scale(1)" : "rotate(0deg) translateY(0px) scale(0)" },
    to: {transform: open ? "rotate(45deg) translateY(10px) scale(1)" : "rotate(0deg) translateY(0px) scale(1)"}
  })

  const menuBarBottomRef = useRef()
  const menuBarBottom = useSpring({
    ref: menuBarBottomRef,
    config: config.slow,
    from: { transform: open ? "rotate(-45deg) translateY(-10px) scale(1)" : "rotate(0deg) translateY(0px) scale(0)" },
    to: {transform: open ? "rotate(-45deg) translateY(-10px) scale(1)" : "rotate(0deg) translateY(0px) scale(1)"}
  })
    
  const transRef = useRef()
  const transitions = useTransition(open ? Options : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / Options.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  function onMenuOpen(){
    set(open => !open)
    switch (props.nav.menu){
      case true: {
        props.nav.menuClose()
        break
      }
      case false: {
        props.nav.menuOpen()
        break
      }
      default: break 
    } 
  }
  function handleMenuSelect(link) {
    props.history.push(`${link}`)
  }
  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [menuBarBottomRef, menuBarTopRef,springRef, transRef] : [transRef, springRef, menuBarBottomRef, menuBarTopRef], [open ? 0.2 : 0,open ? 0.2 : 0.3, open ? 0 : 0, open ? 0.5 : 0], 1500)

  return (
    <MainMenuContainer style={{ ...rest, width: mainWidth }}>
      <MenuButton onClick={() => onMenuOpen()}> 
        <MenuBar style={menuBarTop }/>
        <MenuBar style={menuBarBottom }/>
      </MenuButton>
      <Container style={{ ...rest, width: size }} >
        {transitions.map(({ item, key, props }) => (
          <Item key={key} style={{ ...props, background: item.css }} onClick={() => handleMenuSelect(item.link)}>{item.name}</Item>
        ))}
      </Container>
    </MainMenuContainer>
  )
}


