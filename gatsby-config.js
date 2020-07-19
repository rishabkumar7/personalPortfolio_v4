/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Rishab's Portfolio",
    description: "This is my portfolio and blog website!",
    author: "Rishab Kumar",
    twitterUsername: "@rishabk7",
    image: "/twitter-img.png",
    siteUrl: "https://rishabkumar.com",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        //apiURL: `http://localhost:1337`,
        apiURL: `http://100.24.253.129:1337`,
        queryLimit: 1000, // Default to 100
        //   contentTypes : `jobs`, `projects`, `blogs`,
        //   singleType : `about`
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes: [`jobs`,`projects`,`blogs`],
        singleTypes: [`about`],
      },
    },
    {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_ID,
    },
    },
     {
       resolve: `gatsby-plugin-prefetch-google-fonts`,
       options: {
         fonts: [
           {
             family: `Roboto`,
             variants: [`400`, `700`],
           },
           {
             family: `Open Sans`,
           },
         ],
       },
     },
  ],
}
