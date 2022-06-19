import { useQuery } from '@apollo/react-hooks'
import { QUERY_GET_USER } from 'src/graphql/queries'

export const useAuth = (): [boolean, boolean] => {
  const { loading, data } = useQuery(QUERY_GET_USER)

  if (loading) return [false, loading]

  return [!!data?.warrior?.tribe, loading]
}
