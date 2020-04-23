import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

import Layout from "../components/Layout"
import Head from "../components/Head"
import projectStyles from "./project.module.scss"
import projectHeroImg from "../images/projectBackground.jpg"
import { IoMdArrowBack } from "react-icons/io"
import { FaExternalLinkAlt } from "react-icons/fa"
import styled from "styled-components"

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

const Icon = styled.a`
  text-decoration: none;
  color: black;
  margin-bottom: 5px;
  :hover {
    color: grey;
  }
  display: inline-flex;
  justify-content: center;
  align-items: center;
`
const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  margin-bottom: 5px;
  :hover {
    color: grey;
  }
  display: inline-flex;
  justify-content: center;
  align-items: center;
`
const Text = ({ children }) => (
  <p className={projectStyles.paragraph}>{children}</p>
)
const ProjectTemplate = props => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        if (node.data.target.fields) {
          const alt = node.data.target.fields.title["en-US"]
          const url = node.data.target.fields.file["en-US"].url
          return <img alt={alt} src={url} className={` ${projectStyles.img}`} />
        }
        return <p>No image</p>
      },
      [BLOCKS.HEADING_1]: node => {
        return <h1 className={`title is-2`}>{node.content[0].value}</h1>
      },
      [BLOCKS.HEADING_2]: node => {
        return <h1 className={`title is-3`}>{node.content[0].value}</h1>
      },
      [BLOCKS.HEADING_3]: node => {
        return <h1 className={`title is-4`}>{node.content[0].value}</h1>
      },
      [BLOCKS.HEADING_4]: node => {
        return <h1 className={`title is-5`}>{node.content[0].value}</h1>
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Text>{children}</Text>
      },
      [BLOCKS.UL_LIST]: (node, children) => {
        return <ul className={projectStyles.ul}>{children}</ul>
      },
    },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulProjects.title} article={true} />
      <section className={projectStyles.section}>
        <div className={projectStyles.heroImageWrapper}>
          <img
            src={projectHeroImg}
            alt="Project Hero"
            className={projectStyles.heroImg}
          />
        </div>
        <div className={`${projectStyles.container}`}>
          <article className={projectStyles.article}>
            <div className={projectStyles.buttonContainer}>
              <LinkStyled to="/projects">
                <IoMdArrowBack></IoMdArrowBack>
                <span>&nbsp; Back to Projects</span>
              </LinkStyled>

              <Icon href={props.data.contentfulProjects.projectLink}>
                <button className="button is-success  is-rounded">
                  <span>Project Page &nbsp; </span>
                  <FaExternalLinkAlt />
                </button>
              </Icon>
            </div>
            {documentToReactComponents(
              props.data.contentfulProjects.richDescription.json,
              options
            )}
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default ProjectTemplate
