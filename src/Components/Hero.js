import React, { useRef  } from 'react';
import { useTransition, animated, config, useSpring, useChain } from 'react-spring'
import styled from 'styled-components'
import '../CSS/Hero.css'

const Container = styled(animated.div)`
  width:100%;
`

export default function MainDiv(props) {
  
  const items = [
    {key: 1, element: <h1>Alex Graham</h1>},
    {key: 2, element: <p>Full Stack Developer</p>}
  ]

  const textRef = useRef()
  const transitions = useTransition(items, item => item.key, {
    ref: textRef,
    config: config.slow,
    unique: true,
    trail: 400 ,
    initial: { opacity: 0,transform: 'translate3d(0, -50%,0)' },
    from: { opacity: 0,  transform: 'translate3d(0,-50%,0)' },
    enter: { opacity: 1,  transform: 'translate3d(0%, 0%,0)' },
    leave: {  opacity: 0, transform: 'translate3d(0%,-50%,0)' }
  })

  const contentRef = useRef()
  const contentProps = useSpring({
    ref: contentRef,
    from: { width:  `calc(100% - ${!props.nav.menu ? 350 : 0}px)`},
    to: { width:   `calc(100% - ${props.nav.menu ? 350 : 0}px)`},
    config: config.slow,
  })

  useChain(props.nav.menu ? [contentRef,textRef] : [textRef,contentRef] , [props.nav.menu ? 0 : 1, props.nav.menu ? 0.5 : 0.5])

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

