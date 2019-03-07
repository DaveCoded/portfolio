const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/blog-post.js")
    const projectTemplate = path.resolve("src/templates/project-template.js")
    resolve(
      graphql(`
        {
          allContentfulBlogPost(limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
          allContentfulProject(limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulBlogPost.edges.forEach(edge => {
          createPage({
            path: `blog/${edge.node.slug}`,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
        result.data.allContentfulProject.edges.forEach(edge => {
          createPage({
            path: `projects/${edge.node.slug}`,
            component: projectTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
        return
      })
    )
  })
}
