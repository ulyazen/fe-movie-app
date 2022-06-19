import { useQuery } from '@apollo/react-hooks'
import {
  QUERY_GET_USER,
  QUERY_GET_USERS,
  QUERY_GET_MOVIES,
} from 'src/graphql/queries'
import { User, Movie } from 'src/types'

export const useAuth = (): [boolean, boolean] => {
  const { loading, data } = useQuery(QUERY_GET_USER)

  if (loading) return [false, loading]

  return [!!data?.user, loading]
}

export const useUser = (): [User, boolean] => {
  const { loading, data } = useQuery(QUERY_GET_USER)

  return [data?.user, loading]
}

export const useUsers = (): [User[], boolean] => {
  const { loading, data } = useQuery(QUERY_GET_USERS)

  return [data?.users, loading]
}

export const useMovies = (): [Movie[], boolean] => {
  const { loading, data } = useQuery(QUERY_GET_MOVIES)

  return [data?.movies, loading]
}
