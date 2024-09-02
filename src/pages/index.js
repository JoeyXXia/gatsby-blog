import React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/home.module.css"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Personal Web</h2>
          <h3>React & Vue</h3>
          <p>frontend developer & coder</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
      </section>
    </Layout>
  )
}
