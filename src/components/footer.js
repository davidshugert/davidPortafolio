import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <footer className={footerStyles.footer}>
      <p>Created by {data.site.siteMetadata.author.name}, © 2020</p>
    </footer>
  )
}
export default Footer
