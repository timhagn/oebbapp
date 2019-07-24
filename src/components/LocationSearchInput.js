import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import Autocomplete from './Autocomplete'
import getLocationsByName from '../utils/getLocationsByName'
import { isObject, isSelected, isString } from '../utils/helpers'
import { useApolloClient } from '@apollo/react-hooks'
const _ = require('lodash')
import gql from 'graphql-tag'

const LOCATION_QUERY = gql`
  query($name: String!) {
    locations(name: $name) {
      id
      type
      name
    }
  }
`

const LocationSearchInput = ({
  placeholder,
  // selectedLocation,
  // onLocationSelected,
}) => {
  const [currentLocation, setCurrentLocation] = useState({})
  const [currentData, setCurrentData] = useState({})
  const [locationSearch, setLocationSearch] = useState(``)

  // const { loading, data } = getLocationsByName(locationSearch)

  // TODO: Return locations but doesn't update autocomplete data...
  // TODO: Build own autocomplete and use Context / Redux to port data ; )
  const client = useApolloClient()
  useEffect(() => {
    console.log(locationSearch)
    let ignore = false

    async function getLocation() {
      const { data } = await client.query({
        query: LOCATION_QUERY,
        variables: { name: locationSearch },
      })
      console.log(data)
      if (!ignore) setCurrentData(data)
    }

    getLocation()

    return () => {
      ignore = true
    }
  }, [locationSearch])

  return (
    <View>
      <Autocomplete
        autoCapitalize="none"
        autoCorrect={false}
        containerStyle={styles.autocompleteContainer}
        data={
          _.has(currentData, 'locations') && !_.has(currentLocation, 'name') ? currentData.locations : []
          // !loading &&
          // _.has(currentLocation, 'name') &&
          // isSelected(locationSearch, currentLocation.name)
          //   ? []
          //   :_.has(data, 'locations') ? data.locations : []
        }
        defaultValue={isObject(currentLocation) ? currentLocation.name : ``}
        onChangeText={text => setLocationSearch(text)}
        placeholder={placeholder}
        renderItem={({item}) => {
          return (
            // loading ? (
            //   <View>
            //     <ActivityIndicator size="small" color="#00ff00" />
            //   </View>
            // ) :
            <TouchableOpacity onPress={() => setCurrentLocation(item)}>
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
  itemText: {
    fontSize: 15,
    margin: 2,
    color: 'black'
  },
})

LocationSearchInput.defaultProps = {
  selectedLocation: {
    name: ``,
  },
}

LocationSearchInput.propTypes = {
  onLocationSelected: PropTypes.func,
  selectedLocation: PropTypes.object,
  placeholder: PropTypes.string,
}

export default LocationSearchInput
