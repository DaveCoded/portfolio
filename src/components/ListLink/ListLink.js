import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ListLink = props => (
  <li>
    <AniLink
      fade
      to={props.to}
      activeStyle={{
        borderBottom: "2px solid #eb3484",
        paddingBottom: "5px",
      }}
    >
      {props.children}
    </AniLink>
  </li>
)

export default ListLink
