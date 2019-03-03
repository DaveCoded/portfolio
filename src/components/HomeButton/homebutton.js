import React from "react"
import house from "../../assets/svg/home-blue.svg"

const HomeButton = () => (
  <img
    src={house}
    style={{
      width: "4rem",
      display: "inline-block",
      marginLeft: "3.8rem",
      marginTop: "-0.2rem",
    }}
    alt="Home link"
  />
)

export default HomeButton
