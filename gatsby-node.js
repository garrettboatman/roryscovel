/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  // const { createPage } = actions
  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })
}

exports.createSchemaCustomization = ({ actions, schema, getNode }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: 'ContentfulShow',
      interfaces: ['Node'],
      fields: {
        isFuture: {
          type: 'Boolean!',
          resolve: source => new Date(source.date) > new Date(),
        },
		  // ...declare other fields here...
      },
    }),
  ]);
};
