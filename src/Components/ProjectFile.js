import React from 'react'
import { animated } from 'react-spring'
import '../CSS/p.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEyeSlash } from '@fortawesome/pro-light-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'



const ProjectSectionText = ({item}) => <div><h4>{item.title}</h4><p>{item.description}</p></div>
const ProjectSectionImage = ({item}) => <div><h4>{item.title}</h4><p>{item.description.length === 0 ? "N/A" : item.description.map(((i) => (<img key={i} className="projectImage" src={i} alt={i}/>)))}</p></div>

export default function PrjectFile(props){
    return (
        <animated.div style={{scale: props.style.scale}}>
            <animated.div style={{backgroundImage:props.style.backgroundImage}}></animated.div>
            <div>
                <h1>
                {props.project.title}
                </h1>
                <small>Source Code: {props.project.sourceCode ? <a href={props.project.sourceCodeLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>:<FontAwesomeIcon icon={faEyeSlash}/> }</small>
                <ProjectSectionText item={{title: "Description", description: props.project.description}}/>
                <ProjectSectionImage item={{title: "Frontend Stack", description: props.project.frontendStack}}/>
                <ProjectSectionImage item={{title: "Backend Stack", description: props.project.backendStack}}/>
                <ProjectSectionText item={{title: "Key Libraries", description: props.project.keyLibraries}}/>
                <ProjectSectionText item={{title: "Learnings", description: props.project.learnings}}/>
            </div>
        </animated.div>
    )
}