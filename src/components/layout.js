import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <div className="footer">
        <footer>
          <p>Copyright 2024 Joey Xia</p>
        </footer>
      </div>
    </div>
  )
}
