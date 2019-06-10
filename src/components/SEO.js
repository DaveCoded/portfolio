import React, { Component } from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, desc, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        buildTime,
        siteMetadata: {
          defaultTitle,
          titleAlt,
          shortName,
          author,
          siteLanguage,
          logo,
          siteUrl,
          pathPrefix,
          defaultDescription,
          twitter,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: defaultDescription || desc,
        url: `${siteUrl}${pathname || "/"}`,
      }
      const realPrefix = pathPrefix === "/" ? "" : pathPrefix
      let schemaOrgJSONLD = [
        {
          "@context": "http://schema.org",
          "@type": "WebSite",
          "@id": siteUrl,
          url: siteUrl,
          name: defaultTitle,
          alternateName: titleAlt || "",
        },
      ]
      if (article) {
        schemaOrgJSONLD = [
          {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            "@id": seo.url,
            url: seo.url,
            name: title,
            alternateName: titleAlt || "",
            headline: title,
            image: {
              "@type": "ImageObject",
              url: seo.image,
            },
            description: seo.description,
            datePublished: buildTime,
            dateModified: buildTime,
            author: {
              "@type": "Person",
              name: author,
            },
            publisher: {
              "@type": "Organization",
              name: author,
              logo: {
                "@type": "ImageObject",
                url: siteUrl + realPrefix + logo,
              },
            },
            isPartOf: siteUrl,
            mainEntityOfPage: {
              "@type": "WebSite",
              "@id": siteUrl,
            },
          },
        ]
      }
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  banner: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  desc: null,
  banner: null,
  pathname: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        defaultTitle: title
        titleAlt
        shortName
        author
        siteLanguage
        logo
        siteUrl: url
        pathPrefix
        defaultDescription: description
        twitter
      }
    }
  }
`
