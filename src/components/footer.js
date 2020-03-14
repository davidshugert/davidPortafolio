import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import footerStyles from "./footer.module.scss"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { IoIosDocument } from "react-icons/io"
import styled from "styled-components"

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
  const Icon = styled.a`
    text-decoration: none;
    color: black;
    :hover{
      color:grey;
    }
  `
  const iconSize = "1.5em"
  return (
    <footer
      className={`footer is-size-4 is-size-4-tablet is-size-7-mobile ${footerStyles.footerContainer}`}
    >
      <p>
        Created by {data.site.siteMetadata.author.name}, ©{" "}
        {new Date().getFullYear()}
      </p>
      <ul className={` ${footerStyles.table}`}>
        <li>
          <Icon href="https://github.com/davidshugert">
            <FaGithub size={iconSize} />
          </Icon>
        </li>
        <li>
          <Icon href="https://www.linkedin.com/in/david-shugert/">
            <FaLinkedinIn size={iconSize} />
          </Icon>
        </li>
        <li>
          <Icon href="/DavidShugert2020.pdf">
            <IoIosDocument size={iconSize} />
          </Icon>
        </li>
      </ul>
      <Link to="/contact">
        <p className={footerStyles.contactLink}>Contact Me</p>
      </Link>
    </footer>
  )
}
export default Footer
