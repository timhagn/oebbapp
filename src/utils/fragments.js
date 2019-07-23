import gql from 'graphql-tag'

export const oebbGeoLocation = gql`
  fragment oebbGeoLocation on GeoLocation {
    type
    id
    latitude
    longitude
  }
`

export const oebbProducts = gql`
  fragment oebbProducts on Products {
    nationalExpress
    national
    interregional
    regional
    suburban
    bus
    ferry
    subway
    tram
    onCall
  }
`
