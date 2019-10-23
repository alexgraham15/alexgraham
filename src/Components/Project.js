import React, { useRef } from 'react'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import ProjectFile from './ProjectFile'
import '../CSS/p.css'
import GIFImage from '../Media/1.gif'

const pages = [
  {image: GIFImage, title: "Mobile Apps", description: "Design, build and release an app to suit both Android and Apple platforms that is intuative and easy to use", learnings: "Consuming JSON data, Working to Apples HIG, Release processes to Google Play and App Store", frontendStack: "Swift, Java", backendStack: "", keyLibraries: "LBTA Components, LBTA Tools"},
  {image: GIFImage, title: "eValaute Platform", description: "Design, build and release a greenfield web application to meet a conceptual design aimed at reducing management workload", learnings: "Unit testing, Greenfield development, RESTful APIs, Asynchronus design patterns", frontendStack: "HTML5, CSS3, JQuery, JavaScript", backendStack: "NodeJS, MongoDB, AWS S3, Phantom JS", keyLibraries: "Express, Bootstrap, Passport JS, Chart JS"},
  {image: GIFImage, title: "Franchise Book System", description: "Customised wordpress site to manage client bookings per franchise. Bespoke user management with a custom user interface allowing clients to purchase and manage their bookings in addition to allowing franchisees the flexibility", learnings: "Customisation of pre-built plugins to suit a growing business need", frontendStack: "HTML5, CSS3", backendStack: "PHP, MySQL", keyLibraries: "Booking-Activities"},
  {image: GIFImage, title: "SMS Callout System", description: "", learnings: "", frontendStack: "", backendStack: "", keyLibraries: ""},
  {image: GIFImage, title: "Virtual Exercise Network", description: "", learnings: "", frontendStack: "", backendStack: "", keyLibraries: ""}   
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
