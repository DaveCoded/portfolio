import React from "react"

import classes from "./header.module.css"

const Header = props => (
  <div>
    <h1 className={classes.heading}>{props.children}</h1>
  </div>
)

export default Header
