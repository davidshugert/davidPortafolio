import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import aboutMeStyles from "./aboutMeStyles.module.scss"
import Head from "../components/Head"

const PageTitle = styled.h1``
const Content = styled.section``
const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutMe {
        edges {
          node {
            myPhoto {
              title
              fixed(width: 200, height: 200, quality: 70) {
                src
              }
            }
          }
        }
      }
    }
  `)
  const {
    allContentfulAboutMe: { edges },
  } = data
  const {
    node: { myPhoto },
  } = edges[0]
  return (
    <Layout>
      <Head title="About Me" />
      <div className={`container ${aboutMeStyles.mainContainer}`}>
        <PageTitle
          className={`title is-3 is-spaced  has-text-weight-medium ${aboutMeStyles.aboutTitle}`}
        >
          About Me
        </PageTitle>
        <Content className={``}>
          <div className={aboutMeStyles.aboutMeContainer}>
            <img
              src={myPhoto.fixed.src}
              alt={myPhoto.title}
              align="left"
              className={`is-rounded ${aboutMeStyles.image}`}
            />
            <h3 className={aboutMeStyles.title}>
              Hello, I´m David! A full-stack developer currently working in
              <a href="https://goo.gl/maps/RrnDuu1AhNjzEQiW9">
                <b className={aboutMeStyles.locationText}>
                  {" "}
                  Guadalajara, Mexico📍
                </b>
              </a>
              .
            </h3>
            <p className={aboutMeStyles.message}>
              I mostly work with Node and Javascript. I like to try new
              frameworks and tools that would make my workflow and productivity
              much faster. I consider myself a passionate hobbyist, tinkerer (I
              studied mechatronics, I´m not afraid of hardware by any means
              <span aria-label="Emoji with tongue out" role="img">
                😛
              </span>
              ) and software developer with a multicultural and open
              perspective. Geek by nature. I´ve had previous international
              experience by working as a back-end and tooling developer. I enjoy
              developing projects from scratch, especially designing, building
              and of course programming them.
            </p>
          </div>
          <section className="toolkitContainer"></section>
        </Content>
      </div>
    </Layout>
  )
}
export default About
