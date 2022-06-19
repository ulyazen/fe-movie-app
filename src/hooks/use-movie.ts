import { useQuery } from '@apollo/react-hooks'
import { QUERY_GET_MOVIES } from 'src/graphql/queries'

import { Movie } from 'src/types'

export const useMovies = (): [Movie[], boolean] => {
  const { loading, data } = useQuery(QUERY_GET_MOVIES)

  return [data?.movies, loading]
}
