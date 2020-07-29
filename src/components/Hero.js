import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
       ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Hero = () => {
  const {file:{childImageSharp: { fluid },},} = useStaticQuery(query);
  
  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underLine"></div>
          <h2>Hello 👋</h2>
          <h1>I'm Rishab</h1>
          <h4>CloudOps | DevOps</h4>
          <Link to='/contact' className="btn">Contact me</Link> <br/>
          <a href="https://blog.rishabkumar.ga/" className="btn">Blog</a>
          <SocialLinks />
        </div>
      </article>
      <Image fluid={fluid} className="hero-img" />
    </div>
  </header>
}

export default Hero
