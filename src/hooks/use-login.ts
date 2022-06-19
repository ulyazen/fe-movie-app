import { useMutation } from '@apollo/react-hooks'

import { MUTATION_LOGIN } from 'src/graphql/mutations'

interface InputProps {
  username: string
  password: string
}

export const useLogin = (): [
  (input: InputProps) => Promise<boolean>,
  boolean
] => {
  const [mutateLogin, { loading: LoadingLogin }] = useMutation(MUTATION_LOGIN)

  const login = async (input: InputProps): Promise<boolean> => {
    const { username, password } = input

    const { data: loginData } = await mutateLogin({
      variables: { username, password },
    })

    if (!loginData) {
      return false
    }

    localStorage.setItem('token', loginData.login.token)
    localStorage.setItem('userId', loginData.login.user.id)

    return true
  }

  return [login, LoadingLogin]
}
