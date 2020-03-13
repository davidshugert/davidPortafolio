import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import footerStyles from "./footer.module.scss"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { IoIosDocument } from "react-icons/io"

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
  const iconSize = window.innerWidth < 580 ? "1em":"2em"
  return (
    <footer className={`footer is-size-4 is-size-4-tablet is-size-7-mobile ${footerStyles.footerContainer}`}>
      <p>
        Created by {data.site.siteMetadata.author.name}, ©{" "}
        {new Date().getFullYear()}
      </p>
      <ul className={` ${footerStyles.table}`}>
        <li>
          <FaGithub size={iconSize}/>
        </li>
        <li>
          <FaLinkedinIn size={iconSize} />
        </li>
        <li>
          <IoIosDocument size={iconSize} />
        </li>
      </ul>
      <Link to="/contact"><p className={footerStyles.contactLink}>Contact Me</p></Link>
    </footer>
  )
}
export default Footer
