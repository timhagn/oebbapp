/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native'

import getLocationsByName from './utils/getLocationsByName'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import LocationSearchInput from './components/LocationSearchInput'


const InitialScreen = () => {
  // const { loading, data } = getLocationsByName(`Wien`)
  const [ selectedLocation, setSelectedLocation ] = useState({})
  // const setCurrentLocation = location => setSelectedLocation(location)

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <LocationSearchInput
                // onLocationSelected={setSelectedLocation}
                selectedLocation={selectedLocation}
                placeholder={`Start eingeben`}
              />
              {/*{loading ? (*/}
              {/*  <Text>Loading ...</Text>*/}
              {/*) : (*/}
              {/*  <FlatList*/}
              {/*    data={data.locations}*/}
              {/*    numColumns={1}*/}
              {/*    keyExtractor={({ id }) => id.toString()}*/}
              {/*    renderItem={({ item }) => {*/}
              {/*      return (*/}
              {/*        <Text style={styles.sectionDescription}>*/}
              {/*          {item.name} Test*/}
              {/*        </Text>*/}
              {/*      )*/}
              {/*    }}*/}
              {/*  />*/}
              {/*)}*/}
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
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

export default InitialScreen
