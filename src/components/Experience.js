import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { IoIosDocument } from "react-icons/io"

import ExperienceStyles from "./experience.module.scss"

const jobs = jobs =>
  jobs.map(job => (
    <div
      className={`has-text-white ${ExperienceStyles.job}`}
      key={job.node.company}
    >
      <div
        className={`has-text-white has-text-weight-strong ${ExperienceStyles.header}`}
      >
        <h5 className={ExperienceStyles.white}>{job.node.company}</h5>
        <h6 className={`is-size-7 is-size-4-desktop ${ExperienceStyles.white}`}>
          {job.node.date}
        </h6>
      </div>
      <p
        className={`is-size-7 is-size5-desktop is-italic ${ExperienceStyles.title}`}
      >
        {job.node.role}
      </p>
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
      className={`section is-size-6 is-size-5-tablet is-size-4-desktop is-paddingless ${ExperienceStyles.container}`}
    >
      <div className={`container ${ExperienceStyles.subContainer}`}>
        <a
          href="/DavidShugert2020.pdf"
          className={`title is-3 is-spaced has-text-white has-text-weight-medium ${ExperienceStyles.sectionTitle}`}
        >
          <h1>Experience</h1>
          <div >
            <IoIosDocument className ={ExperienceStyles.sectionIcon}size={"0.6em"} />
          </div>
        </a>
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
