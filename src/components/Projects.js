import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProjectsStyles from "./projects.module.scss"

const Projects = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects {
        nodes {
          title
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
  `)
  const projectsList = data.allContentfulProjects.nodes
  return (
    <section
      className={`section is-size-7 is-size-5-tablet is-size-4-desktop is-paddingless ${ProjectsStyles.container}`}
    >
      <h1 className={`is-3 is-spaced has-text-weight-medium`}>Projects</h1>
      <div className={ProjectsStyles.cardContainer}>
        {projectsList.map(project => {
          return (
            <div className={`card ${ProjectsStyles.card}`}>
              <div className="card-content">
                <p className="title is-4">{project.title}</p>
                <figure class="">
                  <img
                    src={project.projectImage.resize.src}
                    alt={project.projectImage.title}
                  />
                </figure>
                <div className="content">
                  {project.smallDescription.smallDescription}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
