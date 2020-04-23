import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Card = styled.div`
  display: grid;
  grid-template-columns: 250px;
  grid-template-rows: 180px 250px;
  grid-template-areas: "image" "text";
  border-radius: 25px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  justify-items: center;

  transition: 0.5s ease;
  cursor: pointer;
  margin: 15px;

  :hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }
`
const CardImage = styled.img`
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  grid-area: image;
  height: 100%;
`
const DescriptionContainer = styled.div`
  grid-area: text;
  padding: 15px 15px 10px 15px;
  width: 100%;
  height: 100%;
  text-overflow: ellipsis;
  overflow: scroll;
  white-space: wrap;

`
const ProjectTitle = styled.h1`
  color: #2c3e50;
  margin: 5px auto;
  text-transform: uppercase;
  font-size: 1.5em;
`
const ProjectDescription = styled.p`
  color: #2c3e50;
  text-overflow: ellipsis;
`
const ProjectCard = ({ title, slug, description, imgSrc, customeClass }) => {
  return (
    <Link to={`/projects/${slug}`} className={customeClass}>
      <Card>
        <CardImage src={imgSrc} alt={title} />
        <DescriptionContainer>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescription>{description}</ProjectDescription>
        </DescriptionContainer>
      </Card>
    </Link>
  )
}

export default ProjectCard
