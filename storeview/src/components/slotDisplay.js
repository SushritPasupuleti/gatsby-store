import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
const axios = require('axios');

const SlotItem = (props) => {

    const unit = props.data.mongodbGetEssentialsHospitalslots
    const [randomUser, setRandomUser] = React.useState();

    return (
        <Layout>
            <div>
                <img src={unit.displayPicture} alt={unit.displayName} />
                <p>{unit.hospitalUnitName}</p>
                <h1>{unit.hospitalName}</h1>

                <p>{unit.displayDescription}</p>
                <p>Patients: {randomUser}</p>
                <p>Slot Size: {unit.slot.slotSize}</p>
                {/* <p>Rating: {starsCount}</p> */}
                {/*<p>Published: {unit.publishedDate} | ISBN: {unit.isbn}</p>
                    {unit.categories.map(category => category)} */}
            </div>
        </Layout>
    )
}

export default SlotItem

export const pageQuery = graphql`
  query($id: String!) {
    mongodbGetEssentialsHospitalslots(id: { eq: $id }) {
        id
        displayName
        displayPicture
        hospitalName
        displayDescription
        slot {
            slotDate
            slotReservedBy {
            _id
            dependency
            gender
            name
            number
            phoneNo
            visited
            }
            slotSize
            slotTime
            slotType
            slotsAvailable
        }
    }
}
`