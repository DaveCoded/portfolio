import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ListLink = props => (
  <li>
    <AniLink
      fade
      to={props.to}
      activeStyle={{
        backgroundColor: "#f1f1f1",
        color: "var(--pink)",
      }}
    >
      {props.children}
    </AniLink>
  </li>
)

export default ListLink
