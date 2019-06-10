const config = require("./config/site")

module.exports = {
  siteMetadata: {
    ...config,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `gpj7wxbgz0qf`,
        accessToken: `794a3d95e6e779900923d5c9050b6cb99f2ab9d35e5e64eee69c49aee2702118`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-transition-link",
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`300`, `400`, `700`],
          },
          {
            family: `Lora`,
            variants: [`400`, `400i`, `700`, `700i`],
          },
        ],
      },
    },
    {
      resolve: "@jamesdanylik/gatsby-source-goodreads",
      options: {
        key: "yeYsYflJgVmwmObQSkvFyQ",
        id: "20537975",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-141784999-1`
      }
    },
    `gatsby-plugin-netlify`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.title,
        short_name: config.shortName,
        description: config.description,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "standalone",
        icon: config.favicon,
      },
    },
    "gatsby-plugin-offline",
  ],
}
