import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { graphql, Link } from 'gatsby'

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Interview Summary</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectPage {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
  }
`
