import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Posts from "../components/Posts"
import SEO from "../components/SEO"
import Post from "../components/Posts/Post"

const PostsPage = ({data}) => {
    const {allMdx:{nodes:posts}}=data;
    return (
        <>
        <Layout>
        <Posts posts={posts} title="all posts" />
        </Layout>
        </>
    )
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
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
  }
`

export default PostsPage