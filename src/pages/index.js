import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Projects from "../components/ProjectsSection"
import ToolkitSection from "../components/Toolkit"


const BlogIndex = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Hero />
      <Experience />
      <Projects />
      <ToolkitSection />
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
