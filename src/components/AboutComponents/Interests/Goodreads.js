import React from "react"
import { StaticQuery, graphql } from "gatsby"

import styles from "./Goodreads.module.scss"

const GoodReads = () => (
  <StaticQuery
    query={graphql`
      query {
        goodreadsShelf {
          reviews {
            book {
              title
              link
              image_url
              authors {
                name
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { book } = data.goodreadsShelf.reviews[0]
      return (
        <div className={styles.goodreads}>
          <h3>Currently reading</h3>
          <p>
            <a
              href={book.link}
              style={{ color: "rgb(235, 52, 132)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {book.title}
            </a>
            by {book.authors[0].name}
          </p>
          <img src={book.image_url} alt="Currently reading" />
        </div>
      )
    }}
  />
)

export default GoodReads
