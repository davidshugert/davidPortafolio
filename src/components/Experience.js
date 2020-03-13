import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ExperienceStyles from "./experience.module.scss"

const jobs = jobs =>
  jobs.map(job => (
    <div className={`${ExperienceStyles.job}`}>
      <div className={`has-text-weight-strong ${ExperienceStyles.header}`}>
        <h5>{job.node.company}</h5>
        <h6>{job.node.date}</h6>
      </div>
      <p className={ExperienceStyles.title}>{job.node.role}</p>
    </div>
  ))

const Experience = props => {
  const {
    allContentfulJobs: { edges },
  } = useStaticQuery(graphql`
    query {
      allContentfulJobs(sort: { fields: createdAt, order: DESC }) {
        totalCount
        edges {
          node {
            company
            date
            role
          }
        }
      }
    }
  `)
  return (
    <section
      className={`section is-size-7 is-size-5-tablet is-size-4-desktop is-paddingless ${ExperienceStyles.container}`}
    >
      <div className={`container ${ExperienceStyles.subContainer}`}>
        <h1
          className={`title is-3 is-spaced has-text-white has-text-weight-medium ${ExperienceStyles.sectionTitle}`}
        >
          Experience
        </h1>
        <div className={`columns is-centered`}>
          <div className="column is-three-fifth-desktop is-60-tablet">
            {jobs(edges)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
