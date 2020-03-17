import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const CardContainer = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 400px;
  background-color: #ecf0f1;
`
const CardImage = styled.img`
  width: 300px;
`
const DescriptionContainer = styled.div`
  background-color: grey;
`
const ProjectTitle = styled.h1`
  color: #2c3e50;
  margin: 5px auto;
  text-transform: uppercase;
  font-size: 1.5em;
`
const ProjectDescription = styled.p`
  color: #2c3e50;
`
const ProjectCard = ({ title, slug, description, imgSrc }) => {

  return (
    <Link to={`/projects/${slug}`}>
      <CardContainer>
        <CardImage src={imgSrc} alt={title} />
        <DescriptionContainer>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescription>{description}</ProjectDescription>
        </DescriptionContainer>
      </CardContainer>
    </Link>
  )
}

export default ProjectCard
