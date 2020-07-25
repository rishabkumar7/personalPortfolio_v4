import React from "react"
import Title from "../Title"
import Post from "./Post"
import { Link } from "gatsby"
const Posts = ({posts,title,showLink}) => {
  return <section className="section">
  <Title title={title}/>
  <div className="section-center blogs-center">
    {posts.map((post)=>{
      return <Post key={post.id} {...post} />
    }
    )}
  </div>
  {showLink && (<Link to="/post" className="btn center-btn">Posts</Link>)}
</section>
}
export default Posts