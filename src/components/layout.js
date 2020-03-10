import React from "react"
import layoutStyles from "./layout.module.scss"
import Header from "./header"
import Footer from "./footer"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
