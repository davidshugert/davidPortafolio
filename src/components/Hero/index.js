import React from "react"
import heroStyles from "./hero.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/home.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={`container ${heroStyles.container}`}>
      <div
        className={`columns is-vcentered is-centered ${heroStyles.container}`}
      >
        <img
          src={"/images/home.jpg"}
          className="column is-half"
          alt="David´s Hero"
        />
        <p
          className={`column is-half is-size-3 is-size-4-mobile has-text-centered`}
        >
          Hello! I´m <b>David Shugert</b> a Fullstack Developer based in Mexico!
        </p>
      </div>
    </div>
  )
}
export default Hero