import React from "react"
import heroStyles from "./hero.module.scss"

const Hero = () => {
  return (
    <div className={`container ${heroStyles.container}`}>
      <p className={`columns is-vcentered is-centered ${heroStyles.container}`}>
        <img src={"/images/home.jpg"} className="column is-half" alt="David´s Hero"></img>
        <p
          className={`column is-half is-size-3 is-size-4-mobile has-text-centered`}
        >
          Hello! I´m <b>David Shugert</b> a Fullstack Developer based in Mexico!
        </p>
      </p>
    </div>
  )
}
export default Hero
