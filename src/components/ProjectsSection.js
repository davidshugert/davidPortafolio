import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import ProjectsStyles from "./projects.module.scss"
import ProjectCard from "./ProjectCard"

const ProjectsSection = props => {
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
              // <Link to={`/projects/${project.slug}`}>
              //   <div
              //     className={`card ${ProjectsStyles.card}`}
              //     key={project.title}
              //   >
              //     <div className={`card-content ${ProjectsStyles.cardContent}`}>
              //       <figure className={ProjectsStyles.figure}>
              //         <img
              //           src={project.projectImage.resize.src}
              //           className={ProjectsStyles.img}
              //           alt={project.projectImage.title}
              //         />
              //       </figure>
              //       <p className={"title is-5 "}>{project.title}</p>
              //       <div className={`content `}>
              //         {project.smallDescription.smallDescription}
              //       </div>
              //     </div>
              //   </div>
              // </Link>
              <ProjectCard
                title={project.title}
                description={project.smallDescription.smallDescription}
                imgSrc={project.projectImage.resize.src}
                slug={project.slug}
                key={project.slug}
              ></ProjectCard>
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
