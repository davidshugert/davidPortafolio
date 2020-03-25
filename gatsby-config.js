require("dotenv").config()
const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: `David´s Portafolio`,
    siteUrl: "https://davidshugert.com",
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
        { name: "Contact Me", url: "/contact" },
      ],
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACEID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-159486532-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David Shugert`,
        short_name: `David Sh.`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/favicon/android-chrome-512x512.png",
        // icons: [
        //   {
        //     src: "src/favicon/android-chrome-192x192.png",
        //     sizes: "192x192",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/favicon/android-chrome-512x512.png",
        //     sizes: "512x512",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/favicon/favicon-16x16.png",
        //     sizes: "16x16",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/favicon/favicon-32x32.png",
        //     sizes: "32x32",
        //     type: "image/png",
        //   },
        // ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}
