import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Post = ({frontmatter,excerpt}) => {
const {title, image, slug, date, category, readTime,id} = frontmatter;
  return (
  <Link to={`/posts/${slug}`} className="blog" key={id}>
    <article>
      <Image fluid={image}
      className="blog-img" />
      <div className="blog-card">
        <h4>{title}</h4>
        <p>{excerpt}</p>
        <div className="blog-footer">
          <p>{category}</p>
          <p>{date}</p>
        </div>
      </div>
    </article>
  </Link>
  )
} 

Post.propTypes = {}

export default Post