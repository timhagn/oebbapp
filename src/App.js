/**
 * ÖBB HAFAS-GraphQL Simple Example App
 *
 * @format
 * @flow
 */

import React from 'react'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from '@apollo/react-hooks'

import InitialView from './InitialView'

const client = new ApolloClient({ uri: 'http://192.168.0.19:3000/graphql' })

const App = () => {
  return (
    <ApolloProvider client={client}>
      <InitialView />
    </ApolloProvider>
  )
}

export default App
