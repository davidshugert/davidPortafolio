import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const PageTitle = styled.h1``
const Content = styled.section``
const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutMe {
        edges {
          node {
            about {
              about
            }
            myPhoto {
              title
              fixed(width: 200, quality: 100) {
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
    node: {
      about: { about },
      myPhoto,
    },
  } = edges[0]
  console.log(about)
  console.log(myPhoto)
  return (
    <Layout>
      <div className="container">
        <PageTitle className={`title is-3 is-spaced  has-text-weight-medium`}>
          About Me
        </PageTitle>
        <Content className={``}>
          <img src={myPhoto.fixed.src} alt={myPhoto.title}/>
          <p>{about}</p>
        </Content>
      </div>
    </Layout>
  )
}
export default About
