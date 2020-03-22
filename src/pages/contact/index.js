import React from "react"
import Layout from "../../components/Layout"
import Head from "../../components/Head"
import styled from "styled-components"
import contactStyles from "./contact.module.scss"
import { media } from "../../utils/styles"

const FormStyled = styled.form`
  padding: 2em;
  ${media.ws`
    padding: 1em;
  `}
  vertical-align: middle;
  display: flex;
  margin: 0px auto;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`
const FormContainer = styled.section`
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  vertical-align: middle;
`
const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />

      <div className="container">
        <section className={contactStyles.section}>
          <h1 className="title">Get in touch with me</h1>
          <h2 className="subtitle">
            Email:
            <a href="mailto:shugertdavid@gmail.com">shugertdavid@gmail.com</a>
          </h2>
        </section>
        <FormContainer>
          <FormStyled method="post" action="/contact/thanks/" netlify-honeypot="bot-field" data-netlify="true" name="ContactForm">
          <input type="hidden" name="form-name" value="contact" />
            <div className="field">
              <label className="label" htmlFor="name">
                Name:
                <div className="control">
                  <input
                    className={`input ${contactStyles.name}`}
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Text input"
                  />
                </div>
              </label>
            </div>

            <div className="field">
              <label className="label" htmlFor="email">
                Email:
                <div className="control has-icons-left has-icons-right">
                  <input
                    className={`input ${contactStyles.email}`}
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="email@example.com"
                  />
                </div>
              </label>
            </div>

            <div className="field">
              <label className="label" htmlFor="message">
                Message:
                <div className="control" className={contactStyles.message}>
                  <textarea
                    className={`textarea`}
                    placeholder="Add your message here...."
                    name="message"
                    id="message"
                    required
                  ></textarea>
                </div>
              </label>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </FormStyled>
        </FormContainer>
      </div>
    </Layout>
  )
}
export default Contact
