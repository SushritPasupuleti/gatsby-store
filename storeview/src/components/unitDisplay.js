import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

class UnitItem extends React.Component {
    render() {
        const unit = this.props.data.mongodbGetEssentialsHospitalunits

        return (
            <Layout>
                <div>
                    <img src={unit.displayPicture} />
                    <h1>{unit.hospitalName}</h1>
                    {/* <p>By {unit.authors.map(author => (<span>{author}, </span>))}</p> */}
                    {/* <p>{unit.longDescription}</p>
                    <p>Published: {unit.publishedDate} | ISBN: {unit.isbn}</p>
                    {unit.categories.map(category => category)} */}
                </div>
            </Layout>
        )
    }
}

export default UnitItem

export const pageQuery = graphql`
  query($id: String!) {
    mongodbGetEssentialsHospitalunits(id: { eq: $id }) {
        id
        displayName
        displayPicture
        hospitalName
        displayDescription
        hospitalUnitName
        hospitalUnitCategoryName
        openCheck
        slotSize
    }
  }
`