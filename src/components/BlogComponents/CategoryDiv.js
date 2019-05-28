import React from "react"

const CategoryDiv = props => {
  let divColor = "yellow"
  switch (props.subject) {
    case "javascript":
      divColor = "#F0DB4E"
      break
    case "react":
      divColor = "#00D8FF"
      break
    case "css":
      divColor = "#2062AF"
      break
    case "opinion":
      divColor = "#792522"
      break
    case "gatsby":
      divColor = "#663399"
      break
    default:
      divColor = "#E69355"
      break
  }

  let styles = {
    backgroundColor: divColor,
    width: "2rem",
    height: "100%",
    gridRow: "1 / -1",
    gridColumn: "3",
    borderRadius: "0 5px 5px 0",
  }

  return <div style={styles} />
}

export default CategoryDiv
