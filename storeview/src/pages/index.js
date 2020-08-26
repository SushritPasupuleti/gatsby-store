import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { graphql } from "gatsby"

const IndexPage = ({data}) => {

  console.log("Logging Data: ", data)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      <pre>{JSON.stringify(data.allMongodbGetEssentialsHospitallists.nodes, null, 4)}</pre>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMongodbGetEssentialsHospitallists {
      nodes {
        id
        hospitalUnits {
          name
          type
        }
      }
    }
  }
`

export default IndexPage
