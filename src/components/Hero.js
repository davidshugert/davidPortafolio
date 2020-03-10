import React from "react"
import heroStyles from "./hero.module.scss"

const Hero = props => {
  return (
    <div className="container">
      <p
        className={heroStyles.container}
        className="columns is-vcentered is-centered is-desktop"
      >
        <img
          src={"/images/home.jpg"}
          className="column"
          className={heroStyles.heroImage}
        ></img>
        <p
          className={heroStyles.heroText}
          className="column is-half is-size-1 has-text-centered"
        >
          {" "}
          Hello! I´m <b>David Shugert</b> a Fullstack Developer based in Mexico!
          <span role="img" aria-label="sheep"></span>
        </p>
      </p>
    </div>
  )
}
export default Hero
