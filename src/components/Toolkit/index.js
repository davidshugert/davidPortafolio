import React from "react"
import styled from "styled-components"
import myTools from "./myTools"
import Particles from "react-particles-js"
import config from "./particleConfig.JS"

const ToolkitSectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 2em auto !important;
`
const ToolkitContainer = styled.div`
  width: 1000px;
  min-height: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 2em;
`
const ToolContainer = styled.div`
  padding: 5px 10px;
  border-radius: 10px;
  margin: 5px;
  background-color: #fafafa;
  transition: 0.5s ease;
  :hover {
    background-color: #dcd7d7;
    transform: scale(1.02);
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.6);
  }
`
const createToolContainer = tools => {
  return tools.map(tool => {
    return <ToolContainer>{tool.name}</ToolContainer>
  })
}
const SectionTitle = styled.h1`
  margin: 1em;
`
const ToolkitSection = params => {
  return (
    // <Particles params={config}>
    <ToolkitSectionContainer>
      <SectionTitle
        className={`title is-3 is-spaced  has-text-weight-medium is-pulled-left is-underlined`}
      >
        My Toolkit
      </SectionTitle>
      <ToolkitContainer>{createToolContainer(myTools)}</ToolkitContainer>
    </ToolkitSectionContainer>
    // </Particles>
  )
}
export default ToolkitSection
