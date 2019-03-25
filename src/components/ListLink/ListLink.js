import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li>
    <Link
      to={props.to}
      activeStyle={{
        borderBottom: "3px solid #1cefef",
        paddingBottom: "5px",
      }}
    >
      {props.children}
    </Link>
  </li>
)

export default ListLink
