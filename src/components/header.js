import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const NavbarItem = ({ page, name }) => (
  <Link className="navbar-item" to={`${page}`}>
    {name}
  </Link>
)
const NavbarBurger = props => (
  <button
    onClick={props.toggleMenu}
    className={`button navbar-burger burger ${props.active ? "is-active" : ""}`}
  >
    <span />
    <span />
    <span />
  </button>
)

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author {
            name
          }
          navBar {
            links{
              name
              url
            }
          }
        }
      }
    }
  `)
  const navItems = data.site.siteMetadata.navBar.links.map(link => (
    <NavbarItem page={link.url} name={link.name}></NavbarItem>
  ))
  const [isNavActive, toggleNavBar] = useState(false)
  return (
    <nav
      className="is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <p>{data.site.siteMetadata.author.name}</p>
        </Link>
        <NavbarBurger
          active={isNavActive}
          toggleMenu={() => toggleNavBar(!isNavActive)}
        />
      </div>
      <div className={`navbar-menu ${isNavActive ? "is-active" : ""}`}>
        <div className="navbar-end">{navItems}</div>
      </div>
    </nav>
  )
}

export default Header
