import React from "react"
import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaDev,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com/rishabk7/",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://linkedin.com/in/rishabkumar7/",
  },
  {
    id: 3,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://www.github.com/rishabkumar7/",
  },
  {
    id: 4,
    icon: <FaDev className="social-icon"></FaDev>,
    url: "https://www.dev.to/rishabk7/",
  },

]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
