import React, { useRef } from 'react'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import ProjectFile from './ProjectFile'
import '../CSS/p.css'
import CSS3 from '../Media/css3.png'
import HTML5 from '../Media/html5.png'
import java from '../Media/java.jpg'
import jQuery from '../Media/jQuery.png'
import js from '../Media/js.png'
import mongodb from '../Media/mongodb.jpg'
import php from '../Media/php.png'
import MySQL from '../Media/MySQL.jpg'
import node from '../Media/node.jpg'
import reactSpring from '../Media/react-spring.png'
import react from '../Media/react.png'
import swift from '../Media/swift.png'
import GIFImage from '../Media/1.gif'

const pages = [
  {image: GIFImage, sourceCode: false, sourceCodeLink: "", title: "Mobile Apps", description: "Design, build and release an app to suit both Android and Apple platforms that is intuative and easy to use whilst dovetailing into the current RESTful API system", learnings: "Consuming JSON data, Working to Apples HIG, Release processes to Google Play and App Store", frontendStack: [swift, java], backendStack: [], keyLibraries: "LBTA Components, LBTA Tools"},
  {image: GIFImage, sourceCode: false, sourceCodeLink: "", title: "eValaute Platform", description: "Design, build and release a greenfield web application to meet a conceptual design aimed at reducing management workload", learnings: "Unit testing, Greenfield development, RESTful APIs, Asynchronus design patterns", frontendStack: [HTML5, CSS3, jQuery, js], backendStack: [node, mongodb], keyLibraries: "Express, Bootstrap, Passport JS, Chart JS"},
  {image: GIFImage, sourceCode: false, sourceCodeLink: "", title: "Franchise Book System", description: "Customised wordpress site to manage client bookings per franchise. Bespoke user management with a custom user interface allowing clients to purchase and manage their bookings in addition to allowing franchisees the flexibility", learnings: "Customisation of pre-built plugins to suit a growing business need", frontendStack: [HTML5, CSS3], backendStack: [php, MySQL], keyLibraries: "Booking-Activities"},
  {image: GIFImage, sourceCode: false, sourceCodeLink: "", title: "SMS Callout System", description: "Design, build and release a dedicated call out system for managing contacts and delivering SMS messages with delivery reports", learnings: "SMS gateway access from PHP", frontendStack: [HTML5, CSS3, js], backendStack: [php, MySQL], keyLibraries: ""},
  {image: GIFImage, sourceCode: false, sourceCodeLink: "", title: "Virtual Exercise Network", description: "Design, build and release from a concept - to take management training and exercise virtual. This involved dynamic environment updates, social media simulation and hosting video", learnings: "Web socket transport, video hosting and avaiability", frontendStack: [HTML5, CSS3, js], backendStack: [php, MySQL], keyLibraries: "Socket IO"},
  {image: GIFImage, sourceCode: true, sourceCodeLink: "https://github.com/alexgraham15/alexgraham", title: "This Portfolio", description: "A small portfolio to demonstrate front end React scripts as well as outline some of my recent commerical and developmental project work", learnings: "Integrating the React-Spring library", frontendStack: [react, reactSpring, HTML5, CSS3, js], backendStack: [], keyLibraries: "React, React-Router, React-Spring"},   
]


export default function Viewpager() {
  const index = useRef(0)
  const [page, set] = useSprings(pages.length, i => ({
    x: i * window.innerWidth,
    scale: 1,
    display: 'block'
  }))
  const bind = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
    if (down && distance > window.innerWidth / 2)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)))
    set(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x =(i - index.current) * window.innerWidth + (down ? mx : 0)
      const scale = down ? 1 - distance / window.innerWidth / 2 : 1
      return { x, scale, display: 'block' }
    })
  })
  return page.map(({ x, display, scale }, i) => (
    <animated.div {...bind()} key={i} style={{ display, x }}>
      <ProjectFile project={pages[i]} style={{ scale, backgroundImage: `url(${pages[i].image})` }} />
    </animated.div>
  ))
}
