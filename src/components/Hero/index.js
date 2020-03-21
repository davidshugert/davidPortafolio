import React from "react"
import heroStyles from "./hero.module.scss"
import { graphql } from "gatsby"
import HeroImage from "../../images/home.webp"
import Typist from "react-typist"
import styled from "styled-components"

const TypistStyled = styled(Typist)`
  letter-spacing: 8px;
  text-transform: uppercase;
  margin-top: 1em;
  margin-bottom: 1em;

`
const Hero = data => {
  console.log(data)
  const delay = 500
  return (
    <div className={`container ${heroStyles.container}`}>
      <div
        className={`columns is-vcentered is-centered ${heroStyles.container}`}
      >
        <img src={HeroImage} className="column is-half" alt="David´s Hero" />
        <div
          className={`column is-half is-size-3 is-size-4-mobile has-text-centered`}
        >
          <p>
            Hello! I´m <b>David Shugert</b> a Fullstack Developer based in
            Mexico!
          </p>
          <TypistStyled cursor={{ show: false }} avgTypingDelay={100} stdTypingDelay={15} className={`is-size-2 is-size-3-mobile`}>
            <strong>I create </strong> Websites
            <Typist.Backspace count={9} delay={delay} />
            <span> Web Apps</span>
            <Typist.Backspace count={9} delay={delay} />
            <span> Servers</span>
            <Typist.Backspace count={17} delay={delay} />
            <strong>I make </strong> robots
            <Typist.Backspace count={14} delay={delay} />
            <strong>But mostly</strong> Cool Web Stuff!
          </TypistStyled>
        </div>
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
