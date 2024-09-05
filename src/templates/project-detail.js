import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/project-detail.module.css"

export default function ProjectDetails({ data, actions }) {
  const { html } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
      }
    }
  }
`
