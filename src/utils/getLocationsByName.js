import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

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
 * @param name  string  Location to search for.
 * @return {QueryResult<any, {name: *}>}
 */
const getLocationsByName = name => {
  if (!name || !isString(name)) return { loading: false, data: [] }
  return useQuery(LOCATION_QUERY, { variables: { name } })
}

export default getLocationsByName
