/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from '@apollo/react-hooks'

import InitialScreen from './InitialScreen'

const client = new ApolloClient({ uri: 'http://192.168.0.19:3000/graphql' })

const App = () => {
  return (
    <ApolloProvider client={client}>
      <InitialScreen />
    </ApolloProvider>
  )
}

export default App
