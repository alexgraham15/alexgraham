import React, { useRef  } from 'react';
import { useTransition, animated, config, useSpring, useChain } from 'react-spring'
import styled from 'styled-components'
import ContactForm from './ContactForm'
import '../CSS/Contact.css'

const Container = styled(animated.div)`
  width:100%;
`

export default function MainDiv(props) {
  
  const items = [
    {key: 1, element: <h1>Contact Alex</h1>},
    {key: 2, element: <p></p>}
  ]

  const textRef = useRef()
  const transitions = useTransition(items, item => item.key, {
    ref: textRef,
    config: config.slow,
    unique: false,
    initial: { opacity: 0,transform: 'translate3d(-100, 0%,0)' },
    from: { opacity: 0,  transform: 'translate3d(-100%,0%,0)' },
    enter: { opacity: 1,  transform: 'translate3d(0%, 0%,0)' },
    leave: {  opacity: 0, transform: 'translate3d(-100%,0%,0)' }
  })

  const contentRef = useRef()
  const contentProps = useSpring({
    ref: contentRef,
    from: { width:  `calc(100% - ${props.nav.menu ? 0 : 280}px)`},
    to: { width:   `calc(100% - ${props.nav.menu ? 280 : 0}px)`},
    config: config.slow,
  })

  const backgroundProps = useSpring({
    from: { backgroundColor: 'rgba(40,44,52,1)', paddingLeft: '90px'},
    to: { backgroundColor: 'rgba(40,44,52,0.9)', paddingLeft: '90px'},
    config: config.slow,
  })

  useChain(props.nav.menu ? [contentRef, textRef] : [textRef, contentRef] , [props.nav.menu ? 0 : 0.5, 0.5])

  return (
    <animated.div style={contentProps}>
      <Container className={ props.className }>
        <animated.header className="Contact-header" style={backgroundProps}>
          {transitions.map(({ item, props, key }) =>
            <animated.div 
              key={key} 
              style={props}>
              {item.element}
            </animated.div>
          )}
          <ContactForm {...props} />
        </animated.header>
      </Container>
    </animated.div>
  )
}

