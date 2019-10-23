import React, { useRef  } from 'react';
import { useTransition, animated, config, useSpring, useChain } from 'react-spring'
import styled from 'styled-components'
import Viewpager from './Project'
import '../CSS/Projects.css'

const Container = styled(animated.div)`
  width:100%;
`

export default function MainDiv(props) {
  
  const items = [
    {key: 1, element: <h1>Profile</h1>},
    {key: 2, element: <p>Swipe through some of my latest projects</p>}
  ]

  const textRef = useRef()
  const transitions = useTransition(items, item => item.key, {
    ref: textRef,
    config: config.slow,
    unique: true,
    trail: 400 ,
    initial: { opacity: 0,transform: 'translate3d(-100, 0%,0)' },
    from: { opacity: 0,  transform: 'translate3d(-100%,0%,0)' },
    enter: { opacity: 1,  transform: 'translate3d(0%, 0%,0)' },
    leave: {  opacity: 0, transform: 'translate3d(-100%,0%,0)' }
  })

  const contentRef = useRef()
  const contentProps = useSpring({
    ref: contentRef,
    from: { width:  `calc(100% - ${props.nav.menu ? 90 : 370}px)`},
    to: { width:   `calc(100% - ${props.nav.menu ? 370 : 90}px)`},
    config: config.slow,
  })

  const sliderRef = useRef()
  const sliderProps = useSpring({
    ref: sliderRef,
    from: { width:  `calc(100% - 90px)`},
    to: { width:   `calc(100% - 90px)`},
    config: config.slow,
  })

  useChain(props.nav.menu ? [contentRef, textRef, sliderRef] : [sliderRef, textRef, contentRef] , [props.nav.menu ? 0 : 0.5, 0.5, props.nav.menu ? 0 : 0.5])

  return (
    <animated.div style={contentProps}>
      <Container className={ props.className }>
        <header className="Projects-header">
          {transitions.map(({ item, props, key }) =>
            <animated.div 
              key={key} 
              style={props}>
              {item.element}
            </animated.div>
          )}
          <animated.div id="project" style={sliderProps}>
            <Viewpager {...props} />
          </animated.div>
        </header>
      </Container>
    </animated.div>
  )
}

