import React from "react"
import heroStyles from "./hero.module.scss"
import { graphql } from "gatsby"
import HeroImage from "../../images/home.jpg"

const Hero = data => {
  console.log(data)
  return (
    <div className={`container ${heroStyles.container}`}>
      <div
        className={`columns is-vcentered is-centered ${heroStyles.container}`}
      >
        <img src={HeroImage} className="column is-half" alt="David´s Hero" />
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
export const query = graphql`
  query {
    file(relativePath: { eq: "src/images/home.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
