import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import Routes from 'src/routes'
import config from 'src/config'

const client = new ApolloClient({
  uri: config.baseUrl,
  cache: new InMemoryCache(),
})
function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}

export default App
