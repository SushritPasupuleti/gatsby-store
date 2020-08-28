import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
const axios = require('axios');

const UnitItem = (props) => {

    const unit = props.data.mongodbGetEssentialsHospitalunits
    const [randomUser, setRandomUser] = React.useState();

    const getRandom = () => {
        axios.get('https://randomuser.me/api/').then((res) => {
            console.log("Response: ", res.data.results[0].name.first)
            setRandomUser(res.data.results[0].name.first)
        })
        // fetch(`https://randomuser.me/api/`)
        //   .then(response => response.json()) // parse JSON from request
        //   .then(resultData => {
        //     setRandomUser(resultData.results[0].name.first)
        //   })
    }

    //useEffect(() => getRandom, []);
    
    useEffect(() => {
        getRandom()
      }, [])

    return (
        <Layout>
            <div>
                <img src={unit.displayPicture} alt={unit.displayName} />
                <p>{unit.hospitalUnitName}</p>
                <h1>{unit.hospitalName}</h1>
                <p>Timings - Monday{unit.timings.Monday.hours.map(hour => (<span key={hour}>{hour}, </span>))}</p>

                <p>{unit.displayDescription}</p>
                <p>Patients: {randomUser}</p>
                {/* <p>Rating: {starsCount}</p> */}
                {/*<p>Published: {unit.publishedDate} | ISBN: {unit.isbn}</p>
                    {unit.categories.map(category => category)} */}
            </div>
        </Layout>
    )
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