import React, { useState, useEffect, useRef } from 'react';
import { useTransition, animated, useSpring, useChain, config } from 'react-spring'
import styled from 'styled-components'
import '../CSS/Hero.css'

const Container = styled.div({
    width:"100%"
  })

export default function AThing2(props) {
  const [items, setList] = useState([
    {key: 1, element: <h1>Alex Graham</h1>},
    {key: 2, element: <p>Full Stack Developer</p>}
  ])
  const [index, setIndex] = useState(4)
  const addToList = () => {
    setIndex(index+1)
    var nItems = items.slice()
    // nItems.push({key: index, item: "new"})?
    setList(nItems) 
  }
  useEffect(() => addToList(), []);
  const [open, set] = useState(false)
  const transitions = useTransition(items, item => item.key, {
    initial: { transform: 'translate3d(0%, -100%,0)' },
    from: {    transform: 'translate3d(0%,-100%,0)' },
    enter: {   transform: 'translate3d(0%, 0%,0)' },
    leave: {   transform: 'translate3d(100%,0%,0)' }
  })
  return (
    <Container className={ props.className }>
    <header className="Hero-header">
    <div onClick={() => set(open => !open)}>
      {transitions.map(({ item, props, key }) =>
        <animated.div 
          key={key} 
          style={props}>
          {item.element}
        </animated.div>
      )}
    </div>
    </header>
    </Container>
  )
}

