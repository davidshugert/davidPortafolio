import React from "react"
import Layout from "../../components/Layout"
import Head from "../../components/Head"
import styled from "styled-components"
import { Link } from "gatsby"
import { IoMdArrowBack } from "react-icons/io"

const FormContainer = styled.section`
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  flex-direction: column;
  align-items: center;
  height: 100vh;
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
  color:#4a4a4a;
`
const H1Styled = styled.h1`
  font-size: 1.5em;
  font-weight:bold;
  max-width:70%;
  margin-bottom:2em;
  color:#4a4a4a;
`
const Contact = () => {
  return (
    <Layout>
      <Head title="Thanks" />

      <div className="container">
        <FormContainer>
          <H1Styled>
            Thanks for your submission. I´ll try to respond as soon as possible!
          </H1Styled>
          <LinkStyled to="/">
            <IoMdArrowBack />
            Go Back
          </LinkStyled>
        </FormContainer>
      </div>
    </Layout>
  )
}
export default Contact
