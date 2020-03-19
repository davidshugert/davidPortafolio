import React from "react"
import layoutStyles from "./layout.module.scss"
import Header from "./Header"
import Footer from "./Footer"
import "./Styles.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
        <Header />
      <div className={layoutStyles.content}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
