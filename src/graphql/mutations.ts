import { gql } from '@apollo/client'

export const MUTATION_SIGNUP = gql`
  mutation Signup($name: String!, $username: String!, $password: String!) {
    signup(name: $name, username: $username, password: $password) {
      id
      username
      name
    }
  }
`

export const MUTATION_LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        id
        name
        username
      }
      token
    }
  }
`
