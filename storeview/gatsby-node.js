/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const { data } = await graphql(`
    {
        allMongodbGetEssentialsHospitalunits {
            edges {
                node {
                    id
                }
            }
        }
    }
  `)

    const pageTemplate = path.resolve('./src/components/unitDisplay.js')

    console.log("Data: ", data)
    //console.log("Data: ", data.allMongodbGetEssentialsHospitalunits.nodes)
    console.table(data.allMongodbGetEssentialsHospitalunits.nodes)

    for (const { node } of data.allMongodbGetEssentialsHospitalunits.edges) {
        console.log("Node: ", node)
        createPage({
            path: `/unit/${node.id}/`,
            component: pageTemplate,
            context: {
                id: node.id,
            },
        })
    }
}