import React from "react"
import heroStyles from "./hero.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import Typist from "react-typist"
import styled from "styled-components"
import Img from "gatsby-image"

const TypistStyled = styled(Typist)`
  letter-spacing: 7px;
  text-transform: uppercase;
  margin-top: 1em;
  margin-bottom: 1em;
`
export default () => {
  const delay = 500
  const data = useStaticQuery(graphql`
    query {
      imageSharp(original: { src: { regex: "/home/" } }) {
        id
        fluid(maxWidth: 680, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)
  return (
    <div className={`container ${heroStyles.container}`}>
      <div
        className={`columns is-vcentered is-centered ${heroStyles.container}`}
      >
        <div className="column is-half">
          <Img fluid={data.imageSharp.fluid} alt="David´s Hero" />
        </div>

        <div
          className={`column is-half is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-centered`}
        >
          <p>
            Hello! I´m <b>David Shugert</b> a Fullstack Developer based in
            Mexico!
          </p>
          <TypistStyled
            cursor={{ show: false }}
            avgTypingDelay={100}
            stdTypingDelay={15}
          >
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
