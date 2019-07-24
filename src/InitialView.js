/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native'
const _ = require('lodash')

import { Colors } from 'react-native/Libraries/NewAppScreen'
import LocationSearchInput from './components/LocationSearchInput'

import Header from './Header'

const InitialView = () => {
  const [selectedLocation, setSelectedLocation] = useState({})

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Header />
          <View style={styles.body}>
            <View style={styles.topContainer}>
              {_.has(selectedLocation, 'name') ? (
                <Text style={styles.sectionTitle}>
                  Ihr Ort: {selectedLocation.name}
                </Text>
              ) : (
                <Text style={styles.sectionDescription}>
                  Suchen Sie nach einem Ort
                </Text>
              )}
            </View>
            <View style={styles.locationContainer}>
              <LocationSearchInput
                onLocationSelected={setSelectedLocation}
                selectedLocation={selectedLocation}
                placeholder={`Ort eingeben`}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
    height: '100%',
  },
  body: {
    backgroundColor: Colors.white,
  },
  topContainer: {
    marginTop: 16,
    paddingHorizontal: 24,
  },
  locationContainer: {
    height: '90%',
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  types: {
    flexDirection: 'row',
    marginTop: 20,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
})

export default InitialView
