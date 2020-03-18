const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve("./src/templates/project.js")
  const { errors, data } = await graphql(`
    query {
      allContentfulProjects {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  if (errors) {
    console.log("errors")
    throw new Error("There was an error" + errors)
  }

  data.allContentfulProjects.edges.forEach(edge => {
    console.log(edge.node.slug)
    createPage({
      component: projectTemplate,
      path: `/projects/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {}
