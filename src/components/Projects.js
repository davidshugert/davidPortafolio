import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProjectsStyles from "./projects.module.scss"

const Projects = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects(limit: 3) {
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
      className={`section is-size-7 is-size-6-tablet is-size-6-desktop is-paddingless ${ProjectsStyles.container}`}
    >
      <h1 className={`is-3 is-spaced has-text-weight-medium`}>Projects</h1>
      <div className={ProjectsStyles.cardContainer}>
        {projectsList.map(project => {
          return (
            <div className={`card ${ProjectsStyles.card}`}>
              <div className={`card-content ${ProjectsStyles.cardContent}`}>
                <figure class={ProjectsStyles.figure}>
                  <img
                    src={project.projectImage.resize.src}
                    className={ProjectsStyles.img}
                    alt={project.projectImage.title}
                  />
                </figure>
                <p className={"title is-5 " + ProjectsStyles.title}>
                  {project.title}
                </p>
                <div className={`content `}>
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
