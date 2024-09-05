import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Personal Web</h2>
          <h3>React & Vue</h3>
          <p>
            {title} - {description}
          </p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
