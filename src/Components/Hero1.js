import React, { useState, useEffect, useRef  } from 'react';
import { useTransition, animated, config, useSpring, useChain } from 'react-spring'
import styled from 'styled-components'
import '../CSS/Hero.css'

  const Container = styled(animated.div)`
    width:100%;
`

export default function MainDiv(props) {
  
  const [items, setList] = useState([
    {key: 1, element: <h1>Alex Graham</h1>},
    {key: 2, element: <p>Full Stack Developer</p>}
  ])
  const [index, setIndex] = useState(4)
  const addToList = () => {
    setIndex(index+1)
    var nItems = items.slice()
    setList(nItems) 
  }
  useEffect(() => addToList(), []);

  const textRef = useRef()
  const transitions = useTransition(items, item => item.key, {
    ref: textRef,
    config: config.slow,
    unique: true,
    trail: 400 ,
    initial: { opacity: 0,transform: 'translate3d(0, -50%,0)' },
    from: { opacity: 0,  transform: 'translate3d(0,-50%,0)' },
    enter: { opacity: 1,  transform: 'translate3d(0%, 0%,0)' },
    leave: {  opacity: 0, transform: 'translate3d(0%,-100%,0)' }
  })

  const [menuOpen,  toggleMenu] = useState(props.nav.menu)
 
  const toggleSize = () =>{
    toggleMenu(menuOpen => !menuOpen)
  }

  const contentRef = useRef()
  const contentProps = useSpring({
    ref: contentRef,
    from: { width:  `calc(100% - ${!props.nav.menu ? 350 : 0}px)`},
    to: { width:   `calc(100% - ${props.nav.menu ? 350 : 0}px)`},
    config: config.slow,
  })

  useChain([contentRef,textRef], [0,0.5])

  return (
  
  <animated.div style={contentProps}>
    <Container className={ props.className }>
    <header className="Hero-header">
      {transitions.map(({ item, props, key }) =>
        <animated.div 
          key={key} 
          style={props}>
          {item.element}
        </animated.div>
      )}
    </header>
  </Container>
  </animated.div>

  )
}

