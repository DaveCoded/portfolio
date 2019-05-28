import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ListLink = props => (
  <li>
    <AniLink
      fade
      to={props.to}
      activeStyle={{
        backgroundColor: "#944781",
      }}
    >
      {props.children}
    </AniLink>
  </li>
)

export default ListLink
