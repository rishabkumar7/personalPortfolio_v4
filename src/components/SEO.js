import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({title, description}) => {
  const{site}=useStaticQuery(query);
 // const {siteDesc,siteTitle,siteUrl,image,twitterUsername}=site.siteMetaData
  return ( <Helmet htmlAttributes={{lang:"en"}} title={title}>
    <meta name="description" content={description} />
  </Helmet>
  )
}

export default SEO
