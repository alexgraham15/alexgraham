import React, { useRef, useEffect, useState, useCallback  } from 'react';
import { useTransition, animated, config, useSpring, useChain } from 'react-spring'
import { validate } from '@babel/types';



export default function ContactForm(props) {
    console.log(props)
    const contactItems = [
        ({ style }) => <animated.input type="text" style={{...style}} placeholder={props.nav.name !== "" ? props.nav.name : "Name"} />,
        ({ style }) => <animated.input type="text" style={{...style}} placeholder={props.nav.email !== "" ? props.nav.email : "Email"} />,
        ({ style }) => <animated.textarea style={{...style}} placeholder={props.nav.message !== "" ? props.nav.message : "Message"} />,
    ]
    const [index, set] = useState(0)
    const onClick = useCallback(() => set(state => (state + 1) % 3), [])
    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, width: "0%" },
        enter: { opacity: 1, width: "50%" },
        leave: { opacity: 0, width: "0%" },
        config: config.gentle
    })
    
    const buttonTop = useSpring({
        from: { top: `calc(50% + 100px)`},
        to: { top: index == 2 ? `calc(50% + 300px)` : `calc(50% + 100px)`},
        config: config.slow
    })

    function onKeyPressed(e){
        console.log(e);
      }

    return (
        <animated.div className="contact-form">
            {transitions.map(({ item, props, key }) => {
                const MappedInput = contactItems[item]
                return <MappedInput  key={key} style={props} onKeyUp={onKeyPressed.bind()} />
            })}
            <animated.button type="submit" onClick={onClick} style={buttonTop}>{index == 2 ? "Submit" : "Next"}</animated.button>
        </animated.div>
    )
}