import { graphql } from "gatsby"
import React from "react"
import ProjectCard from "../components/ProjectCard"
import Layout from "../components/Layout"
import styled from "styled-components"

const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const PageTitle = styled.h1``
const Projects = ({ data }) => {
  const projects = data.allContentfulProjects.nodes
  return (
    <Layout>
      <div className="container">
        <PageTitle
          className={`title is-3 is-spaced  has-text-weight-medium`}
        >
          My Projects
        </PageTitle>
        <Container>
          {projects.map(project => {
            return (
              <ProjectCard
                title={project.title}
                slug={project.slug}
                description={project.smallDescription.smallDescription}
                imgSrc={project.projectImage.resize.src}
              />
            )
          })}
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulProjects {
      nodes {
        title
        slug
        smallDescription {
          smallDescription
        }
        projectImage {
          title
          resize(width: 200, quality: 100) {
            src
          }
        }
      }
    }
  }
`
export default Projects
