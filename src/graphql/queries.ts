import { gql } from '@apollo/client'

export const QUERY_GET_USER = gql`
  query user {
    user {
      id
      username
      name
    }
  }
`

export const QUERY_GET_USERS = gql`
  query users {
    users {
      id
      username
      name
    }
  }
`

export const QUERY_GET_MOVIES = gql`
  query movies {
    movies {
      title
      description
      image
      imageTitle
      imageSmall
      trailer
      video
      year
      limit
      genre
      isSeries
    }
  }
`
