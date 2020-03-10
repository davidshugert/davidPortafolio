import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Hero from "../components/hero"
import Experience from "../components/Experience"

import "./styles.scss"

const BlogIndex = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Hero />
      <Experience />
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
