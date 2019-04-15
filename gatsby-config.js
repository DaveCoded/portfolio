module.exports = {
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
    `gatsby-plugin-transition-link`,
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
  ],
}
