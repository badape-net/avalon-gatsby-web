const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const characterPostTemplate = path.resolve(`src/templates/character-template.js`)
  const result = await graphql(`
    query {
      directus {
        character {
          slug
        }
      }
    }
  `)
  
  result.data.directus.character.forEach(character => {
    createPage({
      path: `/character/${character.slug}`,
      component: characterPostTemplate,
      context: {
        slug: character.slug,
      },
    })
  })
}