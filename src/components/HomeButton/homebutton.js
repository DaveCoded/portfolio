import React from "react"
import house from "../../assets/svg/home-blue.svg"

const HomeButton = () => (
  <img
    src={house}
    style={{
      width: "5.2rem",
      display: "inline-block",
      marginLeft: "3.8rem",
      marginTop: "1rem",
    }}
    alt="Home link"
  />
)

export default HomeButton
