import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

class UnitItem extends React.Component {
    render() {
        const unit = this.props.data.mongodbGetEssentialsHospitalunits

        return (
            <Layout>
                <div>
                    <img src={unit.displayPicture} alt={unit.displayName}/>
                    <h1>{unit.hospitalName}</h1>
                    <p>Timings - Monday{unit.timings.Monday.hours.map(hour => (<span key={hour}>{hour}, </span>))}</p>
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
      timings {
        Friday {
          hours
          open
        }
        Monday {
          hours
          open
        }
        Saturday {
          hours
          open
        }
        Thursday {
          hours
          open
        }
        Sunday {
          hours
          open
        }
        Tuesday {
          hours
          open
        }
        Wednesday {
          hours
          open
        }
      }
      verified
    }
  }
`