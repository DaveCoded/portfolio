import React from "react"

import Intro from "../AboutComponents/Intro/Intro"
import Coding from "../AboutComponents/Coding/Coding"
import Tech from "../AboutComponents/Tech/Tech"
import Interests from "../AboutComponents/Interests/Interests"

const AboutConditional = props => {
  switch (props.conditional) {
    case "intro":
      return <Intro />
    case "coding":
      return <Coding />
    case "tech":
      return <Tech />
    case "interests":
      return <Interests />
    default:
      return <Intro />
  }
}

export default AboutConditional
