import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout"
import Head from "../components/Head"
import projectStyles from "./project.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      title
      richDescription {
        json
      }
      projectLink
    }
  }
`

const ProjectTemplate = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} className={` ${projectStyles.img}`} />
      },
    },
  }

  return (
    <Layout>
      <section className={projectStyles.section}>
        <div className={`container ${projectStyles.container}`}>
          <Head title={props.data.contentfulProjects.title} />
          <div className={projectStyles.buttonContainer}>
            <Link to="/projects">
              <button className="button  is-link">Back</button>
            </Link>
            <a href={props.data.contentfulProjects.projectLink}>
              <button className="button is-success is-light is-rounded">
                Project Page
              </button>
            </a>
          </div>
          {documentToReactComponents(
            props.data.contentfulProjects.richDescription.json,
            options
          )}
        </div>
      </section>
    </Layout>
  )
}

export default ProjectTemplate
