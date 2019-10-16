import React from 'react'
import {useSpring, animated, config} from 'react-spring'
import {Keyframes} from 'react-spring/renderprops'
import styled from 'styled-components'
import '../CSS/Hero.css'

const Container = styled.div({
  width:"100%"
})

const createKeyFrames = (delay, from, to) =>(
  Keyframes.Spring({
    show: {  delay:delay,to: {opacity: 1,  transform: 'translate3d(0px,0,0)'},
                    from: {opacity: 0,  transform: 'translate3d(0,-25px,0)'},
                    config:{duration:1500}}
  })
)
const Content = createKeyFrames(1500, 0, 22)

export default function Hero(props){
    const springProps = useSpring({
        to: {opacity: 1,  transform: 'translate3d(0px,0,0)'},
        from: {opacity: 0,  transform: 'translate3d(0,25px,0)'},
        config:{duration:1500 }
    })
    return <Container className={ props.className }>
        <header className="Hero-header">
        <animated.h1 style={springProps}>Alex Graham</animated.h1>
        <Content state="show">
            {styles => 
                <div style={styles}>
                    Full Stack Developer
                </div>
            }
        </Content>
        </header>
    </Container>
}