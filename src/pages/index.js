import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Projects from "../components/ProjectsSection"


const BlogIndex = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Hero />
      <Experience />
      <Projects />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
