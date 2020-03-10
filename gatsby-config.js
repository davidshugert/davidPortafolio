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
    `gatsby-plugin-feed`,
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
