import React from "react"
import { Link } from "gatsby"
import ExperienceStyles from "./experience.module.scss"

const jobList = [
  {
    company: "Ocean Freight Exchange",
    date: "June 2019 - Current",
    title: "Fullstack Developer",
  },
  {
    company: "Briko Robotics",
    date: "Jan 2019 - Jun 2019",
    title: "Project Developer",
  },
  {
    company: "Robert Bosch Gmb",
    date: "Feb 2018 - Aug 2018",
    title: "Software Developer",
  },
]

const jobs = jobList.map(job => (
  <div className={`${ExperienceStyles.job}`}>
    <div className={`has-text-weight-strong ${ExperienceStyles.header}`}>
      <h5>{job.company}</h5>
      <h6>{job.date}</h6>
    </div>
    <p className={ExperienceStyles.title}>{job.title}</p>
  </div>
))

const Experience = props => {
  return (
    <section  className={`section is-size-7 is-size-4-tablet is-size-3-desktop is-paddingless ${ExperienceStyles.container}`}>
      <div className="container">
        <h1
          className={`title is-3 is-spaced has-text-white has-text-weight-medium ${ExperienceStyles.sectionTitle}`}
        >
          Experience
        </h1>
        <div className={`columns is-centered`}>
          <div className="column is-three-fifth-desktop is-60-tablet">{jobs}</div>
        </div>
      </div>
    </section>
  )
}

export default Experience
