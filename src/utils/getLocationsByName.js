import React, { useState, useEffect } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { useApolloClient } from '@apollo/react-hooks'

import { isString } from './helpers'

const LOCATION_QUERY = gql`
  query($name: String!) {
    locations(name: $name) {
      id
      type
      name
    }
  }
`

/**
 * Wraps useQuery() Hook to get Locations by name.
 *
 * @param name  string  Location to search for.
 * @return {QueryResult<any, {name: *}>}
 */
const getLocationsByName = name => {
  const [currentReturn, setCurrentReturn] = useState({})

  useEffect(() => {
    if (!name || !isString(name)) {
      setCurrentReturn({ loading: true, data: { locations: [] } })
    } else {
      const { loading, data } = useQuery(LOCATION_QUERY, {
        variables: { name },
      })
      setCurrentReturn({ loading, data })
    }
  }, [name])

  console.log(currentReturn)
  return currentReturn
}

// const getLocationsByName = name => {
//   const client = useApolloClient(LOCATION_QUERY)
//   const [currentReturn, setCurrentReturn] = useState({})
//
//   const getLocations = async () => {
//     const { data } = await client.query({
//       query: LOCATION_QUERY,
//       variables: { name }
//     })
//     setCurrentReturn(data)
//   }
//
//   useEffect(() => {
//     (getLocations())
//   }, [name])
//
//   return currentReturn
// }

export default getLocationsByName
