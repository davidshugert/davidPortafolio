import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { ProductCard } from "react-ui-cards"

import ProjectsStyles from "./projects.module.scss"
import { useEffect } from "react"

const ProjectsSection = props => {
  // useEffect(() => {
  //   Array.from(
  //     document.getElementsByClassName("styles__price-tag___UwO7P")
  //   ).forEach(e => {
  //     e.style.display = "none"
  //   })
  // }, [])
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects(limit: 3) {
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
  `)
  const projectsList = data.allContentfulProjects.nodes
  return (
    <section
      className={`section is-size-6 is-paddingless ${ProjectsStyles.section}`}
    >
      <section className={`container ${ProjectsStyles.container}`}>
        <h1
          className={`title is-3 is-spaced  has-text-weight-medium ${ProjectsStyles.title}`}
        >
          Projects
        </h1>
        <div className={ProjectsStyles.cardContainer}>
          {projectsList.map(project => {
            return (
              <Link to={`/projects/${project.slug}`} key={project.id}>
                <ProductCard
                  photos={[project.projectImage.resize.src]}
                  productName={project.title}
                  description={project.smallDescription.smallDescription}
                />
              </Link>
            )
          })}
        </div>
        <Link to="/projects" className={ProjectsStyles.link}>
          <button className={`button is-link ${ProjectsStyles.button}`}>
            View More
          </button>
        </Link>
      </section>
    </section>
  )
}

export default ProjectsSection
