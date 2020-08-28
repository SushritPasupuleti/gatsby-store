/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const { data: unitsData } = await graphql(`
    {
        allMongodbGetEssentialsHospitalunits {
            edges {
                node {
                    id
                    hospitalUnitName
                    hospitalUnitCategoryName
                    hospitalName
                }
            }
        }
    }
  `)

  const { data: slotsData } = await graphql(`
    {
        allMongodbGetEssentialsHospitalslots {
            edges {
                node {
                    id
                    hospitalName
                    slot {
                        slotDate
                        slotTime
                        slotType
                      }
                }
            }
        }
    }
  `)

    const unitPageTemplate = path.resolve('./src/components/unitDisplay.js')
    const slotPageTemplate = path.resolve('./src/components/slotDisplay.js')

    console.log("Data: ", unitsData)
    //console.log("Data: ", data.allMongodbGetEssentialsHospitalunits.nodes)
    console.table(unitsData.allMongodbGetEssentialsHospitalunits.nodes)

    for (const { node } of unitsData.allMongodbGetEssentialsHospitalunits.edges) {
        console.log("Node: ", node)
        createPage({
            //path: `/unit/${node.id}/`,
            path: `/${node.hospitalName}/${node.hospitalUnitCategoryName}/${node.id}/`,
            component: unitPageTemplate,
            context: {
                id: node.id,
            },
        })
    }

    for (const { node } of slotsData.allMongodbGetEssentialsHospitalslots.edges) {
        console.log("Node: ", node)
        createPage({
            path: `/${node.hospitalName}/slots/${node.slot.slotType}/${node.slot.slotDate}/${node.slot.slotTime}/${node.id}/`,
            //path: `/${node.hospitalName}/${node.hospitalUnitCategoryName}/${node.id}/`,
            component: slotPageTemplate,
            context: {
                id: node.id,
            },
        })
    }
}
