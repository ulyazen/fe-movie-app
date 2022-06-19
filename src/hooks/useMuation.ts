import { useMutation } from '@apollo/react-hooks'

import { MUTATION_SIGNUP, MUTATION_LOGIN } from 'src/graphql/mutations'

interface SignUpProps {
  name: string
  username: string
  password: string
}
interface LoginProps {
  username: string
  password: string
}

export const useSignup = (): [
  (input: SignUpProps) => Promise<boolean>,
  boolean
] => {
  const [mutateSignup, { loading: loadingSignup }] =
    useMutation(MUTATION_SIGNUP)
  const [mutateLogin, { loading: LoadingLogin }] = useMutation(MUTATION_LOGIN)

  const signup = async (input: SignUpProps): Promise<boolean> => {
    const { name, username, password } = input

    const { data: signupData } = await mutateSignup({
      variables: { name, username, password },
    })

    if (!signupData) {
      return false
    }

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

  return [signup, loadingSignup || LoadingLogin]
}

export const useLogin = (): [
  (input: LoginProps) => Promise<boolean>,
  boolean
] => {
  const [mutateLogin, { loading: LoadingLogin }] = useMutation(MUTATION_LOGIN)

  const login = async (input: LoginProps): Promise<boolean> => {
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
