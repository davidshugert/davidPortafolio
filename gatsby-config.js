require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `David´s Portafolio`,
    author: {
      name: `David Shugert`,
      summary: `Mexican Fullstack developer/creator.`,
    },
    description: `David´s personal website and portafolio`,
    navBar: {
      links: [
        { name: "Home", url: "/" },
        { name: "About Me", url: "/about" },
        { name: "Projects", url: "/projects" },
      ],
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACEID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
