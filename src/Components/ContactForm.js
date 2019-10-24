import React, { useRef, useEffect  } from 'react';
import { useTransition, animated, config, useSpring, useChain } from 'react-spring'
import styled from 'styled-components'

const Container = styled(animated.div)`
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  height: 80vh;
  position: relative;
`

export default function ContactForm(props) {
    const inputProps = useSpring({
        from: { width: '0vw'},
        to: { width: '50vw'},
        config: config.slow,
    })
    
    return (
        <Container>
            <animated.input autoFocus  type="text" style={inputProps} placeholder="Name" />
            <animated.button type="submit">Next</animated.button>
        </Container>
    )
}