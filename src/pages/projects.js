import { graphql, Link } from "gatsby"
import React from  "react"
// import { ProductCard } from "react-ui-cards"
import Layout from "../components/Layout"
import styled from "styled-components"

const Container = styled.section`
  display: flex;
  justify-content: center;
`
const Projects = ({ data }) => {
  const projects = data.allContentfulProjects.nodes
  return (
    <Layout className="container">
      <h1>My Projects</h1>
      <Container>
        {projects.map(project => {
          return (
            <Link to={`/projects/${project.slug}`} key={project.id}>
              {/* <ProductCard
                photos={[project.projectImage.resize.src]}
                productName={project.title}
                description={project.smallDescription.smallDescription}
                price=""
                url="/"
              /> */}
            </Link>
          )
        })}
      </Container>
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
