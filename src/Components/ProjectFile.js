import React from 'react'
import { animated } from 'react-spring'
import '../CSS/p.css'


const ProjectSections = ({item}) => <div><h4>{item.title}</h4><p>{item.description}</p></div>

export default function PrjectFile(props){
    return (
        <animated.div style={{scale: props.style.scale}}>
            <animated.div style={{backgroundImage:props.style.backgroundImage}}></animated.div>
            <div>
                <h1>
                {props.project.title}
                </h1>
                <ProjectSections item={{title: "Description", description: props.project.description}}/>
                <ProjectSections item={{title: "Frontend Stack", description: props.project.frontendStack}}/>
                <ProjectSections item={{title: "Backend Stack", description: props.project.backendStack}}/>
                <ProjectSections item={{title: "Key Libraries", description: props.project.keyLibraries}}/>
                <ProjectSections item={{title: "Learnings", description: props.project.learnings}}/>
            </div>
        </animated.div>
    )
}