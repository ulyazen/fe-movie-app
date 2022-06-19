import { useQuery } from '@apollo/react-hooks'
import { QUERY_GET_USER } from 'src/graphql/queries'
import { User } from 'src/types'

export const useUser = (): [User, boolean] => {
  const { loading, data } = useQuery(QUERY_GET_USER)

  return [data?.user, loading]
}
