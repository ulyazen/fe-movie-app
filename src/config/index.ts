import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { Config } from 'src/types'

const dev = 'http://localhost:4100/graphql'
const production = '<not yet>'

const config: Config = {
  baseUrl: process.env.NODE_ENV === 'development' ? dev : production,
  dev: dev,
  production: production,
}

const httpLink = createHttpLink({
  uri: config.baseUrl,
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      Authorization: token || '',
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default config
