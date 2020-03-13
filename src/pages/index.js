import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Hero from "../components/hero"
import Experience from "../components/Experience"
import Projects from "../components/Projects"


import "./styles.scss"

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
