import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from 'gatsby-image'
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/SEO"
const PostTemplate = ({data}) => {
    const {mdx:{frontmatter:{title, category, date, image},body,}} = data

  return <Layout>
    <SEO title={title} description={category} />
    <section className="blog-template">
      <div className="section-center">
        <article className="blog-content">
            <Image fluid={image} />
            <div className="post-info">
                <span>{category}</span>
                <h2>{title}</h2>
                <p>{date}</p>
                <div className="underline"></div>
            </div>
            <MDXRenderer >{body}</MDXRenderer>
        </article>
        <Link to="/posts" className="btn center-btn">
          posts
        </Link>
      </div>
    </section>
  </Layout>
}

 export const query = graphql`
 query GetSinglePost($slug: String) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        category
        date(formatString: "MMMM Do, YYYY")
        image
      }
      body
    }
  }
 `

export default PostTemplate
