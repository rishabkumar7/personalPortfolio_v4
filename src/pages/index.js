import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Posts from "../components/Posts"
import SEO from "../components/SEO"
export default ({data}) => {
  const {
    allStrapiProjects:{nodes:projects},
    allMdx:{nodes:posts},
    allStrapiBlogs:{nodes:blogs}    
} = data

  return (
  <Layout>
    <SEO title="Home" description="This is our homepage" />
    <Hero />
    <Services />
    <Jobs />
    <Projects projects={projects} title="featured projects" showLink/>
    <Blogs blogs={blogs} title="latest articles" showLink />
    <Posts posts={posts} title="Recently Published" />
  </Layout>
  )
}
export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "MMM Do, YYYY")
          slug
          readTime
          image 
        }
        id
      }
    }
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
    nodes {
      slug
      content
      desc
      date(formatString: "MMM Do, YYYY")
      id
      title
      category
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`

